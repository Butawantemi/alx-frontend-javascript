const colors = ['red', 'green', 'blue', 'yellow', 'black'];

const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key} - ${colors[key]}`);
}
