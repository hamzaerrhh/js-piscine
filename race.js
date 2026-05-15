
const race=(arr)=>{

    return new Promise((resolve,reject)=>{
   for (let p = 0; p < arr.length; p++) {
      arr[p]
         .then(resolve)
          .catch(reject)
   }})
}
const some = (arr, count = 0) => {
    if (arr.length === 0 || count === 0) {
        return []
    }

    return new Promise((resolve, reject) => {
        let solved = 0;
        let results = [];

        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i])
                .then((value) => {
                    results.push(value);
                    solved++;

                    if (solved === count) {
                        resolve(results);
                    }
                })
                .catch(reject);
        }
        return []
    });
};

