import React, {useState} from 'react';
import './stopwatch.scss'
import SClock from "./stopwatch.clock";
import StopwatchLaps from "./stopwatch.laps";

const StopwatchBody = () => {

    const [status, setStatus] = useState(false)

    const changeStatus = () => {
        setStatus(!status)
    }

    return (
        <div className="stopbody">
            <SClock status={status}/>
            <StopwatchLaps changeStatus={changeStatus}/>
        </div>
    );
};

export default StopwatchBody;