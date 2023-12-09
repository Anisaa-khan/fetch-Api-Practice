import React, { useEffect, useState } from 'react'
function StopWatch() {

    const[count, setCount]=useState(0);
const [running, setRunning] = useState(true);

    useEffect (() =>{

        if(running){
            setTimeout(() => {
                setCount((preValue)=>
                    preValue+1
                )
            }, 1000);
        }
    },[count,running]);


    
    const handleStart =()=>{
        
        setRunning(true)
    };

    const handleStop=()=>{
        
        setRunning(false)
    };

  return (
<>
<div className="container">
<div className="box">
    <h3>Online Timer & Stop Watch</h3>
    <h1>00:{count}</h1>
    <button type='button' id='btn' onClick={handleStart}>Start</button>
    <button type='button'id='btn' onClick={() => setCount(0)}>Reset</button>
    <button type='button' id='btn'  onClick={handleStop}>Stop</button>
    

</div>

</div>

</>
  )
}

export default StopWatch
