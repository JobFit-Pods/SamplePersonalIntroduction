import './App.css';
import React from "react";
import AboutMe from "./components/about-me/AboutMe";
import Game from './components/game/Game';

function App() {
  const [info, setInfo] = React.useState({
      name: "",
      questions: [],
      playGame: false
  });

  const onUpdate = (updatedInfo) => {
    setInfo(Object.assign({}, updatedInfo));
  }

  return (
    <div className="flex-container">
      {
        !info.playGame &&
        <AboutMe info={info} onUpdate={onUpdate} />
      }
      {
        info.playGame &&
        <Game info={info} onUpdate={onUpdate} />
      }
    </div>
  );
}

export default App;
