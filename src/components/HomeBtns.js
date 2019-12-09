import React from 'react'

const HomeBtns = (props) => {
    const {setHomeState, homeState} = props;
    return(
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {e => {
            e.preventDefault();
            setHomeState(homeState + 7);
          }
          }>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {e => {
            e.preventDefault();
            setHomeState(homeState + 3);
          }}>Home Field Goal</button>
        </div>
    );
}

export default HomeBtns