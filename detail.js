const detailContainer = document.getElementById("detail");
const hash = decodeURIComponent(window.location.hash.slice(1)); // Dekódování hash z URL

console.log("Hash z URL:", hash); // Pro kontrolu načtení hash

function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const normalizedHash = normalizeString(hash);
console.log("Normalizovaný hash:", normalizedHash);

const detailData = predpoved.find((den) => normalizeString(den.den) === normalizedHash);

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
  console.log("Data nalezena:", detailData); // Ladicí výstup dat
} else {
  detailContainer.innerHTML = `<p>Data pro tento den nejsou dostupná.</p>`;
  console.error("Data pro daný den nebyla nalezena:", hash);
}
