import React from 'react'
import { getMadlibTemplate } from '../../data/data';

export default function Game(props) {
    const [template, setTemplate] = React.useState({});
    const [game, setGame] = React.useState({
        blanks: [],
        show: false,
        story: ""
    });
    React.useEffect(() => {
        const fetchTemplate = async () => {
            const data = await getMadlibTemplate();
            setTemplate(data);
        }
        fetchTemplate()
            .catch(console.error);
    }, []);

    const onClick = () => {
        props.onUpdate(Object.assign({}, props.info, { playGame: false }));
    }

    const onBlur = (value, index) => {
        const blanks = game.blanks.slice();
        blanks.splice(index, 1, value);
        setGame(Object.assign({}, game, { blanks: blanks }));
    }

    const tellStory = () => {
        let story = "";
        game.blanks.forEach((b, index) => story = story + template.value[index] + b);
        story += template.value[template.value.length - 2]
        setGame(Object.assign({}, game, { story: story }));
    }

    const onTakeMeHome = () => {
        props.onUpdate(Object.assign({}, props.info, { playGame: null }));
    }

    return (
        <>
            <div>
                <h2>Mad Lib</h2>
                <p>
                    <button onClick={onClick}>
                        Never mind I don't want to play
                    </button>
                </p>
                <ol>
                    {
                        template.blanks &&
                        template.blanks.map((b, index) => {
                            return (
                                <li key={index}>
                                    <label>
                                        {b} <input type="text" onBlur={(e) => onBlur(e.target.value, index)} />
                                    </label>
                                </li>
                            )
                        })
                    }
                </ol>
                <button onClick={tellStory}>Tell Me A Story</button>
            </div>
            <div>
                {
                    game.story.length > 0 &&
                    <>
                        <h2>{template.title}</h2>
                        <p>{game.story}</p>
                        <button onClick={onTakeMeHome}>Take Me Home</button>
                    </>
                }
            </div>
        </>
    )
}
