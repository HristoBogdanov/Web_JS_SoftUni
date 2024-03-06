function PrintSumOfDigits(number) {
  let elements = [];
  while (number > 0) {
    elements.push(number % 10);
    number = Math.floor(number / 10);
  }
  const sum = elements.reduce((a, b) => a + b, 0);
  console.log(sum);
}
