const filterKeys=(obj,callBack)=>{
    let sol={}
    for(let [key,val] of Object.entries(obj)){
        if(callBack(key)){
            sol[key]=val
        }
    }
    return sol
}
const mapKeys=(obj,callBack)=>{
    let sol={}
    for(let [key,val] of Object.entries(obj)){
        const newKey = callBack(key);
        sol[newKey] = val;
    }
      return sol
}
const reduceKeys=(obj,calback,acc)=>{
    let keys=[]
    for (let [key,value] of Object.entries(obj)){
        keys.push(key)
    }
    let sol=acc!==undefined ? acc : keys[0]
    let i=acc!==undefined ? 0:1
    for ( ;i<keys.length;i++){
   sol=calback(sol,keys[i])
    }
return sol
    
}
const cart={
    vinegar: 80,
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
    paprika: 4,
  }

