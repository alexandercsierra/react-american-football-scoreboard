import React from 'react';

const QuarterBtn = (props) => {
    const {setQuarterState, quarterState} = props;
    function addQuarter (e){
        e.preventDefault();
        if (quarterState === 4){
            setQuarterState(1);
        } else {
            setQuarterState(quarterState + 1);
        }
    }

    return (
        <button className = "homeButtons__touchdown" onClick = {e => addQuarter(e)}>Quarter</button>
    );
}

export default QuarterBtn