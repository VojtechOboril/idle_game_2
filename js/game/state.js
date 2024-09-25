import { renderActionQueue } from '../ui/elements.js';

let state = {
    energy: 100,
    distance: 0,
    food: 0,
    animals: 0,
    actionQueue: [],
    currentActionIndex: 0
};

export function initializeState() {
    state.energy = 100;
    state.distance = 0;
    state.food = 0;
    state.animals = 0;
    state.actionQueue = [];
    state.currentActionIndex = 0;
    updateDisplay();
}

export function getState() {
    return state;
}

export function addAction(action) {
    state.actionQueue.push(action);
    renderActionQueue();
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
