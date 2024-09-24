// Game variables
let energy = 100;
let distance = 0;
let food = 0;
let animals = 0;
let actionQueue = [];
let loopInterval = null;
let currentActionIndex = 0;

// DOM elements
const energyElement = document.getElementById('energy');
const distanceElement = document.getElementById('distance');
const foodElement = document.getElementById('food');
const animalsElement = document.getElementById('animals');
const actionQueueElement = document.getElementById('actionQueue');
const startLoopButton = document.getElementById('startLoop');
const resetGameButton = document.getElementById('resetGame');

// Update displayed stats
function updateDisplay() {
    energyElement.textContent = energy.toFixed(1);
    distanceElement.textContent = distance.toFixed(1);
    foodElement.textContent = food.toFixed(1);
    animalsElement.textContent = animals.toFixed(1);
}

// Add an action to the queue
function addAction(action) {
    actionQueue.push(action);
    const li = document.createElement('li');
    li.textContent = action.charAt(0).toUpperCase() + action.slice(1);
    actionQueueElement.appendChild(li);
}

// Execute an action from the queue
function executeAction(action) {
    switch(action) {
        case 'walk':
            if (energy >= 1) {
                distance += 1; // Increase distance by 1 km
                energy -= 1; // Decrease energy by 1
            }
            break;
        case 'eat':
            if (energy >= 2) {
                food += 1; // Increase food eaten
                energy -= 2; // Decrease energy by 2
            }
            break;
        case 'hunt':
            if (energy >= 3) {
                animals += 1; // Increase animals hunted
                energy -= 3; // Decrease energy by 3
            }
            break;
    }
}

// Game loop function
function gameLoop() {
    if (currentActionIndex < actionQueue.length && energy > 0) {
        const currentAction = actionQueue[currentActionIndex]; // Get the current action from the queue
        executeAction(currentAction); // Execute the action
        highlightCurrentAction(currentActionIndex); // Highlight current action
        markPreviousActionAsExecuted(currentActionIndex); // Mark the action as executed
        updateDisplay(); // Update the display
        currentActionIndex++; // Move to the next action
    } else {
        // Stop the loop when all actions are executed or energy is depleted
        clearInterval(loopInterval);
        loopInterval = null;
        removeActionAsExecuted();
        removeActiveHighlight();
        startLoopButton.disabled = false;
    }
}

// Highlight the current active action in the queue
function highlightCurrentAction(index) {
    const allActions = actionQueueElement.children;
    if (allActions.length > index) {
        removeActiveHighlight(); // Remove highlight from previous action
        allActions[index].classList.add('active');
    }
}

// Mark the action as executed
function markActionAsExecuted(index) {
    const allActions = actionQueueElement.children;
    if (allActions.length > index) {
        allActions[index].classList.add('executed');
    }
}

// Mark the function from previous iteration as executed, if any
function markPreviousActionAsExecuted(index) {
    if (index != 0) {
        markActionAsExecuted(index - 1);
    }
}

// Remove the active highlight from all actions
function removeActiveHighlight() {
    const allActions = actionQueueElement.children;
    for (let action of allActions) {
        action.classList.remove('active');
    }
}

// Remove all actions as executed
function removeActionAsExecuted() {
    const allActions = actionQueueElement.children;
    for (let action of allActions) {
        action.classList.remove('executed');
    }
}

// Start the game loop
startLoopButton.addEventListener('click', () => {
    if (loopInterval || actionQueue.length === 0) return;

    currentActionIndex = 0;
    loopInterval = setInterval(gameLoop, 1000); // Execute actions every second
    startLoopButton.disabled = true;
});

// Reset the game state
resetGameButton.addEventListener('click', () => {
    clearInterval(loopInterval);
    loopInterval = null;
    energy = 100;
    distance = 0;
    food = 0;
    animals = 0;
    actionQueue = [];
    actionQueueElement.innerHTML = '';
    currentActionIndex = 0;
    updateDisplay();
    startLoopButton.disabled = false;
    removeActiveHighlight();
});

// Initial update of UI
updateDisplay();
