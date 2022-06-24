function maiorValor(nums) {
  let iMaior = 0;
  for (let i in nums){
    if (nums[iMaior] < nums[i]) {
      iMaior = i;
    }
  }
  return iMaior;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]))