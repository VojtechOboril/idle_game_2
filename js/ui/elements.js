import { getState } from '../game/state.js';

export function renderActionQueue() {
    const state = getState();
    const actionQueueElement = document.getElementById('actionQueue');
    actionQueueElement.innerHTML = '';
    state.actionQueue.forEach((actionObj, index) => {
        const li = document.createElement('li');
        li.textContent = `${actionObj.action.charAt(0).toUpperCase() + actionObj.action.slice(1)} (${actionObj.cost} energy)`;
        
        if (index < state.currentActionIndex) {
            li.classList.add('executed');
        }
        actionQueueElement.appendChild(li);
    });
}

export function renderUI() {
    const state = getState();
    
    // Update button labels with dynamic costs
    document.querySelector('button[data-action="walk"]').textContent = `Walk (${state.actionCosts.walk} energy)`;
    document.querySelector('button[data-action="eat"]').textContent = `Eat (${state.actionCosts.eat} energy)`;
    document.querySelector('button[data-action="hunt"]').textContent = `Hunt (${state.actionCosts.hunt} energy)`;

    renderActionQueue();
}

export function highlightCurrentAction(index) {
    const actionQueueElement = document.getElementById('actionQueue').children;
    removeActiveHighlight();
    if (actionQueueElement.length > index) {
        actionQueueElement[index].classList.add('active');
    }
}

export function markActionAsExecuted(index) {
    const actionQueueElement = document.getElementById('actionQueue').children;
    if (actionQueueElement.length > index) {
        actionQueueElement[index].classList.add('executed');
    }
}

export function removeActiveHighlight() {
    const actionQueueElement = document.getElementById('actionQueue').children;
    for (let action of actionQueueElement) {
        action.classList.remove('active');
    }
}

// Mark the function from previous iteration as executed, if any
export function markPreviousActionAsExecuted(index) {
    if (index != 0) {
        markActionAsExecuted(index - 1);
    }
}

export function removeActionAsExecuted() {
    const actionQueueElement = document.getElementById('actionQueue').children;
    for (let action of actionQueueElement) {
        action.classList.remove('executed');
    }
}