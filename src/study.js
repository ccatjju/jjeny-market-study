import logo from "./logo.svg";
import "./App.css";
import Test from "./child.js";
import TimerComponent from "./timer.js";

function App() {
  const text = "함수 안에 선언하는 테스트";
  const hamsu = function () {
    return <h3>"함수로써 출력하는 테스트");</h3>;
  };
  const click = function () {
    alert("너 클릭했다!!");
  };
  return (
    <div>
      <h1>안녕하세용</h1>
      <h2>{text}</h2>
      {hamsu()}
      <div onClick={click}>여기 눌러바바</div>
      <TimerComponent />
      <Test name="젤리클" age={3} />
      <Test name="캣츠" age={5} />
      <Test name="노르띠" age={37} />
    </div>
  );
}

export default App;
