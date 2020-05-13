const affected = document.getElementById('affected-cases');
const death = document.getElementById('death-cases');
const recovered = document.getElementById('recovered');
const serious = document.getElementById('serious');
const active = document.getElementById('active');

fetch("https://api.covid19api.com/summary")
    .then((response) => response.json())
    .then(data => {
        affected.textContent = data.Global.TotalConfirmed.toLocaleString();
        death.textContent = data.Global.TotalDeaths.toLocaleString();
        recovered.textContent = data.Global.TotalRecovered.toLocaleString();
        serious.textContent = data.Global.NewDeaths.toLocaleString();
        active.textContent = data.Global.NewConfirmed.toLocaleString();

    })
    .catch(error => console.log('error', error));
