const cards = [
    // the fool
    "The Fool <br> <img class=card-img src=images/The_Fool.jpg>", 
    "The Fool (reversed) <br> <img class=card-img-r src=images/The_Fool.jpg>", 
    // the magician
    "The Magician <br> <img class=card-img src=images/The_Magician.jpg>",
    "The Magician (reversed) <br> <img class=card-img-r src=images/The_Magician.jpg>", 
    // the high priestess
    "The High Priestess <br> <img class=card-img src=images/The_High_Priestess.jpg>",
    "The High Priestess (reversed) <br> <img class=card-img-r src=images/The_High_Priestess.jpg>",  
    // the empress
    "The Empress <br> <img class=card-img src=images/The_Empress.jpg>", 
    "The Empress (reversed) <br> <img class=card-img-r src=images/The_Empress.jpg>", 
    // the emperor
    "The Emperor <br> <img class=card-img src=images/The_Emperor.jpg>", 
    "The Emperor (reversed) <br> <img class=card-img-r src=images/The_Emperor.jpg>",
    // the hierophant
    "The Hierophant <br> <img class=card-img src=images/The_Hierophant.jpg>", 
    "The Hierophant (reversed) <br> <img class=card-img-r src=images/The_Hierophant.jpg>", 
    // the lovers
    "The Lovers <br> <img class=card-img src=images/The_Lovers.jpg>", 
    "The Lovers (reversed) <br> <img class=card-img-r src=images/The_Lovers.jpg>", 
    // the chariot
    "The Chariot <br> <img class=card-img src=images/The_Chariot.jpg>", 
    "The Chariot (reversed) <br> <img class=card-img-r src=images/The_Chariot.jpg>",
    // strength
    "Strength <br> <img class=card-img src=images/Strength.jpg>", 
    "Strength (reversed) <br> <img class=card-img-r src=images/Strength.jpg>",
    // the hermit
    "The Hermit <br> <img class=card-img src=images/The_Hermit.jpg>", 
    "The Hermit (reversed) <br> <img class=card-img-r src=images/The_Hermit.jpg>", 
    // wheel of fortune
    "Wheel of Fortune <br> <img class=card-img src=images/Wheel_Of_Fortune.jpg>",
    "Wheel of Fortune (reversed) <br> <img class=card-img-r src=images/Wheel_Of_Fortune.jpg>",
    // justice
    "Justice <br> <img class=card-img src=images/Justice.jpg>", 
    "Justice (reversed) <br> <img class=card-img-r src=images/Justice.jpg>", 
    // the hanged man
    "The Hanged Man <br> <img class=card-img src=images/The_Hanged_Man.jpg>", 
    "The Hanged Man (reversed) <br> <img class=card-img-r src=images/The_Hanged_Man.jpg>", 
    // death
    "Death <br> <img class=card-img src=images/Death.jpg>", 
    "Death (reversed) <br> <img class=card-img-r src=images/Death.jpg>", 
    // temperance
    "Temperance <br> <img class=card-img src=images/Temperance.jpg>", 
    "Temperance (reversed) <br> <img class=card-img-r src=images/Temperance.jpg>",
    // the devil
    "The Devil <br> <img class=card-img src=images/The_Devil.jpg>", 
    "The Devil (reversed) <br> <img class=card-img-r src=images/The_Devil.jpg>", 
    // the tower
    "The Tower <br> <img class=card-img src=images/The_Tower.jpg>", 
    "The Tower (reversed) <br> <img class=card-img-r src=images/The_Tower.jpg>", 
    // the star
    "The Star <br> <img class=card-img src=images/The_Star.jpg>", 
    "The Star (reversed) <br> <img class=card-img-r src=images/The_Star.jpg>", 
    // the moon
    "The Moon <br> <img class=card-img src=images/The_Moon.jpg>", 
    "The Moon (reversed) <br> <img class=card-img-r src=images/The_Moon.jpg>", 
    // the sun
    "The Sun <br> <img class=card-img src=images/The_Sun.jpg>", 
    "The Sun (reversed) <br> <img class=card-img-r src=images/The_Sun.jpg>", 
    // judgement
    "Judgement <br> <img class=card-img src=images/Judgement.jpg>", 
    "Judgement (reversed) <br> <img class=card-img-r src=images/Judgement.jpg>", 
    // the world
    "The World <br> <img class=card-img src=images/The_World.jpg>",
    "The World (reversed) <br> <img class=card-img-r src=images/The_World.jpg>"
];


function pullOne() {
    const random = Math.floor(Math.random() * cards.length);
    document.getElementById("pulled").innerHTML = cards[random];
}

