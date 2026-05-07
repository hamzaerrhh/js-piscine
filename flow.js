const flow=(arrF)=>{

return (...args)=>{

   let res=arrF[0](...args)
   

   for( let i=1;i<arrF.length;i++){
        res=arrF[i](res)
    }

     return res
    }
}

