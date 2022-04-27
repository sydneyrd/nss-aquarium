import { getFish } from './database.js'
import { FishList } from './fish.js'
import { locationHtml } from './locations.js'
import { randomTip } from './tips.js'







const mainContainer = document.querySelector(".main")


const applicationHTML = `
<aside class='care'>
<h2 class='care__Header'>caring for your fish family</h2>
<div>  ${randomTip()} </div>
</aside>

<section class="main__Content">
<section class='fish__List'> ${FishList()} </section>


<section class="locations"> ${locationHtml()}
</section>
`
mainContainer.innerHTML = applicationHTML