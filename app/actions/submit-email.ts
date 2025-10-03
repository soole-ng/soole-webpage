"use server"

import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

// Define the type for the response
type SubmitEmailResponse = {
  success: boolean
  message?: string
}

export async function submitEmail(email: string): Promise<SubmitEmailResponse> {
  try {
    // Log the email submission attempt
    console.log(`Email submitted: ${email}`)

    // Get environment variables
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID

    // Check if we have the required environment variables
    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error("Missing required environment variables for Google Sheets integration")
      return {
        success: false,
        message: "Server configuration error. Please contact support.",
      }
    }

    try {
      // Set up authentication
      const serviceAccountAuth = new JWT({
        email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      })

      // Initialize the sheet
      console.log("Initializing GoogleSpreadsheet...")
      const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth)
      console.log("Loading sheet info...")
      await doc.loadInfo()
      console.log("Sheet info loaded successfully. Sheet title:", doc.title)

      // Get the first sheet
      const sheet = doc.sheetsByIndex[0]
      console.log("Accessing sheet:", sheet.title)
      
      // Load the cells to check if the first row has any values
      await sheet.loadCells("A1:B1")
      const hasHeaders = sheet.getCell(0, 0).value !== null || sheet.getCell(0, 1).value !== null
      
      if (!hasHeaders) {
        console.log("No headers found. Setting header row...")
        await sheet.setHeaderRow(["email", "timestamp"])
        console.log("Header row set successfully.")
      } else {
        // Load the header row if headers exist
        await sheet.loadHeaderRow()
        console.log("Header row loaded. Headers:", sheet.headerValues)
      }
      
      // Check if the email already exists
      console.log("Checking for duplicate email...")
      const rows = await sheet.getRows()
      const existingEmail = rows.find(row => row.get("email")?.toLowerCase() === email.toLowerCase())
      
      if (existingEmail) {
        console.log("Email already exists in the waitlist:", email)
        return {
          success: false,
          message: "This email is already on the waitlist! We'll notify you when we launch.",
        }
      }
      
      console.log("Attempting to add row:", { email, timestamp: new Date().toISOString() })

      // Add a row with the email and timestamp
      await sheet.addRow({
        email,
        timestamp: new Date().toISOString(),
      })
      console.log("Row added successfully to Google Sheet.")

      return {
        success: true,
        message: "Email successfully added to waitlist",
      }
    } catch (googleError: any) {
      // Log the full error object for more details
      console.error("Google Sheets API error:", googleError)
      console.error("Error message:", googleError?.message)
      console.error("Error response:", googleError?.response?.data)

      // Return failure if Google Sheets integration fails
      return {
        success: false,
        message: "Failed to add email to waitlist due to a server error. Please try again later.",
      }
    }
  } catch (error) {
    console.error("Error submitting email:", error)
    return {
      success: false,
      message: "Failed to submit email. Please try again later.",
    }
  }
}
