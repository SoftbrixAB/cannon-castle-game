// Simple sound utility using Web Audio API
// Creates basic beeps and tones without external audio files

let audioContext = null;
const sounds = {
    fire: null,
    hit: null,
    destroy: null
};

function getAudioContext() {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('AudioContext not available:', e);
            return null;
        }
    }
    return audioContext;
}

function createOscillator(frequency, type, duration, volume) {
    const ctx = getAudioContext();
    if (!ctx) return null;
    
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gainNode.gain.value = volume;
    
    return { oscillator, gainNode, ctx };
}

function playSound(name, frequency, type, duration, volume) {
    try {
        const result = createOscillator(frequency, type, duration, volume);
        if (!result) return;
        
        const { oscillator, gainNode, ctx } = result;
        
        // Stop any existing sound of the same type
        if (sounds[name]) {
            sounds[name].oscillator.stop();
        }
        
        sounds[name] = { oscillator, gainNode };
        
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        oscillator.stop(ctx.currentTime + duration);
        
        setTimeout(() => {
            sounds[name] = null;
        }, duration * 1000);
    } catch (e) {
        // Audio might not be available (autoplay restrictions, etc.)
        console.warn('Could not play sound:', e);
    }
}

// Global functions for use in MainScene
window.playFire = function() { playSound('fire', 800, 'sine', 0.1, 0.3); };
window.playHit = function() { playSound('hit', 400, 'sine', 0.1, 0.3); };
window.playDestroy = function() { playSound('destroy', 200, 'sine', 0.3, 0.4); };
window.playClick = function() { playSound('click', 600, 'sine', 0.05, 0.2); };
