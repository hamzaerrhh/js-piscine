 const more =function(arg) {
    n = parseInt(arg)
    n=n+1
    return n
}

const less =function (arg){
    n= parseInt(arg)
    n=n-1
    return n
}

const add = function (arg1,arg2){
    n1= parseInt(arg1)
    n2= parseInt(arg2)
  const  sol=n1+n2
    return sol
}

const sub =function (arg1,arg2){
    n1= parseInt(arg1)
    n2= parseInt(arg2)
    const sol=n1-n2
    return sol
}
console.log(more(5),typeof more(5));
