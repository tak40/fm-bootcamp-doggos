const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");
const doggosDiv = document.querySelector(".doggos");

// fetch breeds and add them to the <select>
fetch(BREEDS_URL) // fetch returns a promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  })
  .catch(function (error) {
    console.log("Error fetching breeds: ", error);
  });

select.addEventListener("change", function (event) {
  const url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  getDoggo(url);
});

function getDoggo(url) {
  // show loading spinner
  // fetch from the API
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.message);
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Cute doggo";

      doggosDiv.innerHTML = "";
      doggosDiv.appendChild(img);
    })
    .catch(function (error) {
      console.log("Error fetching doggos: ", error);
    });

  // use the URL to change the current image

  // hide the loading spinner
}
