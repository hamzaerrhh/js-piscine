const defaultCurry=obj1=>obj=>{
    let sol={...obj1}
    console.log(sol)
    for(let [key,val]of Object.entries(obj)){
if(obj[key]!=undefined){
sol[key]=val
}
    }
    return sol
}
// console.log(defaultCurry({
//   http: 403,
//   connection: 'close',
//   contentType: 'multipart/form-data',
// })({
//   http: 200,
//   connection: 'open',
//   requestMethod: 'GET'
// }))

const mapCurry=callBack=>obj=>{

    return Object.fromEntries(
        Object.entries(obj).map(callBack)
    ) 
}
const reduceCurry=callBack=>(obj,initialVal)=>{
        if(initialVal===undefined){
             return   Object.entries(obj).reduce(callBack)
    }
    return Object.entries(obj).reduce(callBack,initialVal)
    
}
const filterCurry=callBack=>obj=>{

    return Object.fromEntries(
        Object.entries(obj).filter(callBack)
    ) 
}


const reduceScore =(obj,initval)=> reduceCurry((total, [key, val]) => {
  if (!val.isForceUser) return total;

  return total + val.pilotingScore + val.shootingScore;
})(obj,initval)
const filterForce = (obj)=>filterCurry(([key,val])=>val.isForceUser && val.shootingScore>=80)(obj)
const mapAverage = mapCurry(([key, val]) => {
  return [
    key,
    {
      ...val,
      averageScore: (val.pilotingScore + val.shootingScore) / 2
    }
  ];
});
