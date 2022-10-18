import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function Reasons() {
  return (
    <div>
      <Header />
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <Footer />
    </div>
  );
}

ReactDOM.render(<Reasons />, document.getElementById("root"));
