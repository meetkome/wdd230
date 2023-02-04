// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare a const variable name "url" and assign it a valid URL string as given in the documentation.

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier,276&appid=82eed2cbba4b15bb351f841f1e08d31a&units=imperial';

// Remember to invoke the apiFetch() function with a call somewhere in your script
// Store the results of the url fetch into a variable named "response".
// If the response is OK, then store the result of response.json() conversion in a variable named "data", and
// Output the results to the console for testing.
// Else, throw an Error using the response.text().
// Finish off the catch block by outputting any try error to the console.
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        // displayData(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
  
//   Build the displayResults function to output to the given HTML document
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}