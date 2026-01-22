function FinishedScreen({ points, maxPossiblePoints, highScore }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) {
    emoji = "🏆";
  } else if (percentage >= 80) {
    emoji = "🎉";
  } else if (percentage >= 50) {
    emoji = "🙂";
  } else {
    emoji = "😞";
  }
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} points!{" "}
        {percentage}% correct. {emoji}
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
    </>
  );
}

export default FinishedScreen;
