
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

        arr.forEach((elem, index) => {
            Promise.resolve(elem)
                .then((val) => {
                    solved++;

                    results.push({
                        value: val,
                        index: index
                    });

                    if (solved === count) {
                        resolve(
                            results
                                .sort((a, b) => a.index - b.index)
                                .map(e => e.value)
                        );
                    }
                })
                .catch(reject);
        });
    });
};
