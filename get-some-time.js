// function firstDayWeek(week, year) {
//   year = Number(year);

//   let date = new Date(year, 0, 1);

//   // 1. Find Monday of the week containing Jan 1
//   let day = date.getDay();
//   if (day === 0) day = 7; // Sunday → 7

//   let monday = new Date(date);
//   monday.setDate(date.getDate() - (day - 1));

//   // 2. If Monday is in previous year → use Jan 1
//   if (monday.getFullYear() < year) {
//     monday = new Date(year, 0, 1);
//   }

//   // 3. Add weeks
//   monday.setDate(monday.getDate() + (week - 1) * 7);

//   // 4. Format
//   let dd = String(monday.getDate()).padStart(2, '0');
//   let mm = String(monday.getMonth() + 1).padStart(2, '0');
//   let yyyy = String(monday.getFullYear()).padStart(4, '0');

//   return `${dd}-${mm}-${yyyy}`;
// }
// console.log(firstDayWeek(43, '1983'))
// // console.log(new Date("1235-05-20").getUTCDate())

function firstDayWeek(week,year){
  let form=year+"-01-01"
  
  let date=new Date(form)
  let days=date.getDay()
  if (days==0){
    days+=7
  }

  date.setDate('01' - (days - 1) + (week - 1) * 7);

  let yyy=date.getFullYear()+''
  let mm=date.getMonth()+1+''
  let dd=date.getDate()+''

  if (date.getFullYear()<year){
     return "01-01-"+year
  }

  return dd.padStart(2,'0')+'-'+mm.padStart(2,'0')+'-'+yyy.padStart(4,'0')
}