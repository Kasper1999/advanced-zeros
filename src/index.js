module.exports = function getZerosCount(number, base) {
  // your implementation
  let result = 0;
  for(let i = base; number / i >=1; i *= base){
    result += Math.floor(number / i)
  }

return (result);
}