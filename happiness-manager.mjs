import fs from 'node:fs'

const [, , guestDir, outputFile] = process.argv

if (!guestDir || !outputFile) {
  console.log('Usage: node happiness-manager.mjs <guest-folder> <output.json>')
  process.exit(1)
}

fs.readdir(guestDir, (err, files) => {
  if (err) {
    console.log('error reading dir')
    process.exit(1)
  }

  let drinkCounts = {
    'iced-tea': 0,
    water: 0,
    'sparkling-water': 0,
    soft: 0,
  }

 let foodCounts = {
  veggie: 0,
  vegan: 0,
  carnivore: 0,
  fish: 0,
  everything: 0,
}

  let vipCount = 0
  let pendingFiles = files.length

  // empty folder
  if (pendingFiles === 0) {
    console.log('No one is coming.')
    process.exit(0)
  }

  for (const file of files) {
    fs.readFile(`${guestDir}/${file}`, 'utf-8', (err, data) => {
      pendingFiles--

      if (!err) {
        const guest = JSON.parse(data)

        if (guest.answer === 'yes') {
          vipCount++

          if (guest.drink) {
            drinkCounts[guest.drink]++
          }

          if (guest.food) {
            foodCounts[guest.food]++
          }
        }
      }

      // wait until all files are processed
      if (pendingFiles === 0) {
        finish()
      }
    })
  }

  function finish() {
    if (vipCount === 0) {
      console.log('No one is coming.')
      process.exit(0)
    }

    let shoppingList = {}

    // DRINKS

    if (drinkCounts['iced-tea'] > 0) {
      shoppingList['iced-tea-bottles'] = Math.ceil(
        drinkCounts['iced-tea'] / 6
      )
    }

    if (drinkCounts.water > 0) {
      shoppingList['water-bottles'] = Math.ceil(
        drinkCounts.water / 4
      )
    }

    if (drinkCounts['sparkling-water'] > 0) {
      shoppingList['sparkling-water-bottles'] = Math.ceil(
        drinkCounts['sparkling-water'] / 4
      )
    }

    if (drinkCounts.soft > 0) {
      shoppingList['soft-bottles'] = Math.ceil(
        drinkCounts.soft / 4
      )
    }

    // FOOD

    const veggieTotal =
      foodCounts.veggie + foodCounts.vegan

    if (veggieTotal > 0) {
      const packs = Math.ceil(veggieTotal / 3)

      shoppingList.eggplants = packs
      shoppingList.courgettes = packs
shoppingList.mushrooms = veggieTotal  
    shoppingList.hummus = packs
    }

    if (foodCounts.carnivore > 0) {
      shoppingList.burgers = foodCounts.carnivore
    }

    if (foodCounts.fish > 0) {
      shoppingList.sardines = foodCounts.fish
    }

 if (foodCounts.everything > 0) {
  shoppingList.kebabs = foodCounts.everything
}

    shoppingList.potatoes = vipCount

    // check if output file exists
    fs.stat(outputFile, (err) => {
      if (err) {
        // file doesn't exist
        fs.writeFile(
          outputFile,
          JSON.stringify(shoppingList, null, 2),
          () => {}
        )
      } else {
        // file exists
        fs.readFile(outputFile, 'utf-8', (err, oldData) => {
          let existingData = {}

          if (!err) {
            existingData = JSON.parse(oldData)
          }

          // merge manually
          for (const key in shoppingList) {
            existingData[key] = shoppingList[key]
          }

          fs.writeFile(
            outputFile,
            JSON.stringify(existingData, null, 2),
            () => {}
          )
        })
      }
    })
  }
})