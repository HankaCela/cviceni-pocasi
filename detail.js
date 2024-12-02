const detailContainer = document.getElementById("detail");
const hash = window.location.hash.slice(1); // Získání názvu dne z URL

const detailData = predpoved.find((den) => den.den === hash);

if (detailData) {
  detailContainer.innerHTML = `
    <h2>${detailData.den} (${detailData.datum})</h2>
    <p>Ranní teplota: ${detailData.ranni_teplota}°C</p>
    <p>Odpolední teplota: ${detailData.odpoledni_teplota}°C</p>
    <p>Večerní teplota: ${detailData.vecerni_teplota}°C</p>
    <p>Stav: ${detailData.stav_pocasi}</p>
    <p>Tlak: ${detailData.tlak} hPa</p>
    <p>Rychlost větru: ${detailData.rychlost_vetru} km/h</p>
    <p>${detailData.popis_pocasi}</p>
  `;
} else {
  detailContainer.innerHTML = `<p>Data pro tento den nejsou dostupná.</p>`;
}