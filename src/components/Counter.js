import React, {useState, useEffect} from 'react'

function Counter() {
    const [timer, setTimer] = useState(0);

    const increaseTime = () =>{
        setTimer((prevTimer) => prevTimer + 1)
    }

    useEffect(() => {
        setInterval(increaseTime, 1000);
    },[])

    return (
        <div>
            <h1 className='timer'>Seconds {timer}</h1>
        </div>
    )
}

export default Counter
