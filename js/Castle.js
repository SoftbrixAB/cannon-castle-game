// Castle Class - Represents a castle with physics parts

class Castle {
    constructor(scene, type, ground) {
        this.scene = scene;
        this.type = type;
        this.ground = ground;
        // Difficulty progression: health scales with castles destroyed
        const difficultyMultiplier = 1 + (scene.state.castles || 0) * 0.1;
        this.health = 100 * type.difficulty * difficultyMultiplier;
        this.maxHealth = this.health;
        this.x = 600;
        this.y = 500;  // Position castle base at ground level
        this.parts = [];
        this.create();
    }

    create() {
        // Draw castle with individual parts that can each have physics
        this.type.drawWithPhysics(this.scene, this.x, this.y, this.parts);
        
        // Set up collision with ground immediately
        const castlePhysicsParts = this.parts.filter(p => p.body);
        if (this.ground && castlePhysicsParts.length > 0) {
            this.scene.physics.add.collider(castlePhysicsParts, this.ground);
            this.scene.physics.add.collider(castlePhysicsParts, castlePhysicsParts);
        }

        // Health bar (positioned above the castle)
        this.hpBg = this.scene.add.graphics();
        this.hpBg.fillStyle(0x000000, 0.5);
        this.hpBg.fillRoundedRect(this.x - 50, this.y - 200, 100, 10, 5);
        this.hpBar = this.scene.add.graphics();
        this.hpBar.fillStyle(0x00FF00);
        this.hpBar.fillRoundedRect(this.x - 50, this.y - 200, 100, 10, 5);
    }

    takeDamage(dmg) {
        this.health -= dmg;
        const p = (this.health / this.maxHealth) * 100;
        this.hpBar.clear();
        this.hpBar.fillStyle(p < 30 ? 0xFF0000 : p < 60 ? 0xFFA500 : 0x00FF00);
        this.hpBar.fillRoundedRect(this.x - 50, this.y - 200, p, 10, 5);

        this.parts.forEach(p => {
            this.scene.tweens.add({targets:p, x:p.x+Phaser.Math.Between(-3,3), y:p.y+Phaser.Math.Between(-3,3), duration:50, yoyo:true});
        });

        if (this.health <= 0) this.destroy();
    }

    destroy() {
        const main = this.scene.scene.getScene('MainScene');
        if (main) {
            main.state.score += 100 * this.type.difficulty;
            main.state.castles++;
            main.scoreTxt.setText(`Score: ${main.state.score}`);
            main.castleTxt.setText(`Castles: ${main.state.castles}`);
            main.saveGame();
            window.playDestroy && window.playDestroy();
            main.time.delayedCall(1000, () => {
                main.castleIdx = (main.castleIdx + 1) % window.CASTLES.length;
                main.castle.destroy();
                main.castle = new window.Castle(main, window.CASTLES[main.castleIdx]);
            });
        }
        this.parts.forEach(p => p.destroy());
        this.hpBar.destroy();
        this.hpBg.destroy();
    }
}

window.Castle = Castle;
