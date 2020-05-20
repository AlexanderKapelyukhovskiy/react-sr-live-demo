import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { handleModifyAnswerVotes } from "../shared/utility";

let state = undefined;

fetch("/data")
  .then((data) => data.json())
  .then((json) => {
    state = json;
    console.log(json);
    render(json);
  });

function handleVote(answerId, vote) {
  state.answers = handleModifyAnswerVotes(state.answers, answerId, vote);
  fetch(`/vote/${answerId}?vote=${vote}`);

  render();
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handleModifyAnswerVotes={handleVote} />,
    document.getElementById("Container")
  );
}
