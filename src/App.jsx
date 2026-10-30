import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { quiz } from "./data/quiz";

function App() {
  const question = quiz.questions[0];
  return (
    <main>
        <h1>{quiz.title}</h1>
        <h2>{question.text}</h2>\{questions.answers.map((answer) => (
          <button key={answer.text}>{answer.text}</button>
        ))}
    </main>
  );
}

// export default App
