var findDuplicate = function(nums) {
  let numsObject = {} 
  
  for (i=0; i < nums.length; i++) {
      let result =  nums[i] in numsObject

      if (result === true) {
          return nums[i]
      } else {
          numsObject[nums[i]] = true
      }
  }
};