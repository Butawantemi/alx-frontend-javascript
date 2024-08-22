
const Tree = Symbol('🌴');
const Flower = Symbol('🌻');
const Leaf = Symbol('🍁');
const Mushroom = Symbol('🍄');

const plantTypes = [Tree, Flower, Leaf, Mushroom];

function createPlant(type) {
  if (!plantTypes.includes(type)) {
    throw new Error('Invalid plant type!');
  }
}