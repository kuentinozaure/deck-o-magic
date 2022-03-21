
const deck  = 
[
    {
        "title": "Sauce card",
        "song": "La Sauce - Hamza",
        "type": "declaration jail"
    },
    {
        "title": "Disquette card",
        "song": "Erotiquement votre - Krisy",
        "type": "disquette jail"
    },
    {
        "title": "Horny card",
        "song": "J aime bien - Josman",
        "type": "horny jail"
    },
    {
        "title": "Graille card",
        "song": "Des le depart - Kaaris",
        "type": "resto jail"
    },
    {
        "title": "Next station -> Horny card",
        "song": "Lose yourself - Eminem",
        "type": "film jail"
    },
    {
        "title": "Be careful dude",
        "song": "Tempete - PNL",
        "type": "hug jail"
    },
    {
        "title": "Ahah lol xd on s eclate",
        "song": "On verra - Nekfeu",
        "type": "activity jail"
    },
    {
        "title": "Bisouuuu je manvol",
        "song": "Barcelone - Alpha wann",
        "type": "voyage jail"
    },
    {
        "title": "Le banquier a chaud",
        "song": "Parachute Chanel - Alpha Wann",
        "type": "credit card jail"
    },
]

const participants = [
    {
        "name" : "Anna"
    },
    {
        "name" : "Quentin"
    },
    {
        "name" : "Both"
    }
]

const randomNumberCard = Math.floor(Math.random() * deck.length);
const randomNumberParticipant  = Math.floor(Math.random() * participants.length);
console.log('Card : ', deck[randomNumberCard],  '-> ',participants[randomNumberParticipant])