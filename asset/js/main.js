let mdpInput;
let regexChiffre = new RegExp("[0-9]");
let regexMaj = new RegExp("[A-Z]");
let regexMin = new RegExp("[a-z]");
let regexCsp = new RegExp("\\W");

let compteur;
let message = document.getElementById("message");

function verifierPassword() {
  compteur = 0;
  let mdpInput = document.getElementById("inputPassword").value;

  if (regexMaj.test(mdpInput)) {
    compteur = compteur + 1;
  }
  if (regexMin.test(mdpInput)) {
    compteur = compteur + 1;
  }
  if (regexChiffre.test(mdpInput)) {
    compteur = compteur + 1;
  }
  if (regexCsp.test(mdpInput)) {
    compteur = compteur + 1;
  }
  if (mdpInput.length <8) {
    compteur = compteur -1;
  }

  console.log(compteur);
  console.log(inputPassword.value);
  switch (compteur) {
    case 4:
      message.innerHTML =
      '<div class="p-3 mb-2 bg-success text-white">Perfect Secure</div>';
      break;
    case 3:
      message.innerHTML =
        '<div class="p-3 mb-2 bg-primary text-white">Secure</div>';
      break;
    case 2:
      message.innerHTML =
      '<div class="p-3 mb-2 bg-warning text-white">Medium Secure</div>';
      break;
    case 1:
      message.innerHTML =
      '<div class="p-3 mb-2 bg-danger text-white">Not Secure</div>';
      break;
  }
}

inputPassword.addEventListener("keyup", verifierPassword);
