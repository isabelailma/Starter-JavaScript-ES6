export default function soma(...nums) {
  return nums.reduce((soma, next) => soma + next);
}

export function subtracao(a, b) {
  return a - b;
}