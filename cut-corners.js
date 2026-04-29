
const round = (num)=>{
    isNeg=false
    if(num<0){
        isNeg=true
    }

    let sol
      if(isNeg){
        return-getInt(-num+0.5)
      }else{
            return getInt(num+0.5)
    }
}

const floor = (num)=>{
    isNeg=false
    if(num<0){
        isNeg=true
    }
   if(getInt(num)==num){
        return num 
    }
    let sol
      if(isNeg){
        return sol= -getInt(-num+1)
      }else{
            return sol= getInt(num)
    }
}
const trunc = (num)=>{
 
      if(num<0){
        return sol= -getInt(-num)
      }else{
            return sol= getInt(num)
    }
}

const ceil = (num)=>{
    isNeg=false
    if(num<0){
        isNeg=true
    }
    let sol
    if(getInt(num)==num){
        return num 
    }
      if(isNeg){

       return -getInt(-num)
      }else{
           return getInt(num+1)
    }
}

const getInt = (x) => {

    let n = 0;
    let step = 1;


    while (n + step * 10 <= x) {
        
        step *= 10;
    }

console.log("step",step,n);


    while (step >= 1) {
        while (n + step <= x) {
            n += step;
        }
        step /= 10;
    }

    return n;
};

// console.log("int",getInt(315.9))
// const nums = [3.7, -3.7, 3.1, -30.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))
// console.log(getInt(-9.6))