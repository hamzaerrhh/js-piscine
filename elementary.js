 const multiply =(a,b)=>{
       let result=0
       let sign=1

       if((a>0 && b<0) || (a<0 && b>0)){
        sign=-1
       }
       if(a<0){
        a=-a
       }
       if(b<0){
        b=-b
       }

       if(a==0 || b==0){
        return 0
       }

   while(b>0){
     result +=a
    b--
   }
  return  sign==1 ? result: -result

 }

  const divide =(a,b)=>{
    if (a==b) {return 1}
       let result=0
   while(a>0){
     result++
      a-=b
   }
return result-1
 }

const modulo =(a,b)=>{
  const divider= divide(a,b)
  const multy=multiply(divider,b)
   return a-multy
 }
 


 console.log(multiply(34,78)); //2682
  console.log(multiply(123,-22)); //-2706
  console.log(multiply(-22, -123))// 2706

//   console.log(divide(8,3));
//     console.log(modulo(8,3));


 