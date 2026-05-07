export const build = (n) => {
    console.log(n)
  let count = 1;

  const interval = setInterval(() => {

    if (count > n) {
      clearInterval(interval);
      return;
    }
    console.log("kk")
    const brick = document.createElement('div');

    brick.id = `brick-${count}`;

    if ((count - 1) % 3 === 1) {
      brick.setAttribute("foundation",true) 
    }

    document.body.appendChild(brick);

    count++;
  },100);
};

export const repair=(...ids)=>{
    console.log("attributes")
    for(let id of ids){

   let brick = document.getElementById(id)
   
   if (brick.hasAttribute("foundation")){
brick.setAttribute("repaired","in progress")
   }else{
    brick.setAttribute("repaired","true")
   }
   
    }


}
export const destroy=()=>{
const bricks=document.querySelectorAll('div')
  if (bricks.length > 0) {
    bricks[bricks.length - 1].remove();
  }
}