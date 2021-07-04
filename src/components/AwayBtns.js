import React from 'react'

const AwayBtns = (props) => {
    const {setAwayState, awayState} = props;
    return(
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {e => {
              e.preventDefault();
              setAwayState(awayState + 7);
            }
          }>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {e => {
            e.preventDefault();
            setAwayState(awayState + 3);
          }}>Away Field Goal</button>
        </div>
    );
}

export default AwayBtns