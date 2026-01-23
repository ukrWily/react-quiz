import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    setInterval(() => {
      console.log("tick");
    }, 1000);
  }, []);
  return <div className="timer">TIMER</div>;
}

export default Timer;
