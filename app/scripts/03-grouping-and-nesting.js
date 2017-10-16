for (let i = 0; i < 100; i++) {
  const number = Math.random() * 100;
  console.groupCollapsed('picking a random number');
  console.log('number > 10 ?', number > 10);
  console.log('number > 50 ?', number > 50);
  console.groupCollapsed('number');
  console.log({ i, number });
  console.groupEnd();
  console.groupEnd();
}
