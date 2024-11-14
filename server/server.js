const express = require("express");
const cors = require("cors");
const path = require("path");
const fileStream = require("fs");

const app = express();
const PORT = 5000;

// CORS middleware
app.use(cors());

// API Endpoint to get Accounts data
app.get("/api/accounts", (req, res) => {

    // Read Sample JSON file
    // TODO : Call plaid api directly when implemented

    const dataPath = path.join(__dirname, "resources/sampleData/accounts_get.json");
    fileStream.readFile(dataPath, (err, data) => {

        // If there is an error reading the file
        if (err) {
            console.error("Error reading accounts_get file : ", err);
            res.status(500).json(
                {
                    error: "Failed to load accounts data"
                }
            );
            return;
        }

        // Parse JSON data and extract relevant fields
        const accountsData = JSON.parse(data);
        const accounts = accountsData.accounts.map(account => ({
            name: account.name,
            type: account.type,
            subtype: account.subtype,
            balance: account.balances.current
        }));

        // Send filtered data to the frontend
        res.json({accounts});
    });

});

app.get("/api/balance/get", (req, res) => {

    // Read Sample JSON file
    // TODO : Call plaid api directly when implemented

    const dataPath = path.join(__dirname, "resources/sampleData/accounts_balance.json");
    fileStream.readFile(dataPath, (err, data) => {

        // If there is an error reading the file
        if (err) {
            console.error("Error reading accounts_get file : ", err);
            res.status(500).json(
                {
                    error: "Failed to load accounts data"
                }
            );
            return;
        }

        // Parse JSON data and extract relevant fields
        const accountsBalanceData = JSON.parse(data);
        const accountsBalance = accountsBalanceData.accounts.map(account => ({
            name: account.name,
            balance: account.balances.current
        }));

        res.json({accountsBalance});
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
