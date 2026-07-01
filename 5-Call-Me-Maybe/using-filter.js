const filterShortStateName=(arr)=>{

return arr.filter((str)=> str.length<7)
}
const filterStartVowel=(arr)=> {
    const regex = /^[aeuoi]\.*/i
    return arr.filter((w)=> regex.test(w))
} 
const filter5Vowels=(arr)=>{
            const regex = /[aeiou]/gi


    return arr.filter((w)=> {
        const matchs= w.match(regex)
        return matchs && matchs.length >=5
       })
}


function filter1DistinctVowel(arr) {
  return arr.filter(str => {
    const matches = str.toLowerCase().match(/[aeiou]/g);
    if (!matches) return false;

    const uniqueVowels = new Set(matches);
    return uniqueVowels.size === 1;
  });
}

const multiFilter=(objs)=>{
   return  objs.filter((obj)=>{
      if (obj.capital.length<8) return false

      if (/^[aeuio]/i.test(obj.name)) return false

      if(!/[aeuio]/i.test(obj.tag)) return false

      if(obj.region==="South") return false
return true
    })

}


