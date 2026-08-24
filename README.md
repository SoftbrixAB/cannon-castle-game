# Cannon Castle Game

A strategic cannon game where players shoot at classical castles.

## Game Features

- **Multiple Castle Types**: Neuschwanstein and Schönbrunn with unique designs
- **Cannon Mechanics**: Adjust angle, add powder, and fire cannonballs of different sizes
- **Physics Engine**: Powered by Phaser 3 physics for realistic projectile motion
- **Scoring System**: Earn points by damaging and destroying castles
- **Mini-Games**: Castle trivia and reflex games
- **Time Limit**: 2-minute countdown timer

## Controls

- **Drag Barrel**: Click and drag the cannon barrel to aim
- **Add Powder**: Click the powder bag (💣) to add powder (increases shot power)
- **Select Ball Size**: Click S, M, or L buttons to choose cannonball size
- **Fire**: Click the fire button (🔥) at the end of the barrel when ready
- **Mini-Game**: Click the Mini-Game button for bonus challenges

## Castle Types

1. **Neuschwanstein** (Difficulty: 1.2x)
   - Gothic Revival style castle
   - Inspired Disney's Sleeping Beauty castle
   - Features main tower with conical roof and side towers

2. **Schönbrunn** (Difficulty: 1.0x)
   - Baroque style palace
   - Located in Austria
   - Features mansard roof and decorative columns

## Cannonball Types

| Size | Radius | Damage | Mass | Color |
|------|--------|--------|------|-------|
| Small (S) | 8px | 10 | 1 | Dark Gray |
| Medium (M) | 12px | 25 | 2 | Darker Gray |
| Large (L) | 18px | 50 | 4 | Black |

## Development

### Running the Game

Simply open `index.html` in a web browser. The game uses Phaser 3 loaded from CDN.

### GitHub Pages

The game is hosted on GitHub Pages at:
https://softbrixab.github.io/cannon-castle-game/

### Testing

A test suite is available in the `test/` directory. Open `test/index.html` in a browser to run tests.

### Project Structure

```
cannon-castle-game/
├── index.html          # Main game file
├── README.md           # Documentation
└── test/
    └── index.html      # Test suite
```

## Issues

### Known Issues

1. **Game Loading Problem**: The game may not load properly when opening `index.html` directly due to the way the game instance is created at the end of the script. This can cause the `game` variable to not be accessible to the test suite.

   **Workaround**: The game loads correctly when served via a web server or on GitHub Pages.

### Fixes Applied

- Separated game code from test code to prevent conflicts
- Created standalone test suite that includes its own copy of the game code
- Added proper test framework with comprehensive tests

## License

MIT License - see LICENSE file for details.
