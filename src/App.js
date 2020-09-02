import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Question from './components/Question';

function App() {
  const [quizStarted,setQuizStarted] = useState(false);
  const [quizEnded,setQuizEnded] = useState(false);
  const [countAns,setCountAns] = useState(0);
  function updateCount()
  {
    setCountAns(previous => {
      return previous + 1;
    })
  }
  function handleClick(event)
  {
    const name = event.target.name;
    console.log(name);
    if(name === 'startQuiz')
    {
      setCountAns(0);
      setQuizStarted(true);
    }
    else if(name === 'endQuiz' || name === 'nextQues')
    {
      setQuizEnded(true);
      setQuizStarted(false);
    }
    else if(name === 'reStartQuiz')
    {
      setCountAns(0);
      setQuizStarted(true);
      setQuizEnded(false);
    }
  }

  return (
    <div className="App">
      <Nav />
      {(quizStarted) ? <Question handleClick={handleClick} setCount={updateCount}/> : <Main handleClick={handleClick} countAns={countAns} quizStarted={quizStarted} quizEnded={quizEnded}/>}
      <Footer />
    </div>
  );
}

export default App;
