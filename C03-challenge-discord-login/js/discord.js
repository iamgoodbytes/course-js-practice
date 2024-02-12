// log in met user "ninja" en password "12345"

// indien incorrecte login, toon de errors rond de tekstvelden
// tip: .error op .form__group

// indien login ok: toon .loading en verberg het loginformulier

// na 5 seconden verdwijnt .loading en toon je je vriendenlijst
// tips: array = loopen
// voeg vrienden toe aan #friendslist

let friends = [
  { username: "ninja", mutual: 77 },
  { username: "yadsacid", mutual: 53 },
  { username: "x2twins", mutual: 41 },
  { username: "hackypixelz", mutual: 23 },
  { username: "magnetr6", mutual: 8 }
];

// wanneer je hovert over een vriend (mouseover) toon je .friends met het aantal mutual friends
// wanneer je niet meer hover over een vriend (mouseout) verberg je .friends
