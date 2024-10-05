import { renderActionQueue } from '../ui/elements.js';

let state = {
    energy: 100,
    distance: 0,
    food: 0,
    animals: 0,
    actionQueue: [],
    currentActionIndex: 0,
    actionCosts: {
        walk: 1,  // Initial cost of 'walk'
        eat: 2,   // Initial cost of 'eat'
        hunt: 3   // Initial cost of 'hunt'
    }
};

// Function to initialize/reset the state
export function initializeState() {
    state.energy = 100;
    state.distance = 0;
    state.food = 0;
    state.animals = 0;
    state.actionQueue = [];
    state.currentActionIndex = 0;

    // Initialize or reset action costs
    state.actionCosts = {
        walk: 1,
        eat: 2,
        hunt: 3
    };

    updateDisplay();
    renderActionQueue();
}

export function getState() {
    return state;
}

// Add an action to the queue
export function addAction(action) {
    const cost = getActionCost(action);  // Get the dynamic cost of the action
    state.actionQueue.push({ action, cost });  // Store both the action and its cost
    renderActionQueue(); // Re-render the queue
}

export function resetState() {
    initializeState();
    renderActionQueue();
}

// Update displayed stats
export function updateDisplay() {
    document.getElementById('energy').textContent = state.energy.toFixed(1);
    document.getElementById('distance').textContent = state.distance.toFixed(1);
    document.getElementById('food').textContent = state.food.toFixed(1);
    document.getElementById('animals').textContent = state.animals.toFixed(1);
}

// Function to modify action costs dynamically
export function setActionCost(action, newCost) {
    if (state.actionCosts[action] !== undefined) {
        state.actionCosts[action] = newCost;
    }
}

// Function to get the current cost of an action
export function getActionCost(action) {
    return state.actionCosts[action] || 0;
}