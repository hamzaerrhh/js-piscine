export const  generateLetters=()=> {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i=0;i<120;i++){
    const elem=document.createElement('div')
    elem.textContent=      alphabet[Math.floor(Math.random() * alphabet.length)];
    elem.style.fontSize=`${11+i}px`

    if(i<40){
        elem.style.fontWeight=`300`

    }else if (i>=40 && i<80){
        elem.style.fontWeight=`400`

    }else{
        elem.style.fontWeight=`600`
    }
    document.body.append(elem)
  }
}