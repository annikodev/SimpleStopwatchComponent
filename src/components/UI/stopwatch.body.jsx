import React, {useState} from 'react';
import './stopwatch.scss'
import SClock from "./stopwatch.clock";
import StopwatchLaps from "./stopwatch.laps";

const StopwatchBody = () => {

    const [status, setStatus] = useState(false)
    const [visible, setVisible] = useState(false)
    const [claerSW, setClaerSW] = useState(true)

    const [laps, setLaps] = useState('')

    const changeStatus = (item) => {
        setStatus(item)
    }
    const changeVisible = () => {
        setVisible(!visible)
    }
    const changeClear = () => {
        setClaerSW(!claerSW)
    }

    const catchLaps = () => {
        getLaps()
    }
    const getLaps = () => {
        console.log('da')

    }

    return (
        <div className="stopbody">
            <SClock getLaps={getLaps} status={status} cleared={claerSW} setCleared={changeClear}/>
            <StopwatchLaps catchLaps={catchLaps} setCleared={changeClear} status={status} changeStatus={changeStatus} visible={visible} changeVisible={changeVisible}/>
        </div>
    );
};

export default StopwatchBody;