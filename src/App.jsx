import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { quiz } from "./data/quiz";
import { getResult } from "./utils/scoring";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [chosen, setChosen] = useState([]);

  function handleAnswer(answer) {
    setChosen([...chosen, answer]);
    setCurrent(current + 1);
  }

  if (current >= quiz.questions.length) {
    const result = quiz.results[getResult(quiz, chosen)];
      return (
        <main>
          <p>Your magical girl is:</p>
          <h1>{result.name}</h1>
          <p>{result.description}</p>
        </main>
      );
  }
  const question = quiz.questions[current];
  return (
    <main>
      <h1>{quiz.title}</h1>
      <p>Question {current + 1} of {quiz.questions.length}</p>
      <h2>{question.text}</h2>
      {question.answers.map((answer) => (
        <button key={answer.text} onClick={() => handleAnswer(answer)}>
          {answer.text}
        </button>
      ))}
    </main>
  );

}


