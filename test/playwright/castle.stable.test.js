/**
 * Test to verify castle does not fall on game start
 */

const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Castle Stability Test', () => {
    test.beforeEach(async ({ page }) => {
        const filePath = path.join(__dirname, '../../index.html');
        await page.goto(`file://${filePath}`);
        
        await page.waitForFunction(() => {
            return typeof Phaser !== 'undefined' && 
                   document.querySelector('#game canvas') !== null;
        }, { timeout: 10000 });
        
        await page.waitForTimeout(2000);
    });

    test('Castle parts do not fall - positions stay near ground', async ({ page }) => {
        // Wait for castle to potentially fall
        await page.waitForTimeout(3000);
        
        // Check castle part positions via evaluate
        const castleStable = await page.evaluate(() => {
            // Access the game through the global reference
            const game = window.cannonGame;
            if (!game) return false;
            
            const scene = game.scene.getScene('MainScene');
            if (!scene || !scene.castle) return false;
            
            // Check that parts with bodies are not falling off screen
            const parts = scene.castle.parts;
            for (const part of parts) {
                if (part.body && part.body.position) {
                    // If any part has fallen below y=600, it's off screen
                    if (part.body.position.y > 600) {
                        console.error('Castle part at y=' + part.body.position.y + ' fell off screen');
                        return false;
                    }
                }
            }
            return true;
        });
        
        expect(castleStable).toBe(true);
    });

    test('Castle parts with bodies stay above y=600', async ({ page }) => {
        await page.waitForTimeout(3000);
        
        const allAboveScreen = await page.evaluate(() => {
            const game = window.cannonGame;
            if (!game) return false;
            
            const scene = game.scene.getScene('MainScene');
            if (!scene || !scene.castle) return false;
            
            for (const part of scene.castle.parts) {
                if (part.body && part.body.position) {
                    // Castle should be around y=400-500, not falling below 600
                    if (part.body.position.y > 600) {
                        console.error('Castle part fell off screen:', part.body.position.y);
                        return false;
                    }
                }
            }
            return true;
        });
        
        expect(allAboveScreen).toBe(true);
    });
});
