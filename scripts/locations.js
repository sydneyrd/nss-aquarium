import { getLocations } from "./database.js";


export const locationHtml = () => {
    const allLocations = getLocations()
    let htmlLocations = ``
    for (const location of allLocations) {
     htmlLocations += `<div><img class="location__picture" src="${location.locationURL}"></div>
<div class="location__text">${location.flavorText}</div>`
    }
return htmlLocations
}

