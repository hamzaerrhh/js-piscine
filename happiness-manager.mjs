import fs from 'node:fs/promises'

const [, , guestDir, outputFile] = process.argv

if (!guestDir || !outputFile) {
  console.log('Usage: node happiness-manager.mjs <guest-folder> <output.json>')
  process.exit(1)
}

let files

try {
  files = await fs.readdir(guestDir)
} catch {
  console.log('error reading dir')
  process.exit(1)
}

if (files.length === 0) {
  console.log('No one is coming.')
  process.exit(0)
}

const drinkCounts = {
  'iced-tea': 0,
  water: 0,
  'sparkling-water': 0,
  soft: 0,
}

const foodCounts = {
  veggie: 0,
  vegan: 0,
  carnivore: 0,
  fish: 0,
  everything: 0,
}

let vipCount = 0

for (const file of files) {
  try {
    const data = await fs.readFile(`${guestDir}/${file}`, 'utf-8')

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

  } catch {
  }
}

if (vipCount === 0) {
  console.log('No one is coming.')
  process.exit(0)
}

const shoppingList = {}


if (drinkCounts['iced-tea'] > 0) {
  shoppingList['iced-tea-bottles'] =
    Math.ceil(drinkCounts['iced-tea'] / 6)
}

if (drinkCounts.water > 0) {
  shoppingList['water-bottles'] =
    Math.ceil(drinkCounts.water / 4)
}

if (drinkCounts.beer > 0) {
  shoppingList['6-packs-beers'] = Math.ceil(drinkCounts.beer / 6)
}

if (drinkCounts['sparkling-water'] > 0) {
  shoppingList['sparkling-water-bottles'] =
    Math.ceil(drinkCounts['sparkling-water'] / 4)
}

if (drinkCounts.soft > 0) {
  shoppingList['soft-bottles'] =
    Math.ceil(drinkCounts.soft / 4)
}



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

let existingData = {}

try {
  const oldData = await fs.readFile(outputFile, 'utf-8')
  existingData = JSON.parse(oldData)
} catch {
}

const finalData = {
  ...existingData,
  ...shoppingList,
}


await fs.writeFile(
  outputFile,
  JSON.stringify(finalData,)
)

