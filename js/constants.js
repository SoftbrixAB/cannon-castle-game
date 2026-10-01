// Game Constants

const CANNONBALLS = {
    small: { radius: 8, damage: 10, mass: 1, color: 0x333333, drag: 0.98, label: 'S' },
    medium: { radius: 12, damage: 25, mass: 2, color: 0x222222, drag: 0.96, label: 'M' },
    large: { radius: 18, damage: 50, mass: 4, color: 0x111111, drag: 0.94, label: 'L' }
};

const MINI_GAMES = [
    { id: 'trivia', name: 'Castle Trivia', icon: '📚' },
    { id: 'reflex', name: 'Quick Reflex', icon: '🎯' }
];

const TRIVIA = [
    { q: "Which castle inspired Disney's Sleeping Beauty?", a: ["Neuschwanstein","Edinburgh","Himeji","Windsor"], correct: 0 },
    { q: "Where is Schönbrunn Palace?", a: ["Germany","Austria","France","Italy"], correct: 1 },
    { q: "What style is Neuschwanstein?", a: ["Baroque","Romanesque","Gothic Revival","Renaissance"], correct: 2 }
];

// Export to global scope for use in other scripts
window.CANNONBALLS = CANNONBALLS;
window.MINI_GAMES = MINI_GAMES;
window.TRIVIA = TRIVIA;
