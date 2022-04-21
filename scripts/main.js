import { getFish } from './database.js'
import { FishList } from './fishList.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


const parentHTMLElement = document.querySelector(".fish__List")


parentHTMLElement.innerHTML = FishList()

