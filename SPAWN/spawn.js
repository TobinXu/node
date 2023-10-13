// const cp = require('child_process');

// const netstat = cp.spawn('netstat', ['-an']);
// const echo = cp.spawn('cmd', ['echo']);

// netstat.stdout.pipe(echo.stdin);
// echo.stdout.pipe(process.stdout);

// var nums = [0,1,0,3,12];

// const moveZeros = (nums) => {
//   const arr = []
//   let index = 0;
//   for (let num in nums) {
//     if (nums[num] !== 0) {
//       arr.push(nums[num])
//       index++;
//     }
//   }
//   while(index < nums.length) {
//     arr[index++] = 0
//   }
//   return arr
// }

// console.log(moveZeros(nums));

const matrixReshape = (arr, r, c) => {
  let m = arr.length, n = arr[0].length;
  if ( m * n !== r * c) {
    return arr;
  }
  const res = [];
  const tmpRes = [];
  for (let tmpArr of arr) {
    tmpRes.push(...tmpArr);
  }
  for (let i = 0; i < r; i++) {
    res.push(tmpRes.splice(0, c))
  }
  return res
}

let nums =
[[1,2],
 [3,4]],
r = 1, c = 4;
console.log(
  matrixReshape(nums,r,c));