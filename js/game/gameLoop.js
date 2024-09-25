import { executeAction } from './actions.js';
import { getState, updateDisplay } from './state.js';
import { highlightCurrentAction, removeActionAsExecuted, removeActiveHighlight, markPreviousActionAsExecuted } from '../ui/elements.js';

let loopInterval = null;

export function startGameLoop() {
    const state = getState();
    if (loopInterval || state.actionQueue.length === 0) return;
    
    loopInterval = setInterval(() => {
        if (state.currentActionIndex < state.actionQueue.length && state.energy > 0) {
            const currentAction = state.actionQueue[state.currentActionIndex];
            executeAction(currentAction, state);
            updateDisplay();
            highlightCurrentAction(state.currentActionIndex);
            markPreviousActionAsExecuted(state.currentActionIndex);
            state.currentActionIndex++;
        } else {
            clearInterval(loopInterval);
            loopInterval = null;
            updateDisplay();
            removeActionAsExecuted();
            removeActiveHighlight();
            state.currentActionIndex = 0;
        }
    }, 1000);
}
