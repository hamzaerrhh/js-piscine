// const sums = (n) => {
//   let result = [];

//   const backTrack = (start, end, curr) => {
//     if (end === 0) {
//       result.push([...curr]);
//       return;
//     }
//     for (let i = start; i <= end; i++) {
//       curr.push(i);
//       backTrack(i, end - i, curr);
//       curr.pop();
//     }
//   };
//   backTrack(1, n, []);
//   result.pop();
//   return result;
// };

