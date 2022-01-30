import { startTimer } from './timer'

export async function startLoop(len, setSeconds, setMinutes, setStatus, setPomodoro) {

    for (let i = 0; i <= len; i++) {
        setPomodoro(i + 1)
        if (i < len) {
            let currentLoop = startTimer(25, setSeconds, setMinutes, setStatus, 'Working...')
                .then(() => startTimer(5, setSeconds, setMinutes, setStatus, 'Resting...'))
            await currentLoop
        } else {
            let currentLoop = startTimer(25, setSeconds, setMinutes, setStatus, 'Long Rest...')
            await currentLoop
        }
    }
}