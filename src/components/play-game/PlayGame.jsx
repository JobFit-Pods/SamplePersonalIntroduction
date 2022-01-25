import React from 'react';
import "./PlayGame.css";

export default function PlayGame(props) {
    const onClick = (playGame) => {
        props.onLetsPlay(playGame);
    }

    return (
        <div>
            {
                props.info &&
                <>
                    <div className="hal">
                        <img src="hal_9000-82518.gif" alt="hal" />
                    </div>
                    <p>Hello, {props.info.firstName} would you like to play a game?</p>
                    <button onClick={() => onClick(true)}>Yes!</button> <button onClick={() => onClick(false)}>No Way!</button>
                </>
            }
        </div>
    )
}
