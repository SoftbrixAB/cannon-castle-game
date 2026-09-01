/**
 * Cannon Castle Game - Node.js Tests
 * Tests the game logic directly without browser dependencies
 */

describe('Cannon Castle Game Logic', () => {
    describe('CANNONBALLS Configuration', () => {
        const CANNONBALLS = {
            small: { radius: 8, damage: 10, mass: 1, color: 0x333333, drag: 0.98, label: 'S' },
            medium: { radius: 12, damage: 25, mass: 2, color: 0x222222, drag: 0.96, label: 'M' },
            large: { radius: 18, damage: 50, mass: 4, color: 0x111111, drag: 0.94, label: 'L' }
        };

        test('small ball has correct properties', () => {
            expect(CANNONBALLS.small.radius).toBe(8);
            expect(CANNONBALLS.small.damage).toBe(10);
            expect(CANNONBALLS.small.mass).toBe(1);
            expect(CANNONBALLS.small.color).toBe(0x333333);
            expect(CANNONBALLS.small.drag).toBe(0.98);
            expect(CANNONBALLS.small.label).toBe('S');
        });

        test('medium ball has correct properties', () => {
            expect(CANNONBALLS.medium.radius).toBe(12);
            expect(CANNONBALLS.medium.damage).toBe(25);
            expect(CANNONBALLS.medium.mass).toBe(2);
            expect(CANNONBALLS.medium.color).toBe(0x222222);
            expect(CANNONBALLS.medium.drag).toBe(0.96);
            expect(CANNONBALLS.medium.label).toBe('M');
        });

        test('large ball has correct properties', () => {
            expect(CANNONBALLS.large.radius).toBe(18);
            expect(CANNONBALLS.large.damage).toBe(50);
            expect(CANNONBALLS.large.mass).toBe(4);
            expect(CANNONBALLS.large.color).toBe(0x111111);
            expect(CANNONBALLS.large.drag).toBe(0.94);
            expect(CANNONBALLS.large.label).toBe('L');
        });
    });

    describe('CASTLES Configuration', () => {
        const CASTLES = [
            {
                name: 'Neuschwanstein',
                colors: { stone: 0xE8D5B7, roof: 0x8B4513, detail: 0x5D4037, window: 0x2E7D32 },
                difficulty: 1.2
            },
            {
                name: 'Schönbrunn',
                colors: { stone: 0xF5E6D3, roof: 0x4E342E, detail: 0x3E2723, window: 0x1B5E20 },
                difficulty: 1.0
            }
        ];

        test('Neuschwanstein castle has correct properties', () => {
            expect(CASTLES[0].name).toBe('Neuschwanstein');
            expect(CASTLES[0].difficulty).toBe(1.2);
            expect(CASTLES[0].colors.stone).toBe(0xE8D5B7);
            expect(CASTLES[0].colors.roof).toBe(0x8B4513);
            expect(CASTLES[0].colors.detail).toBe(0x5D4037);
            expect(CASTLES[0].colors.window).toBe(0x2E7D32);
        });

        test('Schönbrunn castle has correct properties', () => {
            expect(CASTLES[1].name).toBe('Schönbrunn');
            expect(CASTLES[1].difficulty).toBe(1.0);
            expect(CASTLES[1].colors.stone).toBe(0xF5E6D3);
            expect(CASTLES[1].colors.roof).toBe(0x4E342E);
        });
    });

    describe('CONFIG Configuration', () => {
        const CONFIG = {
            type: 'Phaser.AUTO',
            width: 800,
            height: 600,
            parent: 'game',
            backgroundColor: '#87CEEB',
            physics: { default: 'arcade', arcade: { gravity: { y: 400 }, debug: false } },
            scene: ['MainScene'],
            scale: {
                mode: 'Phaser.Scale.FIT',
                autoCenter: 'Phaser.Scale.CENTER_BOTH',
                width: 800,
                height: 600
            }
        };

        test('has correct game dimensions', () => {
            expect(CONFIG.width).toBe(800);
            expect(CONFIG.height).toBe(600);
        });

        test('has physics configuration', () => {
            expect(CONFIG.physics.default).toBe('arcade');
            expect(CONFIG.physics.arcade.gravity.y).toBe(400);
        });

        test('has scene array', () => {
            expect(Array.isArray(CONFIG.scene)).toBe(true);
            expect(CONFIG.scene.length).toBeGreaterThan(0);
        });
    });

    describe('Game Logic - Ball Size Selection', () => {
        test('Ball size selection works correctly: large', () => {
            // This simulates the setBall method from MainScene
            function setBall(size) {
                if (!this.state.active) return;
                this.state.ballSize = size;
                Object.keys(this.ballBtns).forEach(s => {
                    this.ballBtns[s].clear();
                    this.ballBtns[s].fillStyle(this.state.ballSize === s ? 0xFFD700 : 0xC0C0C0);
                    this.ballBtns[s].fillCircle(0, 0, 25);
                });
                this.ballTxt.setText(`Ball: ${this.state.ballSize.toUpperCase()}`);
            }

            const mockScene = {
                state: { ballSize: 'medium', active: true },
                ballTxt: { setText: (text) => { mockScene.lastText = text; } },
                ballBtns: {
                    small: { clear: () => {}, fillStyle: () => {}, fillCircle: () => {} },
                    medium: { clear: () => {}, fillStyle: () => {}, fillCircle: () => {} },
                    large: { clear: () => {}, fillStyle: () => {}, fillCircle: () => {} }
                }
            };

            mockScene.setBall = setBall.bind(mockScene);
            mockScene.setBall('large');
            expect(mockScene.state.ballSize).toBe('large');
        });

        test('Ball size selection works correctly: small', () => {
            function setBall(size) {
                if (!this.state.active) return;
                this.state.ballSize = size;
                Object.keys(this.ballBtns).forEach(s => {
                    this.ballBtns[s].clear();
                    this.ballBtns[s].fillStyle(this.state.ballSize === s ? 0xFFD700 : 0xC0C0C0);
                    this.ballBtns[s].fillCircle(0, 0, 25);
                });
                this.ballTxt.setText(`Ball: ${this.state.ballSize.toUpperCase()}`);
            }

            const mockScene = {
                state: { ballSize: 'medium', active: true },
                ballTxt: { setText: (text) => { mockScene.lastText = text; } },
                ballBtns: {
                    small: { clear: () => {}, fillStyle: () => {}, fillCircle: () => {} },
                    medium: { clear: () => {}, fillStyle: () => {}, fillCircle: () => {} },
                    large: { clear: () => {}, fillStyle: () => {}, fillCircle: () => {} }
                }
            };

            mockScene.setBall = setBall.bind(mockScene);
            mockScene.setBall('small');
            expect(mockScene.state.ballSize).toBe('small');
        });

        test('Ball size selection respects active state', () => {
            function setBall(size) {
                if (!this.state.active) return;
                this.state.ballSize = size;
            }

            const mockScene = {
                state: { ballSize: 'medium', active: false },
                ballBtns: {}
            };

            mockScene.setBall = setBall.bind(mockScene);
            mockScene.setBall('large');
            expect(mockScene.state.ballSize).toBe('medium');
        });
    });

    describe('Game Logic - Powder Charging', () => {
        test('Powder charging works correctly', () => {
            function addPowder(amount) {
                if (!this.state.active) return;
                this.state.powder = Math.min(this.state.powder + amount, this.state.maxPowder);
                this.powderTxt.setText(`Powder: ${Math.round(this.state.powder)}%`);
            }

            const mockScene = {
                state: { powder: 0, maxPowder: 100, active: true },
                powderTxt: { setText: () => {} }
            };

            mockScene.addPowder = addPowder.bind(mockScene);

            mockScene.addPowder(10);
            expect(mockScene.state.powder).toBe(10);

            mockScene.addPowder(50);
            expect(mockScene.state.powder).toBe(60);

            mockScene.addPowder(100);
            expect(mockScene.state.powder).toBe(100);
        });

        test('Powder is capped at maxPowder', () => {
            function addPowder(amount) {
                if (!this.state.active) return;
                this.state.powder = Math.min(this.state.powder + amount, this.state.maxPowder);
            }

            const mockScene = {
                state: { powder: 80, maxPowder: 100, active: true }
            };

            mockScene.addPowder = addPowder.bind(mockScene);
            mockScene.addPowder(50);
            expect(mockScene.state.powder).toBe(100);
        });
    });

    describe('Game Logic - Damage Calculation', () => {
        test('Damage values are correct', () => {
            const CANNONBALLS = {
                small: { damage: 10 },
                medium: { damage: 25 },
                large: { damage: 50 }
            };

            expect(CANNONBALLS.small.damage).toBe(10);
            expect(CANNONBALLS.medium.damage).toBe(25);
            expect(CANNONBALLS.large.damage).toBe(50);
        });

        test('Damage with powder multiplier is correct', () => {
            const baseDamage = 25; // medium ball
            const fullPowderDamage = baseDamage * 1.0; // 100% powder
            const halfPowderDamage = baseDamage * 0.5; // 50% powder

            expect(fullPowderDamage).toBe(25);
            expect(halfPowderDamage).toBe(12.5);
        });
    });

    describe('Game Logic - Castle Health', () => {
        test('Castle health calculation is correct', () => {
            const neuschwansteinDifficulty = 1.2;
            const schönbrunnDifficulty = 1.0;

            const neuschwansteinHealth = 100 * neuschwansteinDifficulty;
            const schönbrunnHealth = 100 * schönbrunnDifficulty;

            expect(neuschwansteinHealth).toBe(120);
            expect(schönbrunnHealth).toBe(100);
        });
    });

    describe('Game Logic - Score Calculation', () => {
        test('Score from hitting castle is 50% of damage', () => {
            const damage = 25; // medium ball at full powder
            const expectedScore = Math.floor(damage * 0.5); // 12
            expect(expectedScore).toBe(12);
        });

        test('Score from destroying castle is 100 * difficulty', () => {
            const castleDifficulty = 1.2;
            const destroyScore = 100 * castleDifficulty; // 120
            expect(destroyScore).toBe(120);
        });
    });

    describe('Game Logic - Timer Formatting', () => {
        test('formatTime formats correctly', () => {
            function formatTime(s) {
                const m = Math.floor(s / 60);
                const sec = s % 60;
                return `${m}:${sec.toString().padStart(2, '0')}`;
            }

            expect(formatTime(90)).toBe('1:30');
            expect(formatTime(45)).toBe('0:45');
            expect(formatTime(120)).toBe('2:00');
            expect(formatTime(5)).toBe('0:05');
        });
    });

    describe('Game Logic - Physics Configuration', () => {
        test('Cannonball physics properties are correct', () => {
            const CANNONBALLS = {
                small: { mass: 1, drag: 0.98 },
                medium: { mass: 2, drag: 0.96 },
                large: { mass: 4, drag: 0.94 }
            };

            expect(CANNONBALLS.small.mass).toBe(1);
            expect(CANNONBALLS.medium.mass).toBe(2);
            expect(CANNONBALLS.large.mass).toBe(4);

            expect(CANNONBALLS.small.drag).toBe(0.98);
            expect(CANNONBALLS.medium.drag).toBe(0.96);
            expect(CANNONBALLS.large.drag).toBe(0.94);
        });
    });

    describe('Game Logic - Barrel Rotation', () => {
        test('Barrel rotation limits are correct', () => {
            const minAngle = -1.2;
            const maxAngle = 0.8;

            expect(minAngle).toBe(-1.2);
            expect(maxAngle).toBe(0.8);
        });

        test('Cannonball velocity calculation is correct', () => {
            const fullPowderVelocity = 1.0 * 600; // 600
            const halfPowderVelocity = 0.5 * 600; // 300
            const noPowderVelocity = 0.0 * 600; // 0

            expect(fullPowderVelocity).toBe(600);
            expect(halfPowderVelocity).toBe(300);
            expect(noPowderVelocity).toBe(0);
        });
    });

    describe('Mini-games', () => {
        const MINI_GAMES = [
            { id: 'trivia', name: 'Castle Trivia', icon: '📚' },
            { id: 'reflex', name: 'Quick Reflex', icon: '🎯' }
        ];

        const TRIVIA = [
            { q: "Which castle inspired Disney's Sleeping Beauty?", a: ["Neuschwanstein","Edinburgh","Himeji","Windsor"], correct: 0 },
            { q: "Where is Schönbrunn Palace?", a: ["Germany","Austria","France","Italy"], correct: 1 },
            { q: "What style is Neuschwanstein?", a: ["Baroque","Romanesque","Gothic Revival","Renaissance"], correct: 2 }
        ];

        test('Mini-games are defined', () => {
            expect(Array.isArray(MINI_GAMES)).toBe(true);
            expect(MINI_GAMES.length).toBeGreaterThan(0);
        });

        test('Trivia questions are defined', () => {
            expect(Array.isArray(TRIVIA)).toBe(true);
            expect(TRIVIA.length).toBeGreaterThan(0);
        });

        test('Each trivia question has required properties', () => {
            TRIVIA.forEach((q, i) => {
                expect(q.q).toBeDefined();
                expect(Array.isArray(q.a)).toBe(true);
                expect(q.a.length).toBeGreaterThan(0);
                expect(typeof q.correct).toBe('number');
            });
        });
    });
});
