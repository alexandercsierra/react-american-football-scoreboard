import React from 'react';

const DownBtns = (props) => {
    const {setDownState, downState} = props;
    function addDown (e){
        e.preventDefault();
        if (downState === 4){
            setDownState(1);
        } else {
            setDownState(downState + 1);
        }
    }

    return (
        <button className = "homeButtons__touchdown" onClick = {e => addDown(e)}>Down</button>
    );
}

export default DownBtns