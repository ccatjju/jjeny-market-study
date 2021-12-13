import react from "react";
import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  react.useEffect(function () {
    setTime(time + 1);
  }, []);
  return (
    <div>
      <h3>{time}</h3>
      <button>누르면 올라간다</button>
    </div>
  );
}

export default TimerComponent;
