const container = document.getElementById('container');
const dashboard = document.getElementById('dashboard');
const currentWidthDisplay = document.getElementById('current-width');
const columnCountDisplay = document.getElementById('column-count');

const updateColumns = (width) => {
    let columns = 3;
    if (width < 600) {
        columns = 1;
    } else if (width < 900) {
        columns = 2;
    }
    dashboard.setAttribute('data-columns', columns);
    currentWidthDisplay.textContent = Math.round(width);
    columnCountDisplay.textContent = columns;
};

const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        const width = entry.contentRect.width;
        updateColumns(width);
    }
});

resizeObserver.observe(container);
