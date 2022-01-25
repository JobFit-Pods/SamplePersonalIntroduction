import * as React from "react";
import { getQuestions } from "../../data/data";
import PlayGame from "../play-game/PlayGame";
import NameEntry from "./name-entry/NameEntry";
import Question from "./question/Question";

export function AboutMeWizard(props) {
    let questions = getQuestions();
    const onSave = (value) => {
        props.onUpdate(Object.assign({}, props.info, value));
    }

    const onSaveAnswer = (question) => {
        const qs = props.info.questions.slice();
        const index = qs.findIndex(q => q.questionNumber === question.questionNumber);
        if (index > -1) {
            qs.splice(index, 1, question);
        } else {
            qs.push(question);
        }
        props.onUpdate(Object.assign({}, props.info, { questions: qs }))
    }

    const onLetsPlay = (play) => {
        props.onUpdate(Object.assign({}, props.info, { playGame: play }))
    }

    return (
        <div className={props.className}>
            <h2>Who Am I?</h2>
            <NameEntry firstName={props.info.firstName} lastName={props.info.lastName} onSave={onSave} />
            {
                questions.map((question, index) => {
                    return (<Question
                        key={index}
                        text={question.question}
                        onSave={onSaveAnswer}
                        answer={props.info.questions[index] ? props.info.questions[index].answer : ''}
                        questionNumber={index}
                        visible={index === 0 ? props.info.firstName && props.info.lastName : props.info.questions[index - 1]}
                    />);
                })
            }
            {
                props.info.questions.length === questions.length &&
                <PlayGame info={props.info} onLetsPlay={onLetsPlay} />
            }
        </div>
    )
}
