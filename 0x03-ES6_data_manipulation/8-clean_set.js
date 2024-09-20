export default function cleanSet(set, startString) {
  if (!set || !startString || !(typeof startString === 'string' || !(set instanceof Set))) {
    return '';
  }
  return Array.from(set)
    .filter((str) => str && str.startsWith(startString))
    .map((str) => str.replace(startString, ''))
    .join('-');
}
