import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { useLocalStorage } from "@rehooks/local-storage";
// import ls from "local-storage";
import "./App.css";

function App() {
  const [hugs, setHugs] = useLocalStorage<number>("hugs");
  const [debugText, setDebugText] = useState("");
  const getHugsText = (hugs: number | null) => {
    if (hugs === null) {
      return `0 hugs`;
    }
    if (hugs === 1) {
      return `${hugs} hug`;
    }
    return `${hugs} hugs`;
  };

  const [buttonDepth, setButtonDepth] = useState(1);

  // useEffect(() => {
  //   const storedHugs = localStorage.get('hugs');
  //   console.log(storedHugs);
  // }, []);

  return (
    <div className="App">
      <h1 style={{ userSelect: "none", WebkitUserSelect: "none" }}>
        {getHugsText(hugs)} today
      </h1>
      <div
        style={{ userSelect: "none", WebkitUserSelect: "none" }}
        className="button-container"
        role="button"
        onClick={() => {
          hugs === null ? setHugs(1) : setHugs(hugs + 1);
          setButtonDepth(1);
        }}

        onMouseDown={() => {
          setButtonDepth(0.9);
        }}
        onTouchStart={() => {
          setButtonDepth(0.9);
        }}

        onMouseUp={() => {
          setButtonDepth(0.95);
        }}
        onMouseOver={() => {
          setButtonDepth(0.95);
        }}

        onMouseOut={() => {
          setButtonDepth(1);
        }}
        onTouchEnd={() => {
          setButtonDepth(1);
        }}
      >
        <img
          src="hug-emoji.svg"
          alt="hug emoji"
          // style={{ maxWidth: 300, cursor: "pointer" }}
          className="hug-button"
          style={{ transform: `scale(${buttonDepth})` }}
        ></img>
      </div>
      <div
        id="reset-button"
        role="button"
        style={{
          backgroundColor: "#269",
          padding: 10,
          paddingLeft: 20,
          paddingRight: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          fontWeight: "bold",
          userSelect: "none",
          WebkitUserSelect: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          setHugs(0);
        }}
      >
        reset
      </div>
    </div>
  );
}

export default App;
