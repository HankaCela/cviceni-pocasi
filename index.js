const container = document.getElementById("tydenni-predpoved");

predpoved.forEach((den) => {
  const card = document.createElement("div");
  card.className = "karta";
  card.innerHTML = `
    <h2>${den.den}</h2>
    <p>Denní teplota: ${den.denni_teplota}°C</p>
    <p>Stav počasí: ${den.stav_pocasi}</p>
    <a href="detail.html#${den.den}">Detail</a>
  `;
  container.appendChild(card);
});