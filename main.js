import kaboom from "kaboom";

// Initialize Kaboom
kaboom();

// Define game constants
const SPEED = 480;

// Load a simple bean sprite
loadBean();

// Create the player character
const player = add([
  sprite("bean"),
  pos(center()),
  anchor("center"),
  area(),
  body(),
]);

// Movement controls
onKeyDown("left", () => player.move(-SPEED, 0));
onKeyDown("right", () => player.move(SPEED, 0));
onKeyDown("up", () => player.move(0, -SPEED));
onKeyDown("down", () => player.move(0, SPEED));

// Add a simple floor
add([
  rect(width(), 48),
  pos(0, height() - 48),
  area(),
  body({ isStatic: true }),
  color(127, 200, 255),
]);
