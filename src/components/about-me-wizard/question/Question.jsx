import React from 'react'

export default function Question(props) {
    const [answer, setAnswer] = React.useState(props.answer);
    const submitAnswer = () => {
        props.onSave({
            question: props.text,
            answer: answer,
            questionNumber: props.questionNumber
        });
    }
    const ref = React.createRef();
    React.useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, [ref]);

    return (
        <div style={{ display: (props.visible ? 'block' : 'none') }}>
            <p>
                <b>{props.questionNumber + 1}. </b>
                {props.text}
            </p>
            <p>
                <input title={props.text} type="text" value={answer} ref={ref}
                    onChange={(e) => setAnswer(e.target.value)} autoComplete="off" />
                <button onClick={submitAnswer}>Add Answer</button>
            </p>
        </div>
    )
}
