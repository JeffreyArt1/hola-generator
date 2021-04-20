function a() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('true');
    }, 5000);
  });
}

function b() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej('no');
    }, 5000);
  });
}

function c() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('true');
    }, 5000);
  });
}

function d() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('true');
    }, 5000);
  });
}

Promise.race([a(), b(), c(), d()]).then(console.log).catch(console.log);
