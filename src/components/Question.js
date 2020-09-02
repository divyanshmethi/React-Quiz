import React, { useState } from 'react';
import questions from '../data';
import IndividualQues from './IndividualQues';
import '../css/question.css';

function Question(props)
{
    const [index,setIndex] = useState(0);
    function moveToNextQues(event)
    {
        if(index === 1)
        {
            props.handleClick(event);
        }
        else
        {
            setIndex((previous) => {
                return previous + 1;
            })
        }
    }
    return (
    <div className="question">
    <div>
        <button className="endQuiz-btn" name="endQuiz" onClick={props.handleClick}>End Quiz</button>
    </div>
        <IndividualQues setCount={props.setCount} item={questions[index]} key={index} moveToNextQues={moveToNextQues}/>
    </div>
    );
}

export default Question;