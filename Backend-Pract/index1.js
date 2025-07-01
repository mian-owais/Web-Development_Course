//const express = require("express");
import express from "express";
const app =express();
const PORT = 1500;

app.get("/", (req, res) =>{
    res.send("<h1>Welcome to My Express Server!</h1>");
})

app.get("/intagram", (req, res) =>{
    res.send("Welcome to Instagram!");
})

app.get("/twitter", (req, res) =>{
    res.send("Welcome to Twitter!");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

