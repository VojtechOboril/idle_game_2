// Game variables
let gold = 0;
let workers = 0;
let workerCost = 10;
let goldPerClick = 1;
let goldPerSecond = 0;

// DOM elements
const goldElement = document.getElementById('gold');
const mineGoldButton = document.getElementById('mineGold');
const buyWorkerButton = document.getElementById('buyWorker');
const workersElement = document.getElementById('workers');
const workerCostElement = document.getElementById('workerCost');

// Update the displayed gold amount
function updateGold() {
    goldElement.textContent = gold.toFixed(1);
}

// Update the displayed worker count and cost
function updateWorkers() {
    workersElement.textContent = workers;
    workerCostElement.textContent = workerCost.toFixed(1);
}

// Add gold when the mine button is clicked
mineGoldButton.addEventListener('click', () => {
    gold += goldPerClick;
    updateGold();
});

// Buy a worker
buyWorkerButton.addEventListener('click', () => {
    if (gold >= workerCost) {
        gold -= workerCost;
        workers += 1;
        workerCost *= 1.15; // Increase the cost for next worker
        updateGold();
        updateWorkers();
        updateGoldPerSecond();
    }
});

// Calculate gold per second based on the number of workers
function updateGoldPerSecond() {
    goldPerSecond = workers * 0.1; // Each worker adds 0.1 gold per second
}

// Passively add gold every second
function passiveGoldGain() {
    gold += goldPerSecond;
    updateGold();
}

// Start the passive income timer
setInterval(passiveGoldGain, 1000);

// Initial update of UI
updateGold();
updateWorkers();
updateGoldPerSecond();
