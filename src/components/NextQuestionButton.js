function NextQuestionButton({ dispatch, answer }) {
  if (answer === null) {
    return null;
  }
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next Question
      </button>
    </div>
  );
}

export default NextQuestionButton;
