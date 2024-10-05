import { getActionCost } from './state.js';

// Define action execution logic
export function executeAction(action, state) {
    switch (action) {
        case 'walk':
            state.distance += 1; // Increase distance by 1 km
            break;
        case 'eat':
            state.food += 1; // Increase food eaten
            break;
        case 'hunt':
            state.animals += 1; // Increase animals hunted
            break;
    }
    state.energy -= getActionCost(action);
}
