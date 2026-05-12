
const pronouns = [
  'i', 'you', 'he', 'she', 'it', 'they', 'we'
]

export const pronoun = (str) => {
  const words = str.toLowerCase().match(/\b[a-z']+\b/g) || []
let result={}
 for(let i=0;i<words.length;i++){
   let  w=words[i]
  if(!pronouns.includes(w)) continue

if(result[w]===undefined){
    result[w]={word:[],count:0}
}
result[w].count++
let j=i+1
//if there are equal
while(j<words.length && w === words[j]) {
    result[w].count++
    i++
    j++
}

if(j<words.length && !pronouns.includes(words[j]) ){
    result[w].word.push(words[j])
  }

 }
 return result

}



//   console.log(
//     pronoun(`Your reducer function's returned value is assigned to the accumulator,
// whose value is remembered across each iteration throughout the array and
// ultimately becomes the final, single resulting value.`)) //,  {}


//   console.log(
//     pronoun(`it and marking all existing properties as non-configurable. Values of present 
// properties can still be changed as long as they are writable.`))
    // {
    //   it: { word: ['and'], count: 1 },
    //   they: { word: ['are'], count: 1 },
    // }
  



//   console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'))//
  //, {
//     i: { word: ['buy', 'to'], count: 2 },
//     you: { word: ['buy', 'go'], count: 2 },
//     it: { word: ['have', 'buys', 'is'], count: 3 },
//   })



//   console.log(pronoun(`it i it she is gone`))
// //    {
// //     it: { word: [], count: 2 },
// //     i: { word: [], count: 1 },
// //     she: { word: ['is'], count: 1 },
// //   })


//   console.log(pronoun(`'she she she she is'`)) // { she: { word: ['is'], count: 4 } })
// //  {
// //     we: { word: ['will'], count: 1 },
// //     you: { word: [], count: 1 },
// //  }
