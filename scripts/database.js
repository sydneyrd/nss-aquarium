/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3,
            location: "Costa Rica",
            species: "Yellow Bellied Shrimp",
            image: "https://tinyurl.com/3ab32j2p",
            length: "2 cm",
        },
        {
            name: "Eric",
            food: "Vegan Pizza",
            size: 22,
            location: "North Pole",
            species: "Ankle Biting Pikefish",
            image: "https://tinyurl.com/bdex6bsm",
            length: "28 ft",
        },
        {
            name: "Martha",
            food: "Weaker Fish",
            size: 4,
            location: "The creek behind Randy's house",
            species: "Salty Chat Trollfish",
            image: "https://tinyurl.com/yrkdzjwe",
            length: "10 inches",
        },
        {
            name: "Rodrigo",
            food: "Regular fish flakes, he's not too picky",
            size: 5,
            location: "Salt Lake City",
            species: "Latter Day Fish",
            image: "https://tinyurl.com/2ntw98cu",
            length: "3 feet",
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}