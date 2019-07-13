import React, { useState } from "react";
import axios from "axios";
import GlobalStyle from "./GlobalStyles";
import Quiz from "./Quiz";

function Landing() {
  const [isLanding, setLanding] = useState(true);
  const [data, setData] = useState([]);

  const handleQuizSetup = async () => {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=3&category=21"
    );
    setData(response.data.results);
    setLanding(false);
  };

  if (!isLanding) {
    return <Quiz quiz={data} />;
  }

  return (
    <div>
      <GlobalStyle />
      <h1>banana</h1>
      <button onClick={handleQuizSetup}>Start quiz</button>
    </div>
  );
}

export default Landing;
