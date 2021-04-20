const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const generate = async (value, caseSensitive = true, debug = false) => {
  return new Promise((res, rej) => {
    const charSet = caseSensitive ? chars + chars.toLowerCase() : chars;

    // let i = 0;
    let word = [];

    for (j of charSet) {
      for (x in value) {
        word[x] = j;
        if (debug) console.log(word.join(''));
        if (word.join('') === value) res(word.join(''));
      }
    }

    // for (j in charSet) {
    //   for (x in value) {
    //     for (char of charSet) {
    //       word[x] = charSet[i];

    //       i++;
    //     }
    //     word[x] = charSet[j];
    //     i = 0;
    //   }
    // }
  });
};

generate('ow', true, true).then((a) => console.log(a));
