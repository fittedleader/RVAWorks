const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

// ✅ Fix CORS: Allow specific frontend domain + Preflight requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://rva-works.vercel.app"); // Allow frontend
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow these methods
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow headers
    res.header("Access-Control-Allow-Credentials", "true"); // If using cookies or sessions
    if (req.method === "OPTIONS") {
        return res.sendStatus(204); // Handle preflight requests properly
    }
    next();
});

app.use(bodyParser.json());

// ✅ Google Sheets setup
const auth = new google.auth.GoogleAuth({
    keyFile: './src/rvaworksgooglesheetsjson.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = '1es8VQeum21udzQMSS-xswd6IOF7drcYZSFsND5jGRew';

// ✅ Write to Google Sheets Route
app.post('/write-to-sheet', async (req, res) => {
    try {
        const data = req.body;
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            resource: { values: [Object.values(data)] },
        });

        res.status(200).json({ message: "Data written to Google Sheets!", response: response.data });
    } catch (error) {
        console.error("Google Sheets Error:", error);
        res.status(500).json({ message: 'Failed to write data.', error: error.message });
    }
});

// ✅ Start the Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
