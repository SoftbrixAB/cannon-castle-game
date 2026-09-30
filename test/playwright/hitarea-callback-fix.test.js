/**
 * Playwright test - Specifically verifies the hitAreaCallback error is fixed
 */

const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('hitAreaCallback Error Fix Verification', () => {
    test('No hitAreaCallback TypeError on page load', async ({ page }) => {
        const filePath = path.join(__dirname, '../../index.html');
        await page.goto(`file://${filePath}`);
        
        // Wait for Phaser to load and game to initialize
        await page.waitForFunction(() => {
            return typeof Phaser !== 'undefined' && 
                   document.querySelector('#game canvas') !== null;
        }, { timeout: 10000 });
        
        // Wait a bit more for the game to fully initialize
        await page.waitForTimeout(3000);
        
        // Check for hitAreaCallback errors specifically
        const hasHitAreaCallbackError = await page.evaluate(() => {
            const errors = window.errors || [];
            return errors.some(e => 
                typeof e === 'string' && e.toLowerCase().includes('hitaracallback')
            );
        });
        
        expect(hasHitAreaCallbackError).toBe(false);
    });

    test('No hitAreaCallback error in console', async ({ page }) => {
        const consoleErrors = [];
        
        // Set up console error listener
        page.on('console', msg => {
            if (msg.type() === 'error') {
                consoleErrors.push(msg.text());
            }
        });
        
        const filePath = path.join(__dirname, '../../index.html');
        await page.goto(`file://${filePath}`);
        
        await page.waitForFunction(() => {
            return typeof Phaser !== 'undefined' && 
                   document.querySelector('#game canvas') !== null;
        }, { timeout: 10000 });
        
        await page.waitForTimeout(3000);
        
        // Check for hitAreaCallback errors in console
        const hasError = consoleErrors.some(e => 
            e && e.toLowerCase().includes('hitaracallback')
        );
        
        expect(hasError).toBe(false);
    });

    test('setInteractive does not use hitAreaCallback object syntax', async ({ page }) => {
        const filePath = path.join(__dirname, '../../index.html');
        const content = require('fs').readFileSync(filePath, 'utf8');
        
        // Verify that there are NO hitAreaCallback references in the code
        expect(content).not.toContain('hitAreaCallback');
    });

    test('setInteractive uses input.hitArea for custom shapes', async ({ page }) => {
        const filePath = path.join(__dirname, '../../index.html');
        const content = require('fs').readFileSync(filePath, 'utf8');
        
        // Verify that setInteractive is called and hitArea is set separately
        expect(content).toContain('setInteractive()');
        expect(content).toContain('input.hitArea = new Phaser.Geom.Circle');
        expect(content).toContain('input.hitArea = new Phaser.Geom.Rectangle');
    });
});
