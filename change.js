const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

function get(key){
return sourceObject[key]
}
function set(key,value){
 return   sourceObject[key] = value
}

//  console.log(get("str"));
//   console.log(get("c"));
   console.log(set("num",55));



console.log(sourceObject);
