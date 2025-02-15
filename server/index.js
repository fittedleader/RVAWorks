const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Use Axios for HTTP requests
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
    keyFile: './src/rvaworksgooglesheetsjson.json', // Replace with your downloaded JSON file
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = '1es8VQeum21udzQMSS-xswd6IOF7drcYZSFsND5jGRew'; // Replace with your Google Sheet ID

// Constant Contact setup
const CONSTANT_CONTACT_API_KEY = '7251540c-5f77-40dd-b3d7-32f2a76d13f1'; // Replace with your API key
const CONSTANT_CONTACT_ACCESS_TOKEN = 'zK5M8v8mpO14wrsXVkuPzjhvnsc1pf_b-2othv3Qmmg'; // Replace with your access token
const CONSTANT_CONTACT_LIST_ID = 'Open Trellis'; // Replace with your Constant Contact List ID

// Route for writing data to Google Sheets
app.post('/write-to-sheet', async (req, res) => {
    const data = req.body; // Data sent from the React app


    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A1', // Adjust range based on your sheet structure
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [Object.values(data)],
            },
        });
        res.status(200).send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to write data to the sheet.');
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
                list_memberships: [CONSTANT_CONTACT_LIST_ID], // Add email to specific list
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
        // Log all available error details for debugging
        console.error('Error subscribing to Constant Contact:', {
            status: error.response?.status,
            data: error.response?.data,
            headers: error.response?.headers,
            message: error.message,
        });
        res.status(500).send({ message: 'Failed to subscribe to Constant Contact.' });
    }
});

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

        // If successful, send account info
        res.status(200).send({
            message: 'Authentication successful!',
            data: response.data,
        });
    } catch (error) {
        // If token is invalid or other error occurs, send error details
        console.error('Authorization failed:', error.response?.data || error.message);
        res.status(401).send({
            message: 'Authorization failed. Token might be invalid.',
            error: error.response?.data || error.message,
        });
    }
});


app.listen(3001, () => console.log('Server is running on port 3001'));
