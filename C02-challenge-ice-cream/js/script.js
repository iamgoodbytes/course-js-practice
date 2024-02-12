let form = document.querySelector("form");
let amount = document.querySelector("#amount");
let flavour = document.querySelector("#flavour");
let takeout = document.querySelector("#takeout");
let delivery = document.querySelector("#delivery");
let disco = document.querySelector("#disco");
let cream = document.querySelector("#cream");
let message = document.querySelector("#message");

form.addEventListener("submit", placeOrder);
message.addEventListener("keyup", updateCharacters);

function updateCharacters(e) {
  let typed = message.value.length;
  let left = 100 - typed;
  document.querySelector("#message-help span").innerHTML = left;
}

function placeOrder(e) {
  let liter = amount.value;
  let iceFlavour = flavour.value; // vanilla, mango, mokka?
  let pricePerLiter;

  switch (iceFlavour) {
    case "vanille":
      pricePerLiter = 3;
      break;

    case "mango":
      pricePerLiter = 3.5;
      break;

    case "mokka":
      pricePerLiter = 4;
      break;

    default:
  }

  if (disco.checked === true) {
    pricePerLiter = pricePerLiter + 1;
  }

  if (cream.checked === true) {
    pricePerLiter = pricePerLiter + 2;
  }

  let total = liter * pricePerLiter;

  if (takeout.checked === true) {
    total = total * 0.9;
  }

  printOrder(total);

  e.preventDefault();
}

function printOrder(total) {
  let card = document.createElement("div"); // <div></div>
  card.classList.add("card"); // <div class="card"></div>

  let image = document.createElement("img");
  image.classList.add("card-img-top");
  image.setAttribute(
    "src",
    "https://images.pexels.com/photos/978947/pexels-photo-978947.jpeg"
  );

  let p = document.createElement("p");
  p.classList.add("card-text");
  p.innerHTML = "Total to pay: " + total + "€";

  card.appendChild(image);
  card.appendChild(p);

  document.querySelector(".card-holder").appendChild(card);
}
