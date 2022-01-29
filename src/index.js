import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { startTimer } from './timer'

const App = () => {
    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [loop, setLoop] = useState(0)

    function startPomodoro() {
        console.log("Starting pomodoro...")
        
        startTimer(1, setSeconds, setMinutes, false)
            .then(() => startTimer(1, setSeconds, setMinutes, true))
    }

    return (
        <div className="app">
            <div className='timer'>
                <span className='min'>{minutes}</span><span>:</span><span className='sec'>{seconds}</span>
            </div>
            
            <button onClick={() => { startPomodoro() }}>Start</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);