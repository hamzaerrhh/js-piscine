const fusion = (...objs) => {
  let fusionObject = {};

  for (let obj of objs) {

    for (let key of Object.keys(obj)) {

      if (fusionObject[key] !== undefined) {
        if (
          typeof fusionObject[key] === "number" &&
          typeof obj[key] === "number"
        ) {
          fusionObject[key] += obj[key];
        } else  if (
          Array.isArray(fusionObject[key]) &&
          Array.isArray(obj[key])
        ) {

          fusionObject[key] = [
            ...fusionObject[key],
            ...obj[key]
          ].flat();

        }else if (
          typeof fusionObject[key] === "string" &&
          typeof obj[key] === "string"
        ) {

          fusionObject[key] += " " + obj[key];

        }else if (
          typeof fusionObject[key] === "object" &&
          typeof obj[key] === "object"
        ) {
          fusionObject[key] = fusion(
            fusionObject[key],
            obj[key]
          );

        }else {

          fusionObject[key] = obj[key];

        }

      } else {

        fusionObject[key] = obj[key];

      }
    }
  }

  return fusionObject;
};


console.log(fusion({ a: { b: 1 } }, { a: 1 }).a, 1)
