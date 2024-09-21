import groceriesList from "./9-groceries_list";

export default function updateUniqueItems() {
  const map = groceriesList();
  for (const [key, value] of map) {
    if (value === 1) {
        map.set(key, 100);
    }
  }
  return map;
}