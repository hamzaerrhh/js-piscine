// const is ={}
is.num= function(n){
    return typeof n == "number"
}
is.nan= function(n){
    return typeof n != "number"
}

is.str= function(str){
    return typeof str == "string"
}
is.bool= function(str){
    return typeof str == "boolean"
}
is.undef = function(undef){
    return typeof undef=="undefined"
}

is.def = function(undef){
    return typeof undef!="undefined"
}
is.arr= function(arr){
    return Array.isArray(arr)

}
is.obj = function(obj){
    return typeof obj == "object"
}

const testFunc =function(){
    return 1
}

is.fun= function(f){
        return typeof f == "function"

}
is.truthy= function(valuse){
    return !!valuse
}
is.falsy= function(valuse){
    return !valuse
}
