const express = require('express');
const app = express();
const { inicio } = require('./schedule');
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send({message: "Ok. I'm fine on port"});
    inicio();
});

app.listen(port, () => console.info("Connectado na porta ->", port))