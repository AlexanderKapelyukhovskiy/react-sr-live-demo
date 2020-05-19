import express from "express";
//const express = require("express");
import { readFileSync } from "fs";

const app = new express();

app.use(express.static("dist"));

app.get("/", async (_req, res) => {
  const index = readFileSync("public/index.html", "utf-8");
  res.send(index);
});

app.listen(7777);
console.log("Server is listening");
