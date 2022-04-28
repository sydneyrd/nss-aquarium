import { getFish } from "./database.js"


/*export const mostHolyFish = () => {
    const holyFish = []
    const soldierFishList = []
    const regularFish = []
    const allFishes = getFish()
for (const fish of allFishes) {
        if (fish.size % 3 === 0) {
        holyFish.push(fish)
    }  else if (fish.size % 5 === 0) {
        soldierFishList.push(fish)
    }  else {
        regularFish.push(fish)
    }
}
return holyFish, soldierFishList, regularFish
}*/

/*mostHolyFish();
export const getHolyFish = () => {
    return holyFish.map(holyFish => ({...holyFish}))
}
export const getSoldierFish = () => {
    return soldierFishList.map(soldierFishList => ({...soldierFishList}))
}
export const getRegularFish = () => {
    return regularFish.map(regularFish => ({...regularFish}))
}*/

export const mostHolyFish = () => {
    const allFishes = getFish()
    const holyFish = []

    for (const fish of allFishes) 
    { if (fish.length % 3 === 0)
        holyFish.push(fish)
    }
return holyFish
}

export const soldierFish = () => {
    const allFishes = getFish()
    const soldiers = []
    for (const fish of allFishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)

        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const allFishes = getFish()
    const regularFish = []
    for (const fish of allFishes) {
        if (fish.length % 5 !== 0 || fish.size % 3 !== 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}