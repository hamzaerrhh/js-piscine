
const filterEntries=(obj,callback)=>{
    return Object.fromEntries(
        Object.entries(obj).filter(([key,val])=>callback([key,val]))
    )
}
 
const mapEntries=(obj,callback)=>{
    return Object.fromEntries(
        Object.entries(obj).map(([key,val])=>callback([key,val]))
    )
}
 


   

const reduceEntries = (obj, callback, initialVal) => {
    return Object.entries(obj).reduce(callback, initialVal)
}
 

const totalCalories = (obj) => {
    return parseFloat(reduceEntries(
        obj,
        (total, [item, gram]) =>
            total + (nutritionDB[item].calories*gram)/100,
        0
    ).toFixed(1))
}
const lowCarbs=(obj)=>{
    return filterEntries(obj,([item,gram])=>(nutritionDB[item].carbs*gram)/100 < 50)
}

const cartTotal=(obj)=>{
    const calculate=(value,gram)=>{

        return parseFloat(((gram*value)/100).toFixed(3))
    }
    const calculateItem=(item,gram)=>{

        item.calories=calculate(item.calories,gram)
                item.protein=calculate(item.protein,gram)
        item.carbs=calculate(item.carbs,gram)
        item.sugar=calculate(item.sugar,gram)
        item.fiber=calculate(item.fiber,gram)
        item.fat=calculate(item.fat,gram)

return item
    }

    
    return mapEntries(obj,([item,gram])=>[item,
        calculateItem(nutritionDB[item],gram)
    ])

}
