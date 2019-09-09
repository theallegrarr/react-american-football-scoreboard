//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
 
  const [lionsScore, setLionsScore] = useState(35);
  const [tigersScore, setTigersScore] = useState(35);

  const goal = (score) => {
    if(score===1)setLionsScore(lionsScore+3);
    if(score===2)setTigersScore(tigersScore+3);
  };

  const touchDown = (score) => {
    if(score===1)setLionsScore(lionsScore+7);
    if(score===2)setTigersScore(tigersScore+7);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => touchDown(1) }>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => goal(1) }>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => touchDown(2) }>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => touchDown(2) }>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
