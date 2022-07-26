import React, {useEffect, useState} from 'react';
import './stopwatch.clock.scss'


const SClock = ({status}) => {

    const [stopWatch, setStopWatch] = useState({minut:'0', second:'0', msecond:'0'})
    let time
    useEffect(()=>{
        if (status) {
            a()
        } else {
            alert('da')
        }
    }, [status])

    function a () {
        time = setInterval(() => {
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
    }



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