export function soma(...nums) {
  return nums.reduce((soma, next) => soma + next);
}