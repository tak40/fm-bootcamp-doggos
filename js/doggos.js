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

function showLoadingSpinner() {
  console.log("Showing spinner");
  spinner.style.display = "block";
}

function hideLoadingSpinner() {
  console.log("Hiding spinner");
  spinner.style.display = "none";
}

function getDoggo(url) {
  // Show loading spinner
  doggosDiv.innerHTML = "";
  showLoadingSpinner();

  // Fetch from the API
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Cute doggo";

      doggosDiv.innerHTML = "";
      doggosDiv.appendChild(img);
    })
    .catch(function (error) {
      console.log("Error fetching doggos: ", error);
    })
    .finally(function () {
      // Hide the loading spinner
      hideLoadingSpinner();
    });
}
