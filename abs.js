function isPositive(n){
    n = parseFloat(n)
    return n>0 ? true :false
   
}

function abs(n){
    n = parseFloat(n)

return n >= 0 ? n : -n;

}
console.log(abs(0),isPositive(0));
