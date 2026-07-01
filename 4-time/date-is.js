const isValid=(date)=>{
 if (date instanceof Date){
    return !Number.isNaN(date.getTime())
 }
 if(typeof date=="number"){
      return !Number.isNaN(new Date(date).getTime());
 }
 return  false
}

const toDate=(date)=>{

 if (date instanceof Date){
 return date.getTime()
 }
 if(typeof date=="number"){
  return new Date(date).getTime()
 }
}

const isAfter=(date1,date2)=>{

if(!isValid(date1) || !isValid(date2)) return false
return toDate(date1)> toDate(date2)
}

const isBefore=(date1,date2)=>{

if(!isValid(date1) || !isValid(date2)) return false
return toDate(date1) < toDate(date2)


}

const isFuture=(date)=>{

if(!isValid(date)) return false
return toDate(date)>  Date.now()


}

const isPast=(date)=>{
  if(!isValid(date)) return false
  return toDate(date) <   Date.now()
}