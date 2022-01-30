export function startTimer(minutes, setSeconds, setMinutes, setStatus, phase) {
    setStatus(phase)
    setMinutes('00')
    setSeconds('00')
    
    let timeLeft = minutes
    let elapsedSec = 0
    let elapsedMin = 0

    let bar = document.getElementById('bar')
    let barWidth = 0
    let percentage = 100 / (minutes * 60)

    return new Promise(resolve => {
        let timer = setInterval( () => {
            elapsedSec++
            barWidth+= percentage
            bar.style.width = barWidth + "%"

            if (elapsedSec % 60 === 0) {
                elapsedMin++
                elapsedMin < 10 ? setMinutes("0" + elapsedMin) : setMinutes("" + elapsedMin)

                timeLeft--
                elapsedSec = 0
            }
            
            elapsedSec < 10 ? setSeconds("0" + elapsedSec) : setSeconds("" + elapsedSec)
            
            if (timeLeft <= 0) { 
                clearInterval(timer)
                resolve()
                return
            }
        }, 1000)
    })
}