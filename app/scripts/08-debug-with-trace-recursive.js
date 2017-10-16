function deepClone(obj) {
  console.trace('deepClone', obj);
  const clone = {};

  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  });

  return clone;
}

function main() {
  deepClone({
    user: {
      name: 'wangshijun',
      gender: 'male',
      birth: {
        year: 1987,
        month: 10,
      },
    },
  });
}

main();
