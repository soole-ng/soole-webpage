// Test script to verify Google Sheets connection
// Run with: node test-google-sheets.js

require('dotenv').config({ path: '.env.local' });
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

async function testGoogleSheets() {
  try {
    console.log('Starting Google Sheets test...\n');

    // Check environment variables
    console.log('Checking environment variables...');
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      console.error('❌ GOOGLE_SERVICE_ACCOUNT_EMAIL is missing');
      return;
    }
    console.log('✅ GOOGLE_SERVICE_ACCOUNT_EMAIL:', GOOGLE_SERVICE_ACCOUNT_EMAIL);

    if (!GOOGLE_PRIVATE_KEY) {
      console.error('❌ GOOGLE_PRIVATE_KEY is missing');
      return;
    }
    console.log('✅ GOOGLE_PRIVATE_KEY is set (length:', GOOGLE_PRIVATE_KEY.length, ')');

    if (!GOOGLE_SHEET_ID) {
      console.error('❌ GOOGLE_SHEET_ID is missing');
      return;
    }
    console.log('✅ GOOGLE_SHEET_ID:', GOOGLE_SHEET_ID);
    console.log('Sheet URL: https://docs.google.com/spreadsheets/d/' + GOOGLE_SHEET_ID + '/edit\n');

    // Set up authentication
    console.log('Setting up JWT authentication...');
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('✅ JWT authentication configured\n');

    // Initialize the sheet
    console.log('Connecting to Google Sheet...');
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    console.log('✅ Successfully connected to sheet:', doc.title);
    console.log('Sheet locale:', doc.locale);
    console.log('Time zone:', doc.timeZone);
    console.log('Number of sheets:', doc.sheetCount, '\n');

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];
    console.log('First sheet details:');
    console.log('  Title:', sheet.title);
    console.log('  Row count:', sheet.rowCount);
    console.log('  Column count:', sheet.columnCount);
    console.log('  Headers:', sheet.headerValues, '\n');

    // Check if headers exist
    if (!sheet.headerValues || sheet.headerValues.length === 0) {
      console.log('⚠️  No headers found. Setting header row...');
      await sheet.setHeaderRow(['email', 'timestamp']);
      console.log('✅ Header row set successfully\n');
    }

    // Test adding a row
    console.log('Testing row addition...');
    const testEmail = 'test@example.com';
    const testTimestamp = new Date().toISOString();
    
    await sheet.addRow({
      email: testEmail,
      timestamp: testTimestamp,
    });
    console.log('✅ Successfully added test row:', { email: testEmail, timestamp: testTimestamp });
    console.log('\n🎉 All tests passed! Your Google Sheets integration is working correctly.');

  } catch (error) {
    console.error('\n❌ Error occurred:');
    console.error('Message:', error.message);
    
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Status Text:', error.response.statusText);
      console.error('Response data:', error.response.data);
    }
    
    if (error.code) {
      console.error('Error code:', error.code);
    }

    console.error('\nFull error:', error);

    // Common error messages
    console.log('\n📝 Common solutions:');
    console.log('1. Make sure the service account email has Editor access to the sheet');
    console.log('   Go to your Google Sheet → Share → Add:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    console.log('2. Enable Google Sheets API in Google Cloud Console');
    console.log('   https://console.cloud.google.com/apis/library/sheets.googleapis.com');
    console.log('3. Verify the GOOGLE_SHEET_ID is correct');
    console.log('4. Check that the private key is properly formatted with \\n for line breaks');
  }
}

testGoogleSheets();
