const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Enable CORS for both frontend pages
app.use(cors({
    origin: ["https://rva-works.vercel.app", "https://rva-works.vercel.app/business", "https://rvaworks.org", "https://rvaworks.org/business"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
    credentials: true
}));

app.use(bodyParser.json());

// Load Google Sheets credentials from environment variables
const credentials = {
    type: "service_account",
    project_id: process.env.GCP_PROJECT_ID, 
    private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Fix newline formatting
    client_email: process.env.GCP_CLIENT_EMAIL,
    token_uri: process.env.GCP_TOKEN_URI
};

// Authenticate with Google Sheets API
const auth = new google.auth.GoogleAuth({
    credentials, // Use credentials from env vars
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = '1es8VQeum21udzQMSS-xswd6IOF7drcYZSFsND5jGRew';

// Constant Contact setup
const CONSTANT_CONTACT_API_KEY = '7251540c-5f77-40dd-b3d7-32f2a76d13f1'; // Replace with your API key
const CONSTANT_CONTACT_ACCESS_TOKEN = 'zK5M8v8mpO14wrsXVkuPzjhvnsc1pf_b-2othv3Qmmg'; // Replace with your access token
const CONSTANT_CONTACT_LIST_ID = 'Open Trellis'; // Replace with your Constant Contact List ID

// Debugging - Ensure env variables are loaded
console.log("Google Credentials Loaded:", {
    project_id: credentials.project_id,
    client_email: credentials.client_email
});

console.log("Authenticating with Google Sheets API...");

auth.getClient()
    .then(client => {
        console.log("✅ Authentication successful with Google Sheets API!");
    })
    .catch(error => {
        console.error("❌ Error during Google Sheets authentication:", error.message || error);
        process.exit(1);
    });

// Route for writing data to Google Sheets
app.post('/write-to-sheet', async (req, res) => {
    const data = req.body;

    try {
        console.log("Attempting to write data to Google Sheets...");

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            resource: { values: [Object.values(data)] },
        });

        console.log("✅ Successfully wrote data to Google Sheets.");
        res.status(200).send({ message: "Data successfully written to Google Sheets!", response: response.data });
    } catch (error) {
        console.error("❌ Error writing to Google Sheets:", error.message || error);
        res.status(500).send({ message: 'Failed to write data to the sheet.', error: error.message });
    }
});

// Route for subscribing emails to Constant Contact
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    try {
        console.log(`Attempting to subscribe email: ${email} to Constant Contact...`);

        const response = await axios.post(
            'https://api.cc.email/v3/contacts/sign_up_form',
            {
                email_address: email,
                list_memberships: [CONSTANT_CONTACT_LIST_ID],
            },
            {
                headers: {
                    Authorization: `Bearer ${CONSTANT_CONTACT_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("✅ Successfully subscribed to Constant Contact.");
        res.status(200).send({ message: 'Successfully subscribed to Constant Contact!' });
    } catch (error) {
        console.error('❌ Error subscribing to Constant Contact:', error.response?.data || error.message);
        res.status(500).send({ message: 'Failed to subscribe to Constant Contact.', error: error.message });
    }
});

// Test Authorization Route for Constant Contact
app.get('/test-authorization', async (req, res) => {
    try {
        console.log("Testing Constant Contact authorization...");

        const response = await axios.get(
            'https://api.cc.email/v3/account',
            {
                headers: {
                    Authorization: `Bearer ${CONSTANT_CONTACT_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("✅ Authorization successful for Constant Contact.");
        res.status(200).send({
            message: 'Authentication successful!',
            data: response.data,
        });
    } catch (error) {
        console.error('❌ Authorization failed:', error.response?.data || error.message);
        res.status(401).send({
            message: 'Authorization failed. Token might be invalid.',
            error: error.response?.data || error.message,
        });
    }
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
