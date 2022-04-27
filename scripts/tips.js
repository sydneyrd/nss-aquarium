import { getTips } from "./database.js"
const allTips = getTips()

export const randomTip = () => {
    let randomNumber = Math.floor(Math.random() * 7 + 1);
    let tipString = ``
    for (const tip of allTips) {
        if (tip.id === randomNumber) {
             tipString = `<p class='care__text'>${tip.fishtip}</p>`

        }
    }
    
      return tipString
}
   
    