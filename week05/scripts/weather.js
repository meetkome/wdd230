// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare a const variable name "url" and assign it a valid URL string as given in the documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7557&lon=6.6394&appid=82eed2cbba4b15bb351f841f1e08d31a&units=imperial';

// Remember to invoke the apiFetch() function with a call somewhere in your script
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
    // const iconsrc = `https://b.basemaps.cartocdn.com/light_only_labels/8/131/86.png;
    const iconsrc = `https://b.basemaps.cartocdn.com/light_only_labels/8/131/86.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}