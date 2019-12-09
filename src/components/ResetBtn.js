import React from 'react';

const ResetBtn = (props) => {
    const {setDownState, setHomeState, setAwayState, setMsState, setSecState, setMinTensState, setMinOnesState} = props;
    function reset (e){
        e.preventDefault();
        setDownState(1);
        setHomeState(0);
        setAwayState(0);
        setMsState(0);
        setSecState(0);
        setMinTensState("");
        setMinOnesState(15);
    }

    return (
        <button className = "homeButtons__touchdown" onClick = {e => reset(e)}>Reset</button>
    );
}

export default ResetBtn