const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");
const doggosDiv = document.querySelector(".doggos");
const spinner = document.querySelector(".spinner");

// Fetch breeds and add them to the <select>
fetch(BREEDS_URL)
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

// Show the loading spinner
function showLoadingSpinner() {
  spinner.style.display = "block";
}

// Hide the loading spinner
function hideLoadingSpinner() {
  spinner.style.display = "none";
}

// Fetches and displays a dog image from the given URL
function getDoggo(url) {
  doggosDiv.innerHTML = "";
  showLoadingSpinner();

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Cute doggo";
      img.className = "doggo-img";

      doggosDiv.innerHTML = "";
      doggosDiv.appendChild(img);
    })
    .catch(function (error) {
      console.log("Error fetching doggos: ", error);
    })
    .finally(function () {
      hideLoadingSpinner();
    });
}
