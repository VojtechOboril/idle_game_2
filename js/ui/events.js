import { addAction } from '../game/state.js';

export function setupEventListeners() {
    document.querySelectorAll('.action-buttons button').forEach(button => {
        button.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            addAction(action);
        });
    });
}
