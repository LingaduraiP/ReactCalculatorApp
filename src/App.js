import React from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = React.useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const c = () => {
    setResult((prev) => prev.slice(0, prev.length - 1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("");
      alert("someting is wrong");
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="text" name="" value={result} id="" />
        </form>
        <div className="keypad">
          <button onClick={clear} className="highlight clear">
            Clear
          </button>
          <button onClick={c} className="highlight">
            C
          </button>
          <button onClick={clickHandler} className="highlight" name="/">
            &divide;
          </button>
          <button onClick={clickHandler} name="7">
            7
          </button>
          <button onClick={clickHandler} name="8">
            8
          </button>
          <button onClick={clickHandler} name="9">
            9
          </button>
          <button onClick={clickHandler} className="highlight" name="*">
            &times;
          </button>
          <button onClick={clickHandler} name="4">
            4
          </button>
          <button onClick={clickHandler} name="5">
            5
          </button>
          <button onClick={clickHandler} name="6">
            6
          </button>
          <button onClick={clickHandler} className="highlight" name="-">
            &ndash;
          </button>
          <button onClick={clickHandler} name="1">
            1
          </button>
          <button onClick={clickHandler} name="2">
            2
          </button>
          <button onClick={clickHandler} name="3">
            3
          </button>
          <button onClick={clickHandler} className="highlight" name="+">
            +
          </button>
          <button onClick={clickHandler} name="9">
            0
          </button>
          <button onClick={clickHandler} name=".">
            .
          </button>
          <button onClick={calculate} className=" sum">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
