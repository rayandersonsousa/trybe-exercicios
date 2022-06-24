function menorValor(nums) {
  let iMenor = 0;
  for (let i in nums){
    if (nums[iMenor] > nums[i]) {
      iMenor = i;
    }
  }
  return iMenor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))