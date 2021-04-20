const chars = 'abcdefghijklmnopqrstuvwxyz';

const generate = (input = '', caseSensitive = false) => {
  let generated = [];
  let j = 0;
  const charSet = caseSensitive ? chars + chars.toUpperCase() : chars;

  for (let char in input) {
    generated[char] = charSet[0];
  }

  (function () {
    console.log('a');
  });

  for (let i = 0; i < charSet.length + 1; i++) {
    if (i >= charSet.length) {
      if (j <= input.length - 2) j++;
      i = 0;
    }
    generated[j] = charSet[i];
    console.log(generated);
  }
};

generate('hola', false);
