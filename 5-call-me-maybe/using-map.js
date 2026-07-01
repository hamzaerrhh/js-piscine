const citiesOnly=(obj)=>{
    // const sol = new Array()
// if (obj){

//     for(let val of obj){
//         // console.log(val)
//         if (val.city){

// sol.push(val.city)
//         }
//     }

// }
// return sol

return obj.map((x)=> x.city)

}
const UpperFirst=(str)=>{

    return str
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.susing-filter.jslice(1).toLowerCase())
      .join(" ");
}

const upperCasingStates = (arr) => {
  return arr.map((str) =>  UpperFirst(str))

};

const Tofehrinate=(temp)=>{
    temp=temp.slice(0,temp.length-2)
    temp=Math.floor((parseInt(temp)-32)*5/9)
    return temp+"°C"
}


const fahrenheitToCelsius=(arr)=>{

return arr.map((fh)=>{
    
    return Tofehrinate(fh)
})

}
const trimTemp = (arr) => {
  return arr.map((item) => {
    return {
      ...item,
      temperature: item.temperature.replace(/\s/g, "")
    };
  });
};

const tempForecasts=(arr)=>{
   return  arr.map((stats)=>{
    return  `${Tofehrinate(stats.temperature)}elsius in ${UpperFirst(stats.city)}, ${UpperFirst(stats.state)}`



   })

}

const states = [
    {
      city: 'Los Angeles',
      temperature: '101 °F',
      state: 'california',
      region: 'West',
    },
    {
      city: 'San Francisco',
      temperature: '84 °F',
      state: 'california',
      region: 'West',
    },
    {
      city: 'Miami',
      temperature: ' 112 °F',
      state: 'Florida',
      region: 'South',
    },
    {
      city: 'New York City',
      temperature: ' 0 °F',
      state: 'new york',
      region: 'North East',
    },
    { city: 'Juneau', temperature: ' 21° F', state: 'Alaska', region: 'West' },
    {
      city: 'Boston',
      temperature: '45 °F',
      state: 'massachussetts',
      region: 'North East',
    },
    {
      city: 'Jackson',
      temperature: ' 70°F  ',
      state: 'mississippi',
      region: 'South',
    },
    {
      city: 'Utqiagvik',
      temperature: ' -1 °F',
      state: 'Alaska',
      region: 'West',
    },
    {
      city: 'Albuquerque',
      temperature: ' 95 °F',
      state: 'new mexico',
      region: 'West',
    },
  ]

console.log(tempForecasts(states) )


 




// console.log(trimTemp([
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]))
  const temps = ['86°F', '100°F', '41°F', '55°F', '10°F', '70°F', '-2°F']


// console.log(fahrenheitToCelsius(temps)) // -> ['20°C', '15°C', '-4°C'])

console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey'])


// console.log(citiesOnly([
//   {
//     city: 'Los Angeles',
//     temperature: '  101 °F   ',
//   },
//   {
//     city: 'San Francisco',
//     temperature: ' 84 ° F   ',
//   },
// ]) )



// console.log("new".split(" "))