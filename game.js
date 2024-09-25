// Importing modules
import { initializeState, resetState, addAction} from './js/game/state.js';
import { startGameLoop } from './js/game/gameLoop.js';
import { setupEventListeners } from './js/ui/events.js';
import { renderUI } from './js/ui/elements.js';

// Initial setup
initializeState();
setupEventListeners();
renderUI();

// Start button logic
document.getElementById('startLoop').addEventListener('click', startGameLoop);
document.getElementById('resetGame').addEventListener('click', resetState);
