const colors = ['red', 'green', 'blue', 'yellow', 'black'];
colors[6] = 'white';
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key} - ${colors[key]}`);
}
