import React from "react";

const App = ({ questions, answers, handleModifyAnswerVotes }) => (
  <div>
    <h1>Q&A Tool</h1>
    {questions.map(({ questionId, content }) => {
      return (
        <div key={questionId}>
          <h3>{content}</h3>
          <div>
            {answers
              .filter((a) => a.questionId === questionId)
              .map((a) => (
                <div key={a.answerId}>
                  <span>
                    {a.content} - {a.upvotes}
                    <button
                      onClick={() => handleModifyAnswerVotes(a.answerId, 1)}
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleModifyAnswerVotes(a.answerId, -1)}
                    >
                      -
                    </button>
                  </span>
                </div>
              ))}
          </div>
        </div>
      );
    })}
  </div>
);

export default App;
