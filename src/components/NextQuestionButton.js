function NextQuestionButton({ dispatch, answer, index, questions }) {
  if (answer === null) {
    return null;
  }
  if (index < questions.length - 1)
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

  if (index === questions.length - 1)
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="btn btn-ui"
        >
          Finish
        </button>
      </div>
    );
}

export default NextQuestionButton;
