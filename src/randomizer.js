export function randomAlphaNumeric(length) {
  let s = '';
  Array.from({ length }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= length;
  });
  return s.slice(0, length);
}

export function randomDiceValue() {
  return Math.floor(Math.random() * 10) % 6 + 1
}