import React from 'react';
import '../css/main.css';

function Main(props)
{
    return (
    <div className="description">
        <div className="title">Test your Angular knowledge with rest of the world</div>
        <div className="content">30 questions covering Typescript, Angular 2, 4, 5 and 6</div>
        {!props.quizStarted && !props.quizEnded && <button className="start-quiz" name="startQuiz" onClick={props.handleClick}>Start Quiz</button>}
        {!props.quizStarted && props.quizEnded && <div className="title">Your Score is {props.countAns}</div>}
        {!props.quizStarted && props.quizEnded && <button className="start-quiz" name="reStartQuiz" onClick={props.handleClick}>Retake Quiz</button>}
    </div>
    );
}

export default Main