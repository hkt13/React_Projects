import '../App.css'
import questions from '../helpers/questions';
import { useState } from 'react';
import { useContext } from "react";
import { gameStateContext } from "../helpers/context";

function Quiz() {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [optionchoosen, setoptionchoosen] = useState('')
    const {gameState, setgameState, score, setscore} = useContext(gameStateContext)
    const  chooseOption=(option)=>{
     setoptionchoosen(option)
    }
     const nextQuestion=()=>{
        if(questions[currentQuestion].correctans===optionchoosen)
        {
            setscore(score+1)
        }
        setcurrentQuestion(currentQuestion+1)
     }

     const finishQuiz=()=>{
        if(questions[currentQuestion].correctans===optionchoosen)
        {
            setscore(score+1)
        }
        setgameState('end')
     }

    return <div className="quiz">
        <h3 className="title">
        {questions[currentQuestion].question}
        </h3>
        <button id="btn" onClick={()=>{chooseOption('optionA')}} >{questions[currentQuestion].optionA}</button>
        <button id="btn" onClick={()=>{chooseOption('optionB')}} >{questions[currentQuestion].optionB}</button>
        <button id="btn" onClick={()=>{chooseOption('optionC')}} >{questions[currentQuestion].optionC}</button>
        <button id="btn" onClick={()=>{chooseOption('optionD')}} >{questions[currentQuestion].optionD}</button>

        {currentQuestion === questions.length-1? ( <button className="nxt" onClick={finishQuiz}>Finish Quiz</button>): ( <button className="nxt" onClick={nextQuestion}>Next</button>)}

    </div>
}

export default Quiz;