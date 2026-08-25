# Cannon Castle Game - How to Play

## Game Overview

**Cannon Castle Game** is a strategic game where you control a cannon to shoot at classical castles. Your goal is to destroy castles by firing cannonballs at them while managing your resources and time.

## Controls & Gameplay Steps

### Step 1: Load Powder
**Action:** Click the powder bag (💣) button on the left side of the screen.

- Each click adds 10% powder to your cannon
- Maximum powder capacity: 100%
- Powder determines the power of your shot - more powder = more velocity
- **Visual indicator:** The powder percentage is displayed above the powder bag

### Step 2: Select Cannonball Size
**Action:** Click one of the three size buttons (S, M, L) in the middle-bottom of the screen.

| Size | Label | Damage | Mass | Best For |
|------|-------|--------|------|----------|
| Small | S | 10 | 1 | Fast shots, quick adjustments |
| Medium | M | 25 | 2 | Balanced (default) |
| Large | L | 50 | 4 | Maximum damage |

- The selected ball size is highlighted in gold (✨)
- Larger balls do more damage but are heavier (affected more by gravity)
- **Visual indicator:** Current selection shown as "Ball: S/M/L"

### Step 3: Aim the Cannon
**Action:** Click and drag the cannon barrel up or down.

- The barrel rotates around its left pivot point (at position 140, 500)
- Drag **up** to aim higher (shoot further)
- Drag **down** to aim lower (shoot closer targets)
- Angle range: -70° to +45° approximately
- **Visual indicator:** The barrel rotates visibly as you drag

### Step 4: Fire the Cannon
**Action:** Click the fire button (🔥) at the end of the barrel.

- The fire button appears at the end of the barrel when you have powder loaded
- The button is **only visible** when powder > 0%
- After firing, powder resets to 0%
- **Visual effects:**
  - Muzzle flash (yellow) at the barrel end
  - Cannonball flies with physics (gravity, drag)

### Step 5: Hit the Castle
- Cannonballs that hit the castle cause damage
- Damage = (ball damage × powder percentage)
- **Visual effects:**
  - Red hit marker at impact point
  - Castle shakes on hit
  - Health bar above castle decreases (green → orange → red)

### Step 6: Destroy the Castle
- When castle health reaches 0, it is destroyed
- You earn **100 × difficulty** bonus points
- A new castle spawns automatically after 1 second
- Castle types rotate: Neuschwanstein → Schönbrunn → Neuschwanstein...

## Additional Features

### Mini-Games
**Action:** Click the "Mini-Game" button in the bottom-right corner.

- Currently features **Castle Trivia**
- Answer questions correctly to earn **15 extra seconds** on your timer
- Wrong answers return you to the game

### Timer
- You have **2 minutes (120 seconds)** to play
- Timer displayed in top-right corner (MM:SS format)
- **Visual indicator:** Fire stick burns down as time passes
- When timer reaches 0, the game restarts

### Scoring
- **Hit damage:** Earn 50% of damage as score points
- **Castle destruction:** Earn 100 × castle difficulty bonus
- **Score display:** Top-left corner shows current score
- **Castles destroyed:** Counter below score shows how many castles you've destroyed

## Strategy Tips

1. **Start with Medium (M) balls** - Good balance of damage and range
2. **Load full powder (100%)** before firing for maximum distance
3. **Aim slightly above the castle** - Account for gravity pulling the ball down
4. **Use Large (L) balls for tough castles** - Higher difficulty castles need more damage
5. **Play mini-games for extra time** - More time = more shots = more points
6. **Fire quickly with Small (S) balls** - Good for testing angles and quick hits

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't click on cannon | Make sure you're clicking on the barrel itself, not the base |
| Fire button not appearing | Add powder first - button only appears when powder > 0% |
| Cannonballs not reaching | Increase powder and/or aim higher |
| Game not loading | Refresh the page and wait for Phaser to load |

## Game Elements Reference

```
┌─────────────────────────────────────────────────────────────┐
│  Score: 100    Castles: 2    Timer: 1:30    [Fire Stick]        │
│                                                             │
│  [Cannon Base]──────────────[Barrel]────────● (Fire Button)  │
│      💣 (Powder)    S    M    L    [Mini-Game Button]       │
│                                                             │
│  [Grass Ground]                                             │
│                                                             │
│                    [Castle with Health Bar]                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Quick Start Guide

1. **Click the powder bag (💣) 10 times** → Powder: 100%
2. **Click "M" for Medium ball** → Selected
3. **Drag the barrel up** to aim at the castle tower
4. **Click the fire button (🔥)** → BOOM! Cannonball flies
5. **Watch the castle take damage** → Health bar decreases
6. **Repeat** until castle is destroyed
7. **New castle appears** → Keep playing!

---

**Enjoy the game!** 🎮💥
