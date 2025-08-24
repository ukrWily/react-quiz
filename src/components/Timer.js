import { useEffect } from "react";
//
function Timer({ dispatch, secondsRemaining }) {
  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
  }, [dispatch]);
  return (
    <div className="timer">
      {Math.floor(secondsRemaining / 60)}:
      {(secondsRemaining % 60).toFixed(0).padStart(2, "0")}
    </div>
  );
}

export default Timer;
