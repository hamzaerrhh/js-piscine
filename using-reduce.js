const adder=(arr,start=0)=>{
return  arr.reduce((res,val)=>res+val,start)
}
const sumOrMul=(arr,start=0)=>{
    return arr.reduce((res,val)=> val%2==0 ?res*val :res+val ,start)

}
const funcExec=(arr,start=0)=>{
    return arr.reduce((res,val)=>val(res),start)
}

