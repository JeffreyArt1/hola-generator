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

const AMOUNT = parseInt(process.env.AMOUNT);
const SHOW_STRING = process.env.SHOW_STRING;

const generateColor = () => co[Math.floor(Math.random() * co.length)];
let i = 0;
let d = false;
setInterval(() => {
  console.log(generateColor(), SHOW_STRING.repeat(i));
  if (!d && i <= AMOUNT) i++;
  if (i == AMOUNT) d = true;
  if (d && i >= 1) i--;
  if (i == 0) d = false;
}, 50);
