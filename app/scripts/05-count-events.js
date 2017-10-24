for (let i = 0; i < 100; i++) {
  const number = Math.random() * 100;
  if (number > 50) {
    console.count('number > 50');
  } else {
    console.count('number < 50');
  }
}
