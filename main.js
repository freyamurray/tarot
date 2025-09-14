const cards = [
    // the fool
    "The Fool <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Fool.jpg> <p class=hidden id=blurb onclick=revealMeaning()>It is a new beginning filled with opportunity. <br><br> follow your heart and trust in the universe.</p>", 
    // the fool reversed
    "The Fool (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Fool.jpg> <p class=hidden id=blurb onclick=revealMeaning()>make sure you have thought things through before jumping into action. <br><br> play your cards close to your chest.</p>", 
    // the magician
    "The Magician <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Magician.jpg> <p class=hidden id=blurb onclick=revealMeaning()>you have everything you need to move forward. <br><br> focus your attention and watch it all fall into place. </p>",
    // the magician reversed
    "The Magician (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Magician.jpg> <p class=hidden id=blurb onclick=revealMeaning()>do not lose sight of why you are doing this. <br><br> work out what you need to do to achieve your fullest potential. </p>", 
    // the high priestess
    "The High Priestess <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_High_Priestess.jpg> <p class=hidden id=blurb onclick=revealMeaning()>tune in to your intuition.<br><br> embrace your femininity in whatever way feels right for you. </p>",
    // the high priestess reversed
    "The High Priestess (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_High_Priestess.jpg> <p class=hidden id=blurb onclick=revealMeaning()>trust your gut and listen to your own needs. <br><br> have open and honest conversations to avoid any miscommunication. </p>",  
    // the empress
    "The Empress <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Empress.jpg> <p class=hidden id=blurb onclick=revealMeaning()>affirm and connect with your femininity. <br><br> nurture your creativity and watch your ideas bloom. </p>", 
    // the empress reversed
    "The Empress (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Empress.jpg> <p class=hidden id=blurb onclick=revealMeaning()>make self actualisation a priority. <br><br> be careful not to become too reliant on others - but do not be afraid to accept help. </p>", 
    // the emperor
    "The Emperor <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Emperor.jpg> <p class=hidden id=blurb onclick=revealMeaning()>affirm and connect with your masculinity. <br><br> use the wisdom you have earned to create calm from chaos. </p>",
    // the emperor reversed
    "The Emperor (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Emperor.jpg> <p class=hidden id=blurb onclick=revealMeaning()>assess the role of discipline in your life. <br><br> sometimes it is not enough to have a plan if you have no support in place. </p>",
    // the hierophant
    "The Hierophant <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Hierophant.jpg> <p class=hidden id=blurb onclick=revealMeaning()>Make sure your ideas are backed up by research. <br><br> if you are not sure about something - ask. </p>", 
    // the hierophant reversed
    "The Hierophant (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Hierophant.jpg> <p class=hidden id=blurb onclick=revealMeaning()>challenge the educational establishment <br><br> but be wary of rebellion for rebellions sake. </p>", 
    // the lovers
    "The Lovers <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Lovers.jpg> <p class=hidden id=blurb onclick=revealMeaning()>cultivate your most important relationship. <br><br> it is always your choice how you connect with the people around you. </p>", 
    // the lovers reversed
    "The Lovers (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Lovers.jpg> <p class=hidden id=blurb onclick=revealMeaning()>whatever you perceive in others you also have within yourself - positive or negative. <br><br> the right decision may be the most difficult one - it is still right. </p>", 
    // the chariot
    "The Chariot <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Chariot.jpg> <p class=hidden id=blurb onclick=revealMeaning()>you will surely succeed with discipline and willpower. <br><br> take an active role in your own life. </p>", 
    // the chariot reversed
    "The Chariot (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Chariot.jpg> <p class=hidden id=blurb onclick=revealMeaning()>re-evaluate your situation. <br><br>you cannot control everything - loosen your grip and see what happens. </p>",
    // strength
    "Strength <br> <img class=card-img id=card onclick=revealMeaning() src=images/Strength.jpg> <p class=hidden id=blurb onclick=revealMeaning()>do not underestimate your own determination. <br><br> feel the fear and do it anyway. it will be worth it. </p>", 
    // strength reversed
    "Strength (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/Strength.jpg> <p class=hidden id=blurb onclick=revealMeaning()>check in with yourself and listen to your body. <br><br> you have permission to rest and rebalance your energies. </p>",
    // the hermit
    "The Hermit <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Hermit.jpg> <p class=hidden id=blurb onclick=revealMeaning()>take some time to reconnect with yourself. <br><br> there is no need to hold on to old ideals that no longer serve you - allow your priorities to change. </p>", 
    // the hermit reversed
    "The Hermit (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Hermit.jpg> <p class=hidden id=blurb onclick=revealMeaning()>do not give in to the temptation to isolate yourself. <br><br> reaching out may be the best thing you can do right now. </p>", 
    // wheel of fortune 
    "Wheel of Fortune <br> <img class=card-img id=card onclick=revealMeaning() src=images/Wheel_of_Fortune.jpg> <p class=hidden id=blurb onclick=revealMeaning()>no feeling is final. <br><br> have faith in the universe and the people around you to come through. </p>",
    // wheel of fortune reversed
    "Wheel of Fortune (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/Wheel_of_Fortune.jpg> <p class=hidden id=blurb onclick=revealMeaning()>take responsibility for your life. <br><br> you may need to hit rock bottom to realise what is not serving you. </p>",
    // justice
    "Justice <br> <img class=card-img id=card onclick=revealMeaning() src=images/Justice.jpg> <p class=hidden id=blurb onclick=revealMeaning()>take radical accountability. <br><br> challenge yourself to see the nuance you have been avoiding. </p>", 
    // justice reversed
    "Justice (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/Justice.jpg> <p class=hidden id=blurb onclick=revealMeaning()>honesty can be challenging - that does not mean you should avoid it. <br><br> big decisions mean taking extra care to check your biases. </p>", 
    // the hanged man
    "The Hanged Man <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Hanged_Man.jpg> <p class=hidden id=blurb onclick=revealMeaning()>you do not have to wait for everything to be complete to take a break. <br><br> switch up your routine and find a fresh perspective. </p>", 
    // the hanged man reversed
    "The Hanged Man (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Hanged_Man.jpg> <p class=hidden id=blurb onclick=revealMeaning()>take a break - before the universe makes you. <br><br> most decisions are better made on purpose. </p>", 
    // death
    "Death <br> <img class=card-img id=card onclick=revealMeaning() src=images/Death.jpg> <p class=hidden id=blurb onclick=revealMeaning()>one door must close for another to open. <br><br> let go of the things that do not serve you - they are only weighing you down. </p>", 
    // death reversed
    "Death (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/Death.jpg> <p class=hidden id=blurb onclick=revealMeaning()>resisting change will only make it come on stronger. <br><br> swap your fear for excitement and embrace the challenge. </p>", 
    // temperance
    "Temperance <br> <img class=card-img id=card onclick=revealMeaning() src=images/Temperance.jpg> <p class=hidden id=blurb onclick=revealMeaning()>embrace balance and diversity. <br><br> remember that inconvenience is the cost of community. </p>", 
    // temperance reversed
    "Temperance (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/Temperance.jpg> <p class=hidden id=blurb onclick=revealMeaning()>everything in moderation. <br><br> re-examine your priorities. </p>",
    // the devil
    "The Devil <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Devil.jpg> <p class=hidden id=blurb onclick=revealMeaning()>never forget that you are the one behind the wheel. <br><br> it is always worth it to be in control of your own life. </p>", 
    // the devil reversed
    "The Devil (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Devil.jpg> <p class=hidden id=blurb onclick=revealMeaning()>do not be ashamed of your innermost thoughts and feelings. <br><br> to dependen on others you must first be able to depend on yourself. </p>", 
    // the tower
    "The Tower <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Tower.jpg> <p class=hidden id=blurb onclick=revealMeaning()>change creates good and bad chaos. <br><br> ride out the destruction and you will be better for it. </p>", 
    // the tower reversed
    "The Tower (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Tower.jpg> <p class=hidden id=blurb onclick=revealMeaning()>personal upheaval can be painful - but it is always worth it. <br><br> let go. </p>", 
    // the star
    "The Star <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Star.jpg> <p class=hidden id=blurb onclick=revealMeaning()>allow yourself to aspire to more. <br><br>You are being blessed by the universe. your time is now - seize it. </p>", 
    // the star reversed
    "The Star (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Star.jpg> <p class=hidden id=blurb onclick=revealMeaning()>this is one of the universes little tests. <br><br> recalibrate your daily life to accomodate the changes - everything will fall into place. </p>", 
    // the moon
    "The Moon <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Moon.jpg> <p class=hidden id=blurb onclick=revealMeaning()>seeking professional help will do more than ruminating. <br><br> let your intuition guide you back to a more steady path. </p>", 
    // the moon reversed
    "The Moon (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_Moon.jpg> <p class=hidden id=blurb onclick=revealMeaning()>your anxieties will soon subside. <br><br> you are the only thing holding you back - allow yourself space for happiness however that looks for you. </p>", 
    // the sun
    "The Sun <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_Sun.jpg> <p class=hidden id=blurb onclick=revealMeaning()>things are about to get a whole lot better. <br><br> channel the energy flowing through you into exciting new projects and relationships. </p>", 
    // the sun reversed
    "The Sun (reversed) <br> <img class=card-img-r onclick=revealMeaning() id=card src=images/The_Sun.jpg> <p class=hidden id=blurb onclick=revealMeaning()>do not lose sight of your inner child. <br><br> any negativity you are experiencing is temporary - this is your sign to let your freak flag fly. </p>", 
    // judgement
    "Judgement <br> <img class=card-img id=card onclick=revealMeaning() src=images/Judgement.jpg> <p class=hidden id=blurb onclick=revealMeaning()>you are changing - embrace your new self. <br><br> trust that everything is going according to plan. let your wisdom and experience guide you. </p>", 
    // judgement reversed
    "Judgement (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/Judgement.jpg> <p class=hidden id=blurb onclick=revealMeaning()>something new awakens in you. do not be afraid. <br><br> practice self-acceptance and appreciate your true self in every form. </p>", 
    // the world
    "The World <br> <img class=card-img id=card onclick=revealMeaning() src=images/The_World.jpg> <p class=hidden id=blurb onclick=revealMeaning()>you have completed a period of your life. <br><br> allow yourself space to reflect on and celebrate your successes. do not forget to tie up loose ends. </p>",
    // the world reversed
    "The World (reversed) <br> <img class=card-img-r id=card onclick=revealMeaning() src=images/The_World.jpg> <p class=hidden id=blurb onclick=revealMeaning()>be realistic with your goals - closure is not guaranteed. <br><br> with the right support you will reach your goals - but patience is key. </p>"
];




function pullOne() {
    const random = Math.floor(Math.random() * cards.length);
    document.getElementById("pulled").innerHTML = cards[random];
}

function revealMeaning() {
    let blurb = document.getElementById("blurb");
    blurb.classList.toggle("hidden")

    let card = document.getElementById("card");
    card.classList.toggle("inactive")
    
}

