import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App" id="main">
      <p id="para" className={visible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <button id="click" onClick={() => setVisible((prev) => !prev)}>
        Visible
      </button>
    </div>
  );
};

export default App;
