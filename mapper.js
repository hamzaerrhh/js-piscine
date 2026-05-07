const map=(arr,f)=>{
    const sol=[]
    for (let i=0;i<arr.length;i++){
        sol.push(f(arr[i],i,arr))
    }
return sol
}

const flatMap=(arr,f)=>{
return flat(map(arr,f),1)
}

function flat(arr, depth = 1) {
  if (depth < 1) return arr;

  const res = [];

  for (let a of arr) {
    if (Array.isArray(a)) {
      res.push(...flat(a, depth - 1));
    } else {
      res.push(a);
    }
  }
  return res;
}



