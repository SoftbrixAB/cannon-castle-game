// Castle Utility Functions - Shared code for castle creation

/**
 * Creates a tower part with physics
 * @param {Phaser.Scene} scene - The Phaser scene
 * @param {number} x - X position
 * @param {number} y - Y position  
 * @param {number} width - Tower width
 * @param {number} height - Tower height
 * @param {number} color - Fill color
 * @param {number} detailColor - Detail/outline color
 * @param {number} mass - Physics mass
 * @param {Array} partsArray - Array to push the part to
 * @returns {Phaser.GameObjects.Graphics} The created tower
 */
function createTower(scene, x, y, width, height, color, detailColor, mass, partsArray) {
    const tower = scene.add.graphics();
    tower.fillStyle(color, 1);
    tower.fillRect(0, 0, width, height);
    tower.lineStyle(2, detailColor);
    tower.strokeRect(0, 0, width, height);
    scene.physics.add.existing(tower);
    tower.body.setSize(width, height);
    tower.body.setOffset(-width/2, -height/2);
    tower.body.setMass(mass);
    tower.body.setAllowGravity(false);
    tower.setPosition(x, y);
    partsArray.push(tower);
    return tower;
}

/**
 * Creates a roof part with physics
 * @param {Phaser.Scene} scene - The Phaser scene
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {number} width - Roof width
 * @param {number} height - Roof height
 * @param {number} color - Fill color
 * @param {number} mass - Physics mass
 * @param {Array} partsArray - Array to push the part to
 * @returns {Phaser.GameObjects.Graphics} The created roof
 */
function createRoof(scene, x, y, width, height, color, mass, partsArray) {
    const roof = scene.add.graphics();
    roof.fillStyle(color, 1);
    roof.fillRect(0, 0, width, height);
    scene.physics.add.existing(roof);
    roof.body.setSize(width, height);
    roof.body.setOffset(-width/2, -height/2);
    roof.body.setMass(mass);
    roof.body.setAllowGravity(false);
    roof.setPosition(x, y);
    partsArray.push(roof);
    return roof;
}

/**
 * Creates a wall part with physics
 * @param {Phaser.Scene} scene - The Phaser scene
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {number} width - Wall width
 * @param {number} height - Wall height
 * @param {number} color - Fill color
 * @param {number} mass - Physics mass
 * @param {Array} partsArray - Array to push the part to
 * @returns {Phaser.GameObjects.Graphics} The created wall
 */
function createWall(scene, x, y, width, height, color, mass, partsArray) {
    const wall = scene.add.graphics();
    wall.fillStyle(color, 1);
    wall.fillRect(0, 0, width, height);
    scene.physics.add.existing(wall);
    wall.body.setSize(width, height);
    wall.body.setOffset(-width/2, -height/2);
    wall.body.setMass(mass);
    wall.body.setAllowGravity(false);
    wall.setPosition(x, y);
    partsArray.push(wall);
    return wall;
}
