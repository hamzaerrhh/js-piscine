const arg =process.argv[2]
if(arg===undefined){
    process.exit
}
let words=arg.split(" ")
let allWords=[]
for (let w of words){
        let mid = Math.ceil(w.length / 2)
allWords.push(w.slice(mid),w.slice(0,mid))
allWords.push(" ")
}
allWords=allWords.slice(0,-1)
console.log(allWords.join(''))

