/**
 * Playwright test - Tests mouse interactions and verifies no hitAreaCallback errors
 */

const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Mouse Interactions Test', () => {
    test.beforeEach(async ({ page }) => {
        const filePath = path.join(__dirname, '../../index.html');
        await page.goto(`file://${filePath}`);
        
        // Wait for Phaser to load and game to initialize
        await page.waitForFunction(() => {
            return typeof Phaser !== 'undefined' && 
                   document.querySelector('#game canvas') !== null;
        }, { timeout: 10000 });
        
        // Wait a bit more for the game to fully initialize
        await page.waitForTimeout(2000);
    });

    test('No JavaScript errors on page load', async ({ page }) => {
        // Check for any errors in the console
        const errors = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });
        
        await page.waitForTimeout(3000);
        
        // Check that there are no hitAreaCallback errors
        const pageErrors = await page.evaluate(() => {
            // Return any errors that might have been logged
            return window.errors || [];
        });
        
        expect(errors.length).toBe(0);
    });

    test('Powder button can be clicked without errors', async ({ page }) => {
        const canvas = page.locator('#game canvas');
        const box = await canvas.boundingBox();
        
        // Powder button is at (20, 450) in game coordinates
        const clickX = box.x + 30;
        const clickY = box.y + 460;
        
        // Click on powder button
        await page.mouse.click(clickX, clickY);
        await page.waitForTimeout(500);
        
        // Check for any console errors
        const errors = await page.evaluate(() => {
            return window.errors || [];
        });
        
        // Log errors for debugging
        if (errors.length > 0) {
            console.log('Errors found:', errors);
        }
        
        expect(errors.length).toBe(0);
    });

    test('Ball size buttons can be clicked without errors', async ({ page }) => {
        const canvas = page.locator('#game canvas');
        const box = await canvas.boundingBox();
        
        // Ball buttons are at x = 150, 210, 270 (small, medium, large)
        const buttonXs = [150, 210, 270];
        
        for (const btnX of buttonXs) {
            const clickX = box.x + btnX;
            const clickY = box.y + 550;
            
            await page.mouse.click(clickX, clickY);
            await page.waitForTimeout(300);
            
            // Check for errors after each click
            const errors = await page.evaluate(() => {
                return window.errors || [];
            });
            expect(errors.length).toBe(0);
        }
    });

    test('Barrel can be dragged without errors', async ({ page }) => {
        const canvas = page.locator('#game canvas');
        const box = await canvas.boundingBox();
        
        // Add some powder first
        await page.mouse.click(box.x + 30, box.y + 460);
        await page.waitForTimeout(300);
        
        // Drag the barrel
        await page.mouse.move(box.x + 180, box.y + 500);
        await page.mouse.down();
        await page.mouse.move(box.x + 180, box.y + 450, { steps: 10 });
        await page.mouse.up();
        await page.waitForTimeout(500);
        
        // Check for errors
        const errors = await page.evaluate(() => {
            return window.errors || [];
        });
        
        expect(errors.length).toBe(0);
    });

    test('Can fire cannonball without errors', async ({ page }) => {
        const canvas = page.locator('#game canvas');
        const box = await canvas.boundingBox();
        
        // Add powder
        await page.mouse.click(box.x + 30, box.y + 460);
        await page.waitForTimeout(300);
        
        // Fire button appears at the end of the barrel (approximately)
        const fireX = box.x + 212;
        const fireY = box.y + 476;
        
        await page.mouse.click(fireX, fireY);
        
        // Wait for cannonball to be fired
        await page.waitForTimeout(2000);
        
        // Check for errors
        const errors = await page.evaluate(() => {
            return window.errors || [];
        });
        
        expect(errors.length).toBe(0);
    });

    test('Multiple interactions without hitAreaCallback error', async ({ page }) => {
        const canvas = page.locator('#game canvas');
        const box = await canvas.boundingBox();
        
        // Track any console errors
        const consoleErrors = [];
        page.on('console', msg => {
            if (msg.type() === 'error' && msg.text().includes('hitAreaCallback')) {
                consoleErrors.push(msg.text());
            }
        });
        
        // Perform multiple interactions
        for (let i = 0; i < 3; i++) {
            // Add powder
            await page.mouse.click(box.x + 30, box.y + 460);
            await page.waitForTimeout(100);
            
            // Click ball button
            await page.mouse.click(box.x + 210, box.y + 550);
            await page.waitForTimeout(100);
            
            // Fire
            await page.mouse.click(box.x + 212, box.y + 476);
            await page.waitForTimeout(1500);
        }
        
        // Check that there were no hitAreaCallback errors
        expect(consoleErrors.length).toBe(0);
    });

    test('Game state accessible via window.cannonGame', async ({ page }) => {
        const gameAccessible = await page.evaluate(() => {
            return typeof window.cannonGame !== 'undefined' && 
                   window.cannonGame !== null;
        });
        
        expect(gameAccessible).toBe(true);
    });
});
