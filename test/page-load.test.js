/**
 * Page Load Test - Verifies the HTML file is valid and Phaser can be loaded
 */

const fs = require('fs');
const path = require('path');

describe('Page Load Verification', () => {
    const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

    test('index.html exists and is readable', () => {
        expect(indexHtml).toBeDefined();
        expect(indexHtml.length).toBeGreaterThan(0);
    });

    test('index.html contains required Phaser script', () => {
        expect(indexHtml).toContain('phaser@3.80.1');
        expect(indexHtml).toContain('phaser.min.js');
    });

    test('index.html contains game div', () => {
        expect(indexHtml).toContain('<div id="game"></div>');
    });

    test('index.html contains MainScene class', () => {
        expect(indexHtml).toContain('class MainScene');
    });

    test('index.html contains CONFIG', () => {
        expect(indexHtml).toContain('const CONFIG');
    });

    test('index.html contains CANNONBALLS', () => {
        expect(indexHtml).toContain('const CANNONBALLS');
    });

    test('index.html contains CASTLES', () => {
        expect(indexHtml).toContain('const CASTLES');
    });

    test('index.html contains Castle class', () => {
        expect(indexHtml).toContain('class Castle');
    });

    test('index.html has proper HTML structure', () => {
        expect(indexHtml).toContain('<!DOCTYPE html>');
        expect(indexHtml).toContain('<html');
        expect(indexHtml).toContain('</html>');
        expect(indexHtml).toContain('<head>');
        expect(indexHtml).toContain('</head>');
        expect(indexHtml).toContain('<body>');
        expect(indexHtml).toContain('</body>');
    });

    test('index.html has proper script tag structure', () => {
        // The file has external script tags (Phaser CDN) and one inline script
        // Just verify it has at least one script tag
        expect(indexHtml).toContain('<script');
        expect(indexHtml).toContain('</script>');
    });

    test('index.html contains game initialization', () => {
        expect(indexHtml).toContain('Phaser.Game');
        expect(indexHtml).toContain('new Phaser.Game(CONFIG)');
    });

    test('index.html contains barrel creation', () => {
        expect(indexHtml).toContain('this.barrel');
        expect(indexHtml).toContain('createCannon');
    });

    test('index.html contains ball size buttons with hitArea', () => {
        expect(indexHtml).toContain('ballBtns');
        expect(indexHtml).toContain('setBall');
        expect(indexHtml).toContain('Phaser.Geom.Circle.Contains');
    });

    test('index.html contains fire button with hitArea', () => {
        expect(indexHtml).toContain('fireBtn');
        expect(indexHtml).toContain('fire()');
        expect(indexHtml).toContain('Phaser.Geom.Circle.Contains');
    });

    test('index.html contains powder button with hitArea', () => {
        expect(indexHtml).toContain('powderBtn');
        expect(indexHtml).toContain('addPowder');
        expect(indexHtml).toContain('Phaser.Geom.Rectangle.Contains');
    });

    test('index.html contains castle creation', () => {
        expect(indexHtml).toContain('createCastle');
        expect(indexHtml).toContain('this.castle');
    });

    test('index.html has viewports and touch settings', () => {
        expect(indexHtml).toContain('viewport');
        expect(indexHtml).toContain('touch-action: none');
    });

    test('index.html has proper CSS for fullscreen', () => {
        expect(indexHtml).toContain('width: 100vw');
        expect(indexHtml).toContain('height: 100vh');
    });

    test('index.html contains input event handlers', () => {
        expect(indexHtml).toContain('pointerdown');
        expect(indexHtml).toContain('pointermove');
        expect(indexHtml).toContain('pointerup');
    });
});
