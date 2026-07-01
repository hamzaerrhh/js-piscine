function multiply(a, b) {
    let result = 0;
    let negative = false;

    if (a < 0) {
        a = -a;
        negative = !negative;
    }

    if (b < 0) {
        b = -b;
        negative = !negative;
    }
let count =0

    while (count < b) {
        count++
        result += a;

    }
    return negative ? -result : result;
}

function divide(a, b) {
    if (b === 0) {
return 0 
   }

    let negative = false;

    if (a < 0) {
        a = -a;
        negative = !negative;
    }
    if (b < 0) {
        b = -b;
        negative = !negative;
    }

    let quotient = 0;

    while (a >= b) {
        a -= b;
        quotient++;
    }

    return negative ? -quotient : quotient;
}

function modulo(a, b) {
    if (b === 0) {
return 0 
   }

    const q = divide(a, b);
    return a - multiply(q, b);
}

//  console.log(multiply(34,78)); //2652
//   console.log(multiply(123,-22)); //-2706
//   console.log(multiply(-22, -123))// 2706
  //divider
  

//   console.log(divide(8,3));
//     console.log(modulo(8,3));


 