const indexOf=(arr,value)=>{
    for (let i=0;i<arr.length;i++){
        if(value==arr[i]){
            return i
        }
    }
return -1

}
const lastIndexOf=(arr,value)=>{

    for (let i=arr.length -1;i>0;i--){
        if(value==arr[i]){
            return i
        }
    }
return -1
}
const includes=(arr,value)=>{
        for (let i=0;i<arr.length;i++){
        if(value==arr[i]){
            return true
        }
    }
return false


// }

// const arr = ['1',8,9,4,3,2,51]
// console.log(indexOf(arr,4));

// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// console.log(lastIndexOf(animals,"Dodo"));
// //inclused
// const pets = ["cat", "dog", "bat"];

// console.log(includes(pets,"cat"));
// // Expected output: true

// console.log(includes(pets,"at"));