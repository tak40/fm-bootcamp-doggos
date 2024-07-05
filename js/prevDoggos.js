/* //  Dog API
//  https://dog.ceo/dog-api/

// 1. Fetch the random image of a dog
const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo() {
  fetch(BREEDS_URL) // fetch returns a promise
    .then(function (response) {
      // then returns a promise
      return response.json(); // returns a promise
    })
    .then(function (data) {
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Cute doggo";

      document.querySelector(".doggos").appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addDoggo);
 */
