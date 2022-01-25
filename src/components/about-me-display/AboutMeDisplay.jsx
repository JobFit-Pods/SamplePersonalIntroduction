import React from 'react'
import { getQuestions } from '../../data/data'

export function AboutMeDisplay(props) {
    const questions = getQuestions();
    return (
        <div className={props.className}>
            <h2>This is me!</h2>
            {props.info.name &&
                <h3>My name is: {props.info.firstName} {props.info.lastName}</h3>
            }
            {
                props.info.questions
                    .map((q, index) => {
                        return (
                            <h3 key={index}>
                                {questions[q.questionNumber].response} {q.answer}
                            </h3>
                        );
                    })
            }
        </div>
    )
}