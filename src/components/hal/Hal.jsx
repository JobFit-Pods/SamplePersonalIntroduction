import React from 'react';
import "./Hal.css";

export const Hal = (props) => {
    return (
        <div className='hal-container'>
            <div>
                <h1>I don't like that, {props.firstName}.</h1>
                <div className='angry-hal'>
                </div>
                <button onClick={props.onHide}>Ok, I'll Play!</button>
            </div>
        </div>
    );
};
