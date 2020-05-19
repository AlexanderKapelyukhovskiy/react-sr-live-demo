import express from "express";
//const express = require("express");

const app = new express();

app.get("/", async (_req, res) => {
  res.send(`
    <h1>Hello World. REACT IS EXELLENT!</h1>
  `);
});

app.listen(7777);
console.log("Server is listening");
