const co = [
  '\x1b[30m',
  '\x1b[30m',
  '\x1b[31m',
  '\x1b[32m',
  '\x1b[33m',
  '\x1b[34m',
  '\x1b[35m',
  '\x1b[36m',
  '\x1b[37m',
  '\x1b[0m',
];

const generateColor = () => co[Math.floor(Math.random() * co.length)];
let i = 0;
let d = false;
setInterval(() => {
  console.log(generateColor(), 'Hola'.repeat(i));
  if (!d && i <= 15) i++;
  if (i == 15) d = true;
  if (d && i >= 1) i--;
  if (i == 0) d = false;
}, 50);
