// Castle Definitions

const CASTLES = [
    {
        name: 'Neuschwanstein',
        colors: { stone: 0xE8D5B7, roof: 0x8B4513, detail: 0x5D4037, window: 0x2E7D32 },
        difficulty: 1.2,
        draw: function(scene, x, y) {
            const g = scene.add.graphics();
            
            // Main tower
            g.fillStyle(this.colors.stone, 1);
            g.fillRect(x, y - 200, 80, 200);
            g.lineStyle(2, this.colors.detail);
            g.strokeRect(x, y - 200, 80, 200);
            
            // Conical roof
            g.fillStyle(this.colors.roof, 1);
            g.beginPath();
            g.moveTo(x - 5, y - 200);
            g.lineTo(x + 40, y - 260);
            g.lineTo(x + 85, y - 200);
            g.closePath();
            g.fillPath();
            
            // Side towers
            g.fillStyle(this.colors.stone, 1);
            g.fillRect(x - 80, y - 120, 60, 120);
            g.fillRect(x + 80, y - 120, 60, 120);
            
            // Pointed roofs
            g.fillStyle(this.colors.roof, 1);
            g.beginPath();
            g.moveTo(x - 80, y - 120);
            g.lineTo(x - 50, y - 180);
            g.lineTo(x - 20, y - 120);
            g.closePath();
            g.fillPath();
            g.beginPath();
            g.moveTo(x + 80, y - 120);
            g.lineTo(x + 110, y - 180);
            g.lineTo(x + 140, y - 120);
            g.closePath();
            g.fillPath();
            
            // Walls
            g.fillStyle(this.colors.stone, 1);
            g.fillRect(x - 60, y - 60, 200, 30);
            
            // Windows
            g.fillStyle(this.colors.window, 1);
            for (let i = 0; i < 3; i++) {
                g.fillRect(x + 10 + i * 20, y - 180 + i * 30, 10, 15);
                g.fillRect(x + 40 + i * 20, y - 180 + i * 30, 10, 15);
            }
            
            return g;
        },
        drawWithPhysics: function(scene, x, y, partsArray) {
            // y = 500 (ground level)
            // Ground body covers y=500 to y=550
            // Main tower base (heavy, sits on ground)
            const mainTower = scene.add.graphics();
            mainTower.fillStyle(this.colors.stone, 1);
            mainTower.fillRect(x - 40, y - 100, 80, 100);
            mainTower.lineStyle(2, this.colors.detail);
            mainTower.strokeRect(x - 40, y - 100, 80, 100);
            scene.physics.add.existing(mainTower);
            mainTower.body.setSize(80, 100);
            mainTower.body.setOffset(-40, -48);
            mainTower.body.setMass(10);
            mainTower.body.setAllowGravity(false);
            mainTower.setPosition(x, y - 50);
            partsArray.push(mainTower);
            
            // Main tower top
            const towerTop = scene.add.graphics();
            towerTop.fillStyle(this.colors.stone, 1);
            towerTop.fillRect(x - 40, y - 200, 80, 100);
            towerTop.lineStyle(2, this.colors.detail);
            towerTop.strokeRect(x - 40, y - 200, 80, 100);
            scene.physics.add.existing(towerTop);
            towerTop.body.setSize(80, 100);
            towerTop.body.setOffset(-40, -50);
            towerTop.body.setMass(5);
            towerTop.body.setAllowGravity(false);
            towerTop.setPosition(x, y - 150);
            partsArray.push(towerTop);
            
            // Conical roof
            const roof = scene.add.graphics();
            roof.fillStyle(this.colors.roof, 1);
            roof.beginPath();
            roof.moveTo(x - 45, y - 200);
            roof.lineTo(x, y - 250);
            roof.lineTo(x + 45, y - 200);
            roof.closePath();
            roof.fillPath();
            scene.physics.add.existing(roof);
            roof.body.setSize(90, 50);
            roof.body.setOffset(-45, -25);
            roof.body.setMass(2);
            roof.body.setAllowGravity(false);
            roof.setPosition(x, y - 225);
            partsArray.push(roof);
            
            // Left side tower
            const leftTower = scene.add.graphics();
            leftTower.fillStyle(this.colors.stone, 1);
            leftTower.fillRect(0, 0, 60, 80);
            scene.physics.add.existing(leftTower);
            leftTower.body.setSize(60, 80);
            leftTower.body.setOffset(-30, -39);
            leftTower.body.setMass(4);
            leftTower.body.setAllowGravity(false);
            leftTower.setPosition(x - 70, y - 40);
            partsArray.push(leftTower);
            
            // Right side tower
            const rightTower = scene.add.graphics();
            rightTower.fillStyle(this.colors.stone, 1);
            rightTower.fillRect(0, 0, 60, 80);
            scene.physics.add.existing(rightTower);
            rightTower.body.setSize(60, 80);
            rightTower.body.setOffset(-30, -39);
            rightTower.body.setMass(4);
            rightTower.body.setAllowGravity(false);
            rightTower.setPosition(x + 70, y - 40);
            partsArray.push(rightTower);
            
            // Left pointed roof
            const leftRoof = scene.add.graphics();
            leftRoof.fillStyle(this.colors.roof, 1);
            leftRoof.beginPath();
            leftRoof.moveTo(0, 0);
            leftRoof.lineTo(30, -40);
            leftRoof.lineTo(60, 0);
            leftRoof.closePath();
            leftRoof.fillPath();
            scene.physics.add.existing(leftRoof);
            leftRoof.body.setSize(60, 40);
            leftRoof.body.setOffset(-30, -20);
            leftRoof.body.setMass(1);
            leftRoof.body.setAllowGravity(false);
            leftRoof.setPosition(x - 70, y - 80);
            partsArray.push(leftRoof);
            
            // Right pointed roof
            const rightRoof = scene.add.graphics();
            rightRoof.fillStyle(this.colors.roof, 1);
            rightRoof.beginPath();
            rightRoof.moveTo(0, 0);
            rightRoof.lineTo(30, -40);
            rightRoof.lineTo(60, 0);
            rightRoof.closePath();
            rightRoof.fillPath();
            scene.physics.add.existing(rightRoof);
            rightRoof.body.setSize(60, 40);
            rightRoof.body.setOffset(-30, -20);
            rightRoof.body.setMass(1);
            rightRoof.body.setAllowGravity(false);
            rightRoof.setPosition(x + 70, y - 80);
            partsArray.push(rightRoof);
            
            // Walls
            const walls = scene.add.graphics();
            walls.fillStyle(this.colors.stone, 1);
            walls.fillRect(0, 0, 200, 30);
            scene.physics.add.existing(walls);
            walls.body.setSize(200, 30);
            walls.body.setOffset(-100, -15);
            walls.body.setMass(3);
            walls.body.setAllowGravity(false);
            walls.setPosition(x, y - 30);
            partsArray.push(walls);
            
            // Windows (decorative, no physics)
            for (let i = 0; i < 3; i++) {
                const win = scene.add.graphics();
                win.fillStyle(this.colors.window, 1);
                win.fillRect(x - 30 + i * 20, y - 160 + i * 30, 10, 15);
                win.fillRect(x + i * 20, y - 160 + i * 30, 10, 15);
                partsArray.push(win);
            }
        }
    },
    {
        name: 'Schönbrunn',
        colors: { stone: 0xF5E6D3, roof: 0x4E342E, detail: 0x3E2723, window: 0x1B5E20 },
        difficulty: 1.0,
        draw: function(scene, x, y) {
            const g = scene.add.graphics();
            
            // Main building (Baroque style)
            g.fillStyle(this.colors.stone, 1);
            g.fillRect(x - 100, y - 100, 200, 100);
            g.lineStyle(2, this.colors.detail);
            g.strokeRect(x - 100, y - 100, 200, 100);
            
            // Mansard roof
            g.fillStyle(this.colors.roof, 1);
            g.fillRect(x - 110, y - 100, 220, 20);
            g.beginPath();
            g.moveTo(x - 110, y - 100);
            g.lineTo(x - 120, y - 120);
            g.lineTo(x + 120, y - 120);
            g.lineTo(x + 110, y - 100);
            g.closePath();
            g.fillPath();
            
            // Side wings
            g.fillStyle(this.colors.stone, 1);
            g.fillRect(x - 180, y - 60, 80, 60);
            g.fillRect(x + 100, y - 60, 80, 60);
            
            // Decorative columns
            g.fillStyle(this.colors.detail, 1);
            for (let i = 0; i < 3; i++) {
                g.fillRect(x - 80 + i * 40, y - 100, 5, 30);
                g.fillRect(x - 85 + i * 40, y - 100, 15, 5);
            }
            
            // Windows
            g.fillStyle(this.colors.window, 1);
            for (let i = 0; i < 5; i++) {
                g.fillRect(x - 90 + i * 40, y - 80, 12, 18);
                g.fillRect(x - 90 + i * 40, y - 40, 12, 18);
            }
            
            // Gardens (simplified)
            g.fillStyle(0x2E8B57, 0.4);
            g.fillRect(x - 150, y, 300, 40);
            
            return g;
        },
        drawWithPhysics: function(scene, x, y, partsArray) {
            // y = 500 (ground level)
            // Main building base
            const mainBuilding = scene.add.graphics();
            mainBuilding.fillStyle(this.colors.stone, 1);
            mainBuilding.fillRect(x - 100, y - 50, 200, 50);
            mainBuilding.lineStyle(2, this.colors.detail);
            mainBuilding.strokeRect(x - 100, y - 50, 200, 50);
            scene.physics.add.existing(mainBuilding);
            mainBuilding.body.setSize(200, 50);
            mainBuilding.body.setOffset(-100, -24);
            mainBuilding.body.setMass(15);
            mainBuilding.body.setAllowGravity(false);
            mainBuilding.setPosition(x, y - 25);
            partsArray.push(mainBuilding);
            
            // Main building top
            const buildingTop = scene.add.graphics();
            buildingTop.fillStyle(this.colors.stone, 1);
            buildingTop.fillRect(x - 100, y - 100, 200, 50);
            buildingTop.lineStyle(2, this.colors.detail);
            buildingTop.strokeRect(x - 100, y - 100, 200, 50);
            scene.physics.add.existing(buildingTop);
            buildingTop.body.setSize(200, 50);
            buildingTop.body.setOffset(-100, -25);
            buildingTop.body.setMass(8);
            buildingTop.body.setAllowGravity(false);
            buildingTop.setPosition(x, y - 75);
            partsArray.push(buildingTop);
            
            // Mansard roof
            const roof = scene.add.graphics();
            roof.fillStyle(this.colors.roof, 1);
            roof.fillRect(x - 110, y - 100, 220, 20);
            roof.beginPath();
            roof.moveTo(x - 110, y - 100);
            roof.lineTo(x - 120, y - 120);
            roof.lineTo(x + 120, y - 120);
            roof.lineTo(x + 110, y - 100);
            roof.closePath();
            roof.fillPath();
            scene.physics.add.existing(roof);
            roof.body.setSize(220, 40);
            roof.body.setOffset(-110, -20);
            roof.body.setMass(3);
            roof.body.setAllowGravity(false);
            roof.setPosition(x, y - 110);
            partsArray.push(roof);
            
            // Left wing
            const leftWing = scene.add.graphics();
            leftWing.fillStyle(this.colors.stone, 1);
            leftWing.fillRect(0, 0, 80, 30);
            scene.physics.add.existing(leftWing);
            leftWing.body.setSize(80, 30);
            leftWing.body.setOffset(-40, -14);
            leftWing.body.setMass(5);
            leftWing.body.setAllowGravity(false);
            leftWing.setPosition(x - 140, y - 15);
            partsArray.push(leftWing);
            
            // Right wing
            const rightWing = scene.add.graphics();
            rightWing.fillStyle(this.colors.stone, 1);
            rightWing.fillRect(0, 0, 80, 30);
            scene.physics.add.existing(rightWing);
            rightWing.body.setSize(80, 30);
            rightWing.body.setOffset(-40, -14);
            rightWing.body.setMass(5);
            rightWing.body.setAllowGravity(false);
            rightWing.setPosition(x + 140, y - 15);
            partsArray.push(rightWing);
            
            // Decorative columns (decorative, no physics)
            for (let i = 0; i < 3; i++) {
                const col = scene.add.graphics();
                col.fillStyle(this.colors.detail, 1);
                col.fillRect(x - 80 + i * 40, y - 80, 5, 30);
                col.fillRect(x - 85 + i * 40, y - 80, 15, 5);
                partsArray.push(col);
            }
            
            // Windows (decorative, no physics)
            for (let i = 0; i < 5; i++) {
                const win = scene.add.graphics();
                win.fillStyle(this.colors.window, 1);
                win.fillRect(x - 90 + i * 40, y - 60, 12, 18);
                win.fillRect(x - 90 + i * 40, y - 20, 12, 18);
                partsArray.push(win);
            }
            
            // Gardens (decorative, no physics)
            const garden = scene.add.graphics();
            garden.fillStyle(0x2E8B57, 0.4);
            garden.fillRect(x - 150, y + 20, 300, 40);
            partsArray.push(garden);
        }
    },
    {
        name: 'Himeji',
        colors: { stone: 0xFFFFFF, roof: 0x333333, detail: 0x666666, window: 0x000000 },
        difficulty: 1.5,
        draw: function(scene, x, y) {
            const g = scene.add.graphics();
            
            // Main keep (Japanese castle style)
            g.fillStyle(this.colors.stone, 1);
            g.fillRect(x - 50, y - 150, 100, 150);
            g.lineStyle(2, this.colors.detail);
            g.strokeRect(x - 50, y - 150, 100, 150);
            
            // Curved roof
            g.fillStyle(this.colors.roof, 1);
            g.beginPath();
            g.moveTo(x - 60, y - 150);
            g.bezierCurveTo(x - 60, y - 180, x, y - 200, x + 60, y - 150);
            g.lineTo(x + 60, y - 150);
            g.lineTo(x - 60, y - 150);
            g.closePath();
            g.fillPath();
            
            // Secondary towers
            g.fillStyle(this.colors.stone, 1);
            g.fillRect(x - 120, y - 80, 50, 80);
            g.fillRect(x + 70, y - 80, 50, 80);
            
            return g;
        },
        drawWithPhysics: function(scene, x, y, partsArray) {
            // Main keep
            const keep = scene.add.graphics();
            keep.fillStyle(this.colors.stone, 1);
            keep.fillRect(x - 50, y - 50, 100, 100);
            scene.physics.add.existing(keep);
            keep.body.setSize(100, 100);
            keep.body.setOffset(-50, -50);
            keep.body.setMass(20);
            keep.body.setAllowGravity(false);
            keep.setPosition(x, y - 25);
            partsArray.push(keep);
            
            // Roof
            const roof = scene.add.graphics();
            roof.fillStyle(this.colors.roof, 1);
            roof.fillRect(x - 60, y - 100, 120, 20);
            scene.physics.add.existing(roof);
            roof.body.setSize(120, 20);
            roof.body.setOffset(-60, -10);
            roof.body.setMass(5);
            roof.body.setAllowGravity(false);
            roof.setPosition(x, y - 75);
            partsArray.push(roof);
            
            // Left tower
            const leftTower = scene.add.graphics();
            leftTower.fillStyle(this.colors.stone, 1);
            leftTower.fillRect(0, 0, 50, 80);
            scene.physics.add.existing(leftTower);
            leftTower.body.setSize(50, 80);
            leftTower.body.setOffset(-25, -40);
            leftTower.body.setMass(8);
            leftTower.body.setAllowGravity(false);
            leftTower.setPosition(x - 85, y - 15);
            partsArray.push(leftTower);
            
            // Right tower
            const rightTower = scene.add.graphics();
            rightTower.fillStyle(this.colors.stone, 1);
            rightTower.fillRect(0, 0, 50, 80);
            scene.physics.add.existing(rightTower);
            rightTower.body.setSize(50, 80);
            rightTower.body.setOffset(-25, -40);
            rightTower.body.setMass(8);
            rightTower.body.setAllowGravity(false);
            rightTower.setPosition(x + 85, y - 15);
            partsArray.push(rightTower);
        }
    }
];

// Export to global scope for use in other scripts
window.CASTLES = CASTLES;
