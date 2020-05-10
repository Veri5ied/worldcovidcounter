const affected = document.getElementById('affected-cases');
const death = document.getElementById('death-cases');
const recovered = document.getElementById('recovered');
const serious = document.getElementById('serious');
const active = document.getElementById('active');

fetch("https://api.covid19api.com/summary")
    .then((response) => response.json())
    .then(data => {
        affected.textContent = data.Global.TotalConfirmed;
        death.textContent = data.Global.TotalDeaths;
        recovered.textContent = data.Global.TotalRecovered;
        serious.textContent = data.Global.NewDeaths;
        active.textContent = data.Global.NewConfirmed;

    })
    .catch(error => console.log('error', error));