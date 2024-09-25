// Define action execution logic
export function executeAction(action, state) {
    switch(action) {
        case 'walk':
            if (state.energy >= 1) {
                state.distance += 1; // Increase distance by 1 km
                state.energy -= 1; // Decrease energy by 1
            }
            break;
        case 'eat':
            if (state.energy >= 2) {
                state.food += 1; // Increase food eaten
                state.energy -= 2; // Decrease energy by 2
            }
            break;
        case 'hunt':
            if (state.energy >= 3) {
                state.animals += 1; // Increase animals hunted
                state.energy -= 3; // Decrease energy by 3
            }
            break;
    }
}
