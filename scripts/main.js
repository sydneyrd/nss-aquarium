import { getFish } from './database.js'
import { FishList } from './fish.js'
import { locationHtml } from './locations.js'
import { randomTip } from './tips.js'
import { FishListSoldier } from './fish.js'
import { FishListRegular } from './fish.js'






const mainContainer = document.querySelector(".main")


const applicationHTML = `
<aside class='care'>
<h2 class='care__Header'>love them fish right</h2>
<div>  ${randomTip()} </div>
</aside>

<section class="main__Content">
<section class='fish__List'> 
<section class="fish card"> ${FishList()} <p>${FishListSoldier()}</p> <p>${FishListRegular()} </p> </section> </section>


<section class="locations"> <div><q class="fish__quote">“There is, one knows not what sweet mystery about this sea, whose gently awful stirrings seem to speak of some hidden soul beneath...”</q>
</div> <h2 class='location__header'>Locations</h2> ${locationHtml()}
</section>
`
mainContainer.innerHTML = applicationHTML