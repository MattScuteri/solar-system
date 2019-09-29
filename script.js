const canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext('2d');

const sun = new Planet(innerWidth / 2, innerHeight / 2, 700);
const mercury = new Planet(innerWidth / 2, innerHeight - .57, 10);
const venus = new Planet(innerWidth / 2, innerHeight - 108, 60);
const earth = new Planet(innerWidth / 2, innerHeight - 150, 60);
const mars = new Planet(innerWidth / 2, innerHeight - 206, 30);

sun.draw();
mercury.draw();
venus.draw();
earth.draw();
mars.draw();