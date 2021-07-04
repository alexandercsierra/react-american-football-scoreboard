import React from 'react'

const Scoreboard = (props) => {
    const {homeState, awayState, msState, secState, minOnesState, minTensState} = props;


    return (
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeState}</div>
          </div>
          <div className="timer">{minTensState}{minOnesState}:{secState}{msState}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayState}</div>
          </div>
        </div>

    )
}

export default Scoreboard;
