const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();

// Enable CORS for both frontend pages
app.use(cors({
    origin: ["https://rva-works.vercel.app", "https://rva-works.vercel.app/business"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
    credentials: true
}));

app.use(bodyParser.json());

// Load Google Sheets credentials from file
const credentialsPath = path.join(__dirname, 'rvaworksgooglesheetsjson.json');
let credentials = {};

try {
    credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
    console.log("Successfully loaded credentials from JSON file.");
} catch (error) {
    console.error("Error loading credentials file:", error);
}

// Authenticate with Google Sheets API
const auth = new google.auth.GoogleAuth({
    credentials, // Use credentials from file
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = '1es8VQeum21udzQMSS-xswd6IOF7drcYZSFsND5jGRew';

// Constant Contact setup
const CONSTANT_CONTACT_API_KEY = '7251540c-5f77-40dd-b3d7-32f2a76d13f1'; // Replace with your API key
const CONSTANT_CONTACT_ACCESS_TOKEN = 'zK5M8v8mpO14wrsXVkuPzjhvnsc1pf_b-2othv3Qmmg'; // Replace with your access token
const CONSTANT_CONTACT_LIST_ID = 'Open Trellis'; // Replace with your Constant Contact List ID

// Route for writing data to Google Sheets
app.post('/write-to-sheet', async (req, res) => {
    const data = req.body;

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            resource: { values: [Object.values(data)] },
        });

        res.status(200).send({ message: "Data successfully written to Google Sheets!", response: response.data });
    } catch (error) {
        console.error("Error writing to Google Sheets:", error);
        res.status(500).send({ message: 'Failed to write data to the sheet.', error: error.message });
    }
});

// Route for subscribing emails to Constant Contact
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    try {
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

        res.status(200).send({ message: 'Successfully subscribed to Constant Contact!' });
    } catch (error) {
        console.error('Error subscribing to Constant Contact:', error.response?.data || error.message);
        res.status(500).send({ message: 'Failed to subscribe to Constant Contact.', error: error.message });
    }
});

// Test Authorization Route for Constant Contact
app.get('/test-authorization', async (req, res) => {
    try {
        const response = await axios.get(
            'https://api.cc.email/v3/account',
            {
                headers: {
                    Authorization: `Bearer ${CONSTANT_CONTACT_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).send({
            message: 'Authentication successful!',
            data: response.data,
        });
    } catch (error) {
        console.error('Authorization failed:', error.response?.data || error.message);
        res.status(401).send({
            message: 'Authorization failed. Token might be invalid.',
            error: error.response?.data || error.message,
        });
    }
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
