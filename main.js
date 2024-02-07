const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.ENVIRONMENT || "VSCODE"

app.get("/",(req,res)=> {
    res.send(`Hello from ${ENVIRONMENT}`);
})

app.listen(PORT,(req,res)=> {
    console.log(`port is up and running on port ${PORT}`);
})