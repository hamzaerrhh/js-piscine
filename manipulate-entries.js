const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}

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
