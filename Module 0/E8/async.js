async function waitForClicks(targetCount) {
    let count = 0;
    const counterDisplay = document.querySelector(".counter");
    const button = document.getElementById("clickButton");
    const messageDisplay = document.querySelector(".message");

    return new Promise(resolve => {
        button.addEventListener("click", function handleClick() {
            count++;
            counterDisplay.textContent = count;

            if (count >= targetCount) {
                button.removeEventListener("click", handleClick);
                resolve();
            }
        });
    });
}

async function start() {
    await waitForClicks(5);
    document.querySelector(".message").textContent = "Gefeliciteerd! Je hebt 5 keer geklikt!";
}

start();