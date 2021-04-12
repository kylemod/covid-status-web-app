async function loadData() {
  document.querySelector("#app").innerHTML = await "Loading data"
  await fetchData();
}

async function fetchData() {
  await fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.querySelector("#app").innerHTML = `
        <p>Total Cases: ${data.cases}<p>
        <p>Active Cases: ${data.active}</p>
        <p>Total Recovered: ${data.recovered}</p>
        <p>Recovered Today: ${data.todayRecovered}</p>
        <p>Critical: ${data.critical}</p>
        <p>Total Deaths: ${data.deaths}</p>
        <p>Deaths Today: ${data.todayDeaths}</p>
        <p>Total Swab Tested: ${data.tests}</p>
      `;
    })
    .catch(error => {
      alert(error.message);
      console.log(error);
    })
}

async function refresh() {
  await loadData();
}