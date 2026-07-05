"use server"

import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

type ContactFormInput = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

type SubmitContactFormResponse = {
  success: boolean
  message?: string
}

const CONTACT_SHEET_TITLE = "Contact Submissions"
const CONTACT_SHEET_HEADERS = ["firstName", "lastName", "email", "subject", "message", "timestamp"]

export async function submitContactForm(data: ContactFormInput): Promise<SubmitContactFormResponse> {
  try {
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID

    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error("Missing required environment variables for Google Sheets integration")
      return {
        success: false,
        message: "Server configuration error. Please contact support.",
      }
    }

    try {
      const serviceAccountAuth = new JWT({
        email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      })

      const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth)
      await doc.loadInfo()

      // Contact submissions get their own tab in the same spreadsheet as
      // the waitlist, created on first use so this doesn't depend on any
      // manual setup step in the Google Sheet.
      let sheet = doc.sheetsByTitle[CONTACT_SHEET_TITLE]
      if (!sheet) {
        sheet = await doc.addSheet({
          title: CONTACT_SHEET_TITLE,
          headerValues: CONTACT_SHEET_HEADERS,
        })
      } else {
        await sheet.loadHeaderRow().catch(async () => {
          await sheet.setHeaderRow(CONTACT_SHEET_HEADERS)
        })
      }

      await sheet.addRow({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        subject: data.subject,
        message: data.message,
        timestamp: new Date().toISOString(),
      })

      return {
        success: true,
        message: "Your message has been sent. We'll get back to you soon.",
      }
    } catch (googleError: any) {
      console.error("Google Sheets API error (contact form):", googleError)
      return {
        success: false,
        message: "Failed to send your message due to a server error. Please try again later.",
      }
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    }
  }
}
