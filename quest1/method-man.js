function words(str){
    return str.split(' ')
}

function sentence(arr){
    return arr.join(' ')
}

function yell(str){
    return str.toUpperCase()
}

function whisper(str){
    const res ="*"+str.toLowerCase()+"*"
    return res   
}
function capitalize(str){
    const res= str[0].toUpperCase()+str.slice(1).toLowerCase()
    return res
}



console.log(words("js java kotlin py rust go ts"));
console.log(sentence(['js', 'java', 'kotlin', 'py', 'rust','go', 'ts']));
console.log(yell("hello words"));
console.log(whisper("HELLO WORDS KI "));
console.log(capitalize("hello words ksjKKL"));
