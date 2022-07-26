import React from 'react';
import './stopwatch.clock.scss'


const StopwatchLaps = ({changeStatus}) => {

    document.getElementById('.')
    return (
        <div className='setButtnon'>
            <div className='startBtn' onClick={()=>changeStatus()}>
                <span>Start</span>
            </div>
            <div className='lapsField'>

            </div>
        </div>
    );
};

export default StopwatchLaps;