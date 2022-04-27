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
            length: 2,
        },
        {
            name: "Eric",
            food: "Vegan Pizza",
            size: 22,
            location: "North Pole",
            species: "Ankle Biting Pikefish",
            image: "https://tinyurl.com/bdex6bsm",
            length: 28,
        },
        {
            name: "Martha",
            food: "Weaker Fish",
            size: 4,
            location: "The creek behind Randy's house",
            species: "Salty Chat Trollfish",
            image: "https://tinyurl.com/yrkdzjwe",
            length: 10,
        },
        {
            name: "Rodrigo",
            food: "Regular fish flakes, he's not too picky",
            size: 5,
            location: "Salt Lake City",
            species: "Latter Day Fish",
            image: "https://tinyurl.com/2ntw98cu",
            length: 3,
        }
    ],
    tips: [
        {
            id: 1,
            fishtip: "Add some gravel to the tank. Some bacteria is beneficial to fish and the gravel gives it somewhere to live. It will also help to break down any waste that your fish creates, as well as adding an attractive look to their surroundings.",
        },
        {
            id: 2,
            fishtip: "Think about where you place your tank. Keep it out of direct sunlight, away from windows and heating. The last thing you want is for the water in the tank to heat up out of your control.",
        },
        {
            id: 3,
            fishtip: "The bigger the tank or aquarium the better. Most fish may be small in size, but they still need plenty of room to swim, especially if you have decided to get more than one.",
        },
        {
            id: 4,
            fishtip: "Using different varieties of plant life will give your fish somewhere to hide and play, helping them to feel safe. Real plants will help to maintain the nutrients in the tank but artificial plants will work just as well for giving your fish somewhere to hide.",
       },
       {
           id: 5,
           fishtip: "Because we can’t determine water quality by looking at it, it is very important to do regular testing. Testing your aquarium water is like checking the body’s vital signs. The results can tell us a lot about imbalances, therefore allowing us to detect and prevent looming problems.",
       },
       {
           id: 6,
           fishtip: "It is essential that you keep the water in your fish tank within the appropriate pH levels for your fish. If the water becomes too alkaline or too acidic it could be fatal to your fish. Before you go about balancing your fish tank, research the ideal pH level for your fish’s species as each breed has different environmental requirements",
       },
       {
           id: 7,
           fishtip: "Fishes treat you better than your friends do, and you should treat them with the same love and kindess. Here are some tips to help keep your finned friends happy and healthy. ",
       },

    ],
    locations: [
        {
            id: 1,
            locationURL: "https://tinyurl.com/54athrur",
            flavorText: "Oh boy look at this place.",
        },
        {
            id: 2,
            locationURL: "https://tinyurl.com/2yb6cvjj",
            flavorText: "I harvested the hell out of some fish here.",
        },
        {
            id: 3,
            locationURL: "https://tinyurl.com/yc7kturt",
            flavorText: "I hope you didn't notice these are all just Costa Rica",
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}
