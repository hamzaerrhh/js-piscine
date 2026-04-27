function sign(n){
    if (n==0){
        return 0
    }

    return n > 0  ? 1 : -1
}

function sameSign(n1,n2){
    return sign(n1)==sign(n2)
}
// console.log(sign(0),sign(10),sign(-6));

// console.log(sameSign(4,0));
// console.log(sameSign(4,7));
// console.log(sameSign(4,-6));
