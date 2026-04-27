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
    sourceObject[key] = value
}

//  console.log(get("str"));
//   console.log(get("c"));
//    console.log(set("str","lolo"));



// console.log(sourceObject);
