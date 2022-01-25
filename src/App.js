import './App.css';
import React from "react";
import AboutMe from "./components/about-me/AboutMe";
import Game from './components/game/Game';
import { Hal } from './components/hal/Hal';

function App() {
  const [info, setInfo] = React.useState({
      firstName: "",
      lastName: "",
      questions: [],
      playGame: null
  });

  const onUpdate = (updatedInfo) => {
    setInfo(Object.assign({}, updatedInfo));
  }
  const onHide = () => {
    setInfo(Object.assign({}, info, {playGame: null}));
  }

  return (
    <>
      {
        info.playGame !== false &&
        <div className="flex-container">
          {
            info.playGame === null &&
            <AboutMe info={info} onUpdate={onUpdate} />
          }
          {
            info.playGame &&
            <Game info={info} onUpdate={onUpdate} />
          }
        </div>
      }
      {
        info.playGame === false &&
        <Hal firstName={info.firstName} onHide={onHide}/>
      }
    </>
  );
}

export default App;
