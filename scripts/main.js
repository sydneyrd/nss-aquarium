import { getFish } from './database.js'
import { FishList } from './fish.js'
import { locationHtml } from './locations.js'
const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}








const mainContainer = document.querySelector(".main")


const applicationHTML = `
<aside class='care'>
<h2 class='care__Header'>caring for your fish family</h2>
<div>  <p class='care__text'>Fishes treat you better than your friends do, and you should treat them with the same love and kindess.  
    Here are some tips to help keep your finned friends happy and healthy.  It is essential that you keep the water in your fish tank within the appropriate pH levels for your fish. 
    If the water becomes too alkaline or too acidic it could be fatal to your fish. Before you go about balancing your fish tank, research the ideal pH level for your fish’s species as each breed has different environmental requirements.</p> </div>
</aside>

<section class="main__Content">
<section class='fish__List'> ${FishList()} </section>


<section class="locations"> ${locationHtml()}
</section>
`
mainContainer.innerHTML = applicationHTML


