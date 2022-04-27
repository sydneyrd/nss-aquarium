import { getFish } from "./database.js"


export const mostHolyFish = () => {
    const holyFish = []
    const allFishes = getFish()
for (const fish of allFishes) {
        if (fish.size % 3 === 0) {
        holyFish.push(fish)
    }    
}
return holyFish 
}


export const soldierFish = () => {
   const soldierFishList = []
   const allFishes = getFish()
   for (const fish of allFishes) {
       if (fish.size % 5 === 0) {
       soldierFishList.push(fish)
    }
   }
    return soldierFishList
}

export const nonHolyFish = () => {
    const regularFish = []
    const allFishes = getFish()
    for (const fish of allFishes) {
        if (fish.size % 2 !== 0 || fish.size % 5 !== 0) {
            regularFish.push(fish)
        }

    }
    return regularFish
}

