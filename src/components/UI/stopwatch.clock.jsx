import React, {useEffect, useState, useRef} from 'react';
import './stopwatch.clock.scss'
import {logDOM} from "@testing-library/react";


const SClock = ({status, cleared, setCleared}) => {
    let timeoutRef = useRef(null);

    const [stopWatch, setStopWatch] = useState({minut:'0', second:'0', msecond:'0'})

    useEffect(()=>{
        if (cleared){
            setCleared(false)
            setStopWatch({minut:'0', second:'0', msecond:'0'})
        }
    },[cleared, status])

    useEffect(()=>{
        if (status) {
            timeoutRef.current = setInterval(() => {
                if (stopWatch.msecond<100){
                    setStopWatch({...stopWatch, msecond:stopWatch.msecond++,})
                } else {
                    stopWatch.msecond=0;
                    if (stopWatch.second<=58){
                        setStopWatch({...stopWatch, second: stopWatch.second++,})
                    } else {
                        stopWatch.second=0
                        setStopWatch({...stopWatch, second: stopWatch.minut++,})
                    }
                }
            }, 10);
        } else {
            clearInterval(timeoutRef.current)
        }
    }, [status])



    return (
        <div className='clock'>

            <div className='clocktimer'>
                <span>
                    {stopWatch.minut<10?
                        '0'+stopWatch.minut
                        :
                        stopWatch.minut
                    }:
                    {stopWatch.second<10?
                        '0'+stopWatch.second
                        :
                        stopWatch.second
                    }:
                    {stopWatch.msecond<10?
                        '0'+stopWatch.msecond
                        :
                        stopWatch.msecond
                    }
                </span>
            </div>
        </div>
    );
};

export default SClock;