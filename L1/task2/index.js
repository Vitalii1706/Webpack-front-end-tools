const getParsedIntegers = (arr) => {
  const res = arr.map((el) => Number.parseInt(el));
  return res;
};
const arr = [1, 15.582, 2, '17.17', 'll', 'one', 0, '15.7777O', NaN];

console.log(getParsedIntegers(arr));

const getParsedIntegersV2 = (arr) => {
  const res = arr.map((el) => parseInt(el));
  return res;
};
console.log(getParsedIntegersV2(arr));

const getParsedFloats = (arr) => {
  const res = arr.map((el) => Number.parseFloat(el));
  return res;
};
console.log(getParsedFloats(arr));

const getParsedFloatsV2 = (arr) => {
  const res = arr.map((el) => parseFloat(el));
  return res;
};
console.log(getParsedFloatsV2(arr));
