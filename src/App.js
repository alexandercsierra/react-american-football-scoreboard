//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow"
import Scoreboard from "./components/Scoreboard";
import HomeBtns from "./components/HomeBtns"
import AwayBtns from "./components/AwayBtns"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeState, setHomeState] = useState(0);
  const [awayState, setAwayState] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <Scoreboard homeState = {homeState} awayState = {awayState}/>
        <BottomRow />
      </section>
      
      <section className="buttons">
        <HomeBtns homeState = {homeState} setHomeState = {setHomeState}/>
        <AwayBtns awayState = {awayState} setAwayState = {setAwayState} />
        
      </section>
    </div>
  );
}

export default App;
