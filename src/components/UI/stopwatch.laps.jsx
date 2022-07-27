import React from 'react';
import './stopwatch.clock.scss'


const StopwatchLaps = ({changeStatus, status, visible, changeVisible, setCleared, catchLaps}) => {

    document.getElementById('.')
    return (
        <div className='setButtnon'>
            {!visible?
                <div className='startBtn'
                     onClick={()=> {
                         changeVisible()
                         changeStatus(!status)
                     }
                }>
                    <span>Start</span>
                </div>
                :
                <div style={{display:'flex'}}>
                    <div className='lapsbtn' onClick={()=> {
                        changeVisible(false)
                        changeStatus(false)
                        setCleared(true)
                    }}>
                        <span>Stop</span>
                    </div>
                    <div className='lapsbtn' onClick={()=>changeStatus(!status)}>
                        {status?<span>Pause</span>:<span>Start</span>}
                    </div>
                    <div className='lapsbtn' onClick={()=> catchLaps()}>
                        <span>Lap</span>
                    </div>
                </div>

            }

            <div className='lapsField'>

            </div>
        </div>
    );
};

export default StopwatchLaps;