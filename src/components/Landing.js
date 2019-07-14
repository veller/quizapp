import React, { useState } from "react";
import axios from "axios";
import GlobalStyle, { SubmitButton } from "./GlobalStyles";
import {
  Container,
  Title,
  Form,
  Select,
  DecrementButton,
  IncrementButton
} from "./LandingStyles";
import Quiz from "./Quiz";

/*
to dos:
[] Style when user clicks wrong answer - to red
[] Add the "any" option to each of the selects
[] Style the "select" element like Tailwind
[] Go back to Landing once the quiz is finished
*/

function Landing() {
  const [isLanding, setLanding] = useState(true);
  const [data, setData] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("animals");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

  const categoriesData = [
    { category: "animals", id: 27 },
    { category: "celebrities", id: 26 },
    { category: "geography", id: 22 },
    { category: "mythology", id: 20 },
    { category: "sports", id: 21 }
  ];

  const difficultyData = ["easy", "medium", "hard"];

  const handleSubmit = async event => {
    event.preventDefault();

    const category = categoriesData.find(
      cat => cat.category === selectedCategory
    );

    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${
        category.id
      }&${selectedDifficulty}&encode=url3986`
    );

    setData(response.data.results);
    setLanding(false);
  };

  if (!isLanding) {
    return <Quiz quiz={data} />;
  }

  return (
    <Container>
      <GlobalStyle />
      <Title>Quiz App</Title>
      <Form onSubmit={handleSubmit}>
        <span>Number of questions</span>
        <div>
          <DecrementButton
            type="button"
            disabled={numberOfQuestions === 1}
            onClick={() => setNumberOfQuestions(prevState => prevState - 1)}
          >
            -
          </DecrementButton>
          <input type="number" readOnly value={numberOfQuestions} />
          <IncrementButton
            type="button"
            disabled={numberOfQuestions === 10}
            onClick={() => setNumberOfQuestions(prevState => prevState + 1)}
          >
            +
          </IncrementButton>
        </div>
        <span>Select category</span>
        <Select
          value={selectedCategory}
          onChange={event => setSelectedCategory(event.target.value)}
        >
          {categoriesData.map(cat => (
            <option key={cat.category} value={cat.category}>
              {cat.category}
            </option>
          ))}
        </Select>

        <span>Select difficulty</span>
        <Select
          value={selectedDifficulty}
          onChange={event => setSelectedDifficulty(event.target.value)}
        >
          {difficultyData.map(dif => (
            <option key={dif} value={dif}>
              {dif}
            </option>
          ))}
        </Select>
        <SubmitButton type="submit">Start Quiz</SubmitButton>
      </Form>
    </Container>
  );
}

export default Landing;
