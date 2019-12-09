//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow"
import Scoreboard from "./components/Scoreboard";
import HomeBtns from "./components/HomeBtns";
import AwayBtns from "./components/AwayBtns";
import DownBtns from "./components/DownBtns";
import ResetBtn from "./components/ResetBtn";
import QuarterBtn from "./components/QuarterBtn";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeState, setHomeState] = useState(0);
  const [downState, setDownState] = useState(1);
  const [awayState, setAwayState] = useState(0);
  const [quarterState, setQuarterState] = useState(1);
  const [msState, setMsState] = useState(10);
  const [secState, setSecState] = useState("");
  const [minTensState, setMinTensState] = useState("");
  const [minOnesState, setMinOnesState] = useState(10);

  //timer state
  useEffect(() => {
    let stop = false;
    function timer(){
      clearInterval(timer);
      let thisTimer = setInterval(() => {
        if (stop === false){
          if (msState === 0){
            clearInterval(thisTimer);
            
            setSecState("");
            setMsState(59)
            
          } else if (msState < 11 && msState > 0){
            clearInterval(thisTimer);
            
            setSecState(0);
            setMsState(msState-1);
          } else {
            clearInterval(thisTimer);
            setMsState(msState -1);
            
          }
        } 
        else {
          clearInterval(thisTimer);
        } 
        

      }, 1000);

      let thatTimer = setInterval(() => {
        if (stop === false){
          if (minOnesState > 10){
            clearInterval(thatTimer);
            setMinOnesState(minOnesState-1);
            
          } else if (minOnesState < 11 && minOnesState > 0){
            console.log("please");
            setMinTensState(0); 
            clearInterval(thatTimer);
            setMinOnesState(minOnesState-1);
            
            
          
          } else if (minOnesState === 0){
            clearInterval(thatTimer);
            stop = true;
          }
          

        }
      },11000)


    }
    timer();

  })



  

  return (
    <div className="container">
      <section className="scoreboard">
        <Scoreboard homeState = {homeState} awayState = {awayState} msState = {msState} secState = {secState} minTensState = {minTensState} minOnesState = {minOnesState}/>
        <BottomRow downState = {downState} quarterState = {quarterState} />
      </section>
      
      <section className="buttons">
        <HomeBtns homeState = {homeState} setHomeState = {setHomeState}/>
        <AwayBtns awayState = {awayState} setAwayState = {setAwayState} />
        <DownBtns setDownState = {setDownState} downState = {downState}/>
        <ResetBtn setDownState = {setDownState} setHomeState = {setHomeState} setAwayState = {setAwayState} setQuarterState= {setQuarterState}/>
        <QuarterBtn setQuarterState= {setQuarterState} quarterState = {quarterState}/>
      </section>
    </div>
  );
}

export default App;
