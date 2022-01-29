export function startTimer(minutes, setSeconds, setMinutes, takeBreak=false) {
    setMinutes('00')
    setSeconds('00')
    let timeLeft = minutes
    let elapsedSec = 0
    let elapsedMin = 0

    if (takeBreak) {
        window.alert("Your break starts now")
    } else {
        window.alert("Get to work!")
    }

    return new Promise(resolve => {
        let timer = setInterval( () => {
            elapsedSec++

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