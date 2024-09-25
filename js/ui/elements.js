import { getState } from '../game/state.js';

export function renderActionQueue() {
    const state = getState();
    const actionQueueElement = document.getElementById('actionQueue');
    actionQueueElement.innerHTML = '';
    state.actionQueue.forEach((action, index) => {
        const li = document.createElement('li');
        li.textContent = action.charAt(0).toUpperCase() + action.slice(1);
        
        // Only add 'executed' class if the action has been executed
        if (index < state.currentActionIndex) {
            li.classList.add('executed');
        }

        actionQueueElement.appendChild(li);
    });
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

export function renderUI() {
    renderActionQueue();
}
