let timerPromise;
let cancelTimer;

document.getElementById('startButton').addEventListener('click', () => {
    const seconds = parseInt(document.getElementById('seconds').value, 10);
    const timerDisplay = document.getElementById('timerDisplay');
    const message = document.getElementById('message');
    const cancelButton = document.getElementById('cancelButton');
    
    message.style.display = 'none';
    message.textContent = '';
    cancelButton.disabled = false;

    function startCountdown(time) {
        return new Promise((resolve, reject) => {
            cancelTimer = () => reject('Timer geannuleerd!');
            
            function tick() {
                if (time < 0) {
                    resolve('Timer voltooid!');
                } else {
                    timerDisplay.textContent = time;
                    setTimeout(() => {
                        if (time >= 0) {
                            time--;
                            tick();
                        }
                    }, 1000);
                }
            }
            tick();
        });
    }

    timerPromise = startCountdown(seconds)
        .then(msg => {
            message.textContent = msg;
            message.style.display = 'block';
        })
        .catch(err => {
            message.textContent = err;
            message.style.display = 'block';
        })
        .finally(() => {
            cancelButton.disabled = true;
        });
});

document.getElementById('cancelButton').addEventListener('click', () => {
    if (cancelTimer) {
        cancelTimer();
    }
});
