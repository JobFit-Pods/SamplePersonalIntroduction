import React from 'react';
import { AboutMeDisplay } from '../about-me-display/AboutMeDisplay';
import { AboutMeWizard } from '../about-me-wizard/AboutMeWizard';
import "./AboutMe.css";

export default function AboutMe(props) {
    return (
        <>
            <AboutMeWizard className="flex-item-left" info={props.info} onUpdate={props.onUpdate} />
            <AboutMeDisplay className="flex-item-right" info={props.info} />
        </>
    )
}
