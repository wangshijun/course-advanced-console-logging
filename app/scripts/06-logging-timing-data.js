const objects = [];

console.time('createObjects');
console.time('create100Objects');
for (let i = 0; i < 10000000; i++) {
  if (i === 100) {
    console.timeEnd('create100Objects');
  }
  objects.push({ i });
}
console.timeEnd('createObjects');
