document.getElementById("startButton").addEventListener("click", () => {
    setTimeout(() => {
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "green";
            setTimeout(() => {
                document.body.style.backgroundColor = "blue";
            }, 1000);
        }, 1000);
    }, 1000);
});
