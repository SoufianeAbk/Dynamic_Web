// Genereer een array met willekeurige getallen
const generateRandomArray = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 1000));
    }
    return array;
};

// Bubble sort (langzaam)
const bubbleSort = (arr) => {
    const result = Array.from(arr);
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] > result[j + 1]) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
};

// Native JavaScript sort
const nativeSort = (arr) => {
    const result = Array.from(arr);
    return result.sort((a, b) => a - b);
};

// Event listener
document.getElementById('compareButton').addEventListener('click', () => {
    const testArray = generateRandomArray(5000);
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';

    // console.time voor beide
    console.time('bubbleSort');
    const bubbleSorted = bubbleSort(testArray);
    console.timeEnd('bubbleSort');

    console.time('nativeSort');
    const nativeSorted = nativeSort(testArray);
    console.timeEnd('nativeSort');

    // Vergelijk resultaten
    const areEqual = JSON.stringify(bubbleSorted) === JSON.stringify(nativeSorted);
    console.assert(areEqual, 'De sorteermethodes geven verschillende resultaten!');

    // Meting voor visuele feedback
    const bubbleStart = performance.now();
    bubbleSort(testArray);
    const bubbleDuration = performance.now() - bubbleStart;

    const nativeStart = performance.now();
    nativeSort(testArray);
    const nativeDuration = performance.now() - nativeStart;

    const bubbleIsFaster = bubbleDuration < nativeDuration;

    const bubbleResult = document.createElement('div');
    bubbleResult.className = `result-item ${bubbleIsFaster ? 'faster' : 'slower'}`;
    bubbleResult.textContent = `BubbleSort duurde ${bubbleDuration.toFixed(2)} ms`;

    const nativeResult = document.createElement('div');
    nativeResult.className = `result-item ${!bubbleIsFaster ? 'faster' : 'slower'}`;
    nativeResult.textContent = `Native sort duurde ${nativeDuration.toFixed(2)} ms`;

    resultDiv.appendChild(bubbleResult);
    resultDiv.appendChild(nativeResult);
});
