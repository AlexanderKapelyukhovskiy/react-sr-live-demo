module.exports = {
  handleModifyAnswerVotes,
};
function handleModifyAnswerVotes(answers, answerId, vote) {
  return answers.map((a) => {
    if (a.answerId !== answerId) {
      return a;
    } else {
      return { ...a, upvotes: parseInt(a.upvotes) + parseInt(vote) };
    }
  });
}
