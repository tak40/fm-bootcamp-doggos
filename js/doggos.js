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

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");

fetch(BREEDS_URL) // fetch returns a promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const breedsObject = data.message;
    console.log(breedsObject);
    const breedsArray = Object.keys(breedsObject);
    console.log(breedsArray);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });

select.addEventListener("change", function (event) {
  const url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  getDoggo(url);
});


getDoggo(url) {
    // make URL
    // show loading spinner
    // fetch from the API
    // use the URL to change the current image
    // hide the loading spinner
}
