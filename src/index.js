import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { startLoop } from './pomodoro_loop'

const App = () => {
    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [pomodoro, setPomodoro] = useState(0)
    const [status, setStatus] = useState('Preparing')

    async function startPomodoro() {
        console.log("Starting pomodoro...")
        let bt = document.getElementById('start')
        bt.disabled = true;
        
        startLoop(4, setSeconds, setMinutes, setStatus, setPomodoro)
            .then(() => {
                window.alert('Pomodoro Complete!')
                setStatus('Preparing...')
                bt.disabled = false;
            })
    }

    return (
        <div className={`pomo ${status === 'Working...' ? 'working' : ''} ${status === 'Resting...' ? 'resting' : ''}`}>
            <div className='clock'>
                <p>Status: {status}</p>
                <p>Pomodoro: {pomodoro}</p>
                <div className='timer'>
                    <span className='min'>{minutes}:{seconds}</span>
                </div>
                <div className='progress'>
                    <div id='bar'/>
                </div>
            </div>
            
            <button id='start' onClick={() => { startPomodoro() }}>Start</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);