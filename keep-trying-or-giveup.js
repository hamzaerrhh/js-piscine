
const retry=(count,callback)=>{
    return  async (...args)=>{
            let countRetry=0

while(countRetry<=count){
    try{
         return   await callback(...args)

    }catch(err){
        if(countRetry==count){
            throw err
        }
                countRetry++
    }
}
    }
}
const timeout = (delay, callback) => {
  return async (...args) => {
    return Promise.race([
      callback(...args),
      new Promise((_, reject) =>
        setTimeout(() => {
          reject(new Error("timeout"));
        }, delay)
      ),
    ]);
  };
};