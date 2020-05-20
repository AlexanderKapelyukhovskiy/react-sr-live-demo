const React = require("react");
const express = require("express");
const html = require("./index.html");
try {
  const client = require("./client");
} catch (error) {}

const readFileSync = require("fs").readFileSync;
const renderToString = require("react-dom/server").renderToString;
//const App = require("./client/App");
const handleModifyAnswerVotes = require("./shared/utility")
  .handleModifyAnswerVotes;

const data = {
  questions: [
    {
      questionId: "Q1",
      content: "Which back end solution should we use for our application?",
    },
    {
      questionId: "Q2",
      content:
        "What percentage of developer time should be devoted to end-to-end testing?",
    },
  ],
  answers: [
    {
      answerId: "A1",
      questionId: 1,
      upvotes: 2,
      content: "Apache",
    },
    {
      answerId: "A2",
      questionId: "Q1",
      upvotes: 0,
      content: "Java",
    },
    {
      answerId: "A3",
      questionId: "Q1",
      upvotes: 4,
      content: "Node.js",
    },
    {
      answerId: "A4",
      questionId: "Q2",
      upvotes: 2,
      content: "25%",
    },
    {
      answerId: "A5",
      questionId: "Q2",
      upvotes: 1,
      content: "50%",
    },
    {
      answerId: "A6",
      questionId: "Q2",
      upvotes: 1,
      content: "75%",
    },
  ],
};

const app = new express();

//app.use(express.static("."));

app.use("/vote/:answerId", (req, res) => {
  const { query, params } = req;
  data.answers = handleModifyAnswerVotes(
    data.answers,
    params.answerId,
    query.vote
  );
  res.json("OK");
});

// app.use("/data", (_req, res) => {
//   res.json(data);
// });

// app.get("/client.js", (_req, res) => {
//   const index = readFileSync("./client.js", "utf-8");
//   //const rendered = renderToString(<App {...data} />);
//   res.send(index);
// });

app.get("/:id", (_req, res) => {
  const { query, params } = _req;

  //console.log(params);
  if (params.id === "client.js") {
    const client = readFileSync("./client.js", "utf-8");
    res.send(client);
    return;
  }
  if (params.id === "data") {
    res.json(data);
    return;
  }
  const index = html.text; //readFileSync("public/index.html", "utf-8");
  //console.log(index);
  //const rendered = renderToString(<App {...data} />);
  res.send(index.replace("{{rendered}}", "rendered!!"));
});

app.get("/data", (_req, res) => {
  const index = html.text; //readFileSync("public/index.html", "utf-8");
  //console.log(index);
  //const rendered = renderToString(<App {...data} />);
  res.send(index.replace("{{rendered}}", "rendered!!!!"));
});

app.listen(3000, () => console.log("Server is listening"));
