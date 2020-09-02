import React,{useState} from 'react';
import '../css/IndividualQues.css';

function IndividualQues(props)
{
    const [isCorrect,setIsCorrect] = useState(false);
    const [givenAnswer,setGivenAnswer] = useState("");
    const [isSubmitted,setIsSubmitted] = useState(false);
    function handleChange(event)
    {
        const ans = event.target.value;
        setGivenAnswer(ans);
        console.log(ans);
    }
    function checkAnswer()
    {
        const ans = (props.item.answer) === givenAnswer;
        if(ans)
        {
            props.setCount();
        }
        setIsCorrect(ans);
        setIsSubmitted(true);
    }
    
    return (
    <React.Fragment>
        <div>
            <div className="question-desc">{props.item.question}</div>
            <div className="options">
            {props.item.options.map((val,index)=>{
                return (
                    <React.Fragment key={index}>
                        <input className="input-radio" type="radio" id={index} name="options" value={index} onChange={handleChange}/>
                        <label htmlFor={index}>{val}</label><br/>
                    </React.Fragment>
                    )
            })}
            </div>
        </div>
        {isSubmitted && <div>{isCorrect ? 'Correct' : 'InCorrect'}</div>}
        <div className="btns">
            <button className="submitAnswer" onClick={checkAnswer} disabled={givenAnswer === "" || isSubmitted}>Submit Answer</button>
            <button className="nextQues" name="nextQues" disabled={!isSubmitted} onClick={props.moveToNextQues}>Next Question</button>
        </div>
    </React.Fragment>);
}

export default IndividualQues;