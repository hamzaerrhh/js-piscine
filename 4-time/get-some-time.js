sole.log(new Date("1235-05-20").getUTCDate())

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