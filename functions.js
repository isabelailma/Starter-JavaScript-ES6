export function soma(...nums) {
  return nums.reduce((soma, next) => soma + next);
}

export function subtracao(a, b) {
  return a - b;
}

export function multiplicacao(...nums) {
  return nums.reduce((multiplicacao, next) => multiplicacao * next);
}