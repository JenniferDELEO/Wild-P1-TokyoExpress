const map = L.map("map", { scrollWheelZoom: false }).setView(
  [35.654004, 139.7458],
  11.4
);

const shinjukuMap = document.getElementById("shinjukuMap");
const sensoMap = document.getElementById("sensoMap");
const skytreeMap = document.getElementById("skytreeMap");
const sunrouteHotelMap = document.getElementById("sunrouteHotelMap");
const royalHotelMap = document.getElementById("royalHotelMap");
const stationHotelMap = document.getElementById("stationHotelMap");
const sushiMap = document.getElementById("sushiMap");
const nabezoMap = document.getElementById("nabezoMap");
const gyukatsuMap = document.getElementById("gyukatsuMap");

L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

shinjukuMap.addEventListener("click", () => {
  L.marker([35.6861, 139.7149])
    .addTo(map)
    .bindPopup(
      "<h4>Les jardins de Shinjuku</h4><p>11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japon</p>"
    )
    .openPopup();
  shinjukuMap.classList.toggle("backgroundRed");
});

sensoMap.addEventListener("click", () => {
  L.marker([35.7167, 139.7966])
    .addTo(map)
    .bindPopup(
      "<h4>Sensõ-Ji</h4> <p>2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japon</p>"
    )
    .openPopup();
});

skytreeMap.addEventListener("click", () => {
  L.marker([35.7094767, 139.8122763])
    .addTo(map)
    .bindPopup(
      "<h4>Tokyo Skytree</h4> <p>1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japon</p>"
    )
    .openPopup();
});

sunrouteHotelMap.addEventListener("click", () => {
  L.marker([35.6846841, 139.6980314])
    .addTo(map)
    .bindPopup(
      "<h4>Hotel Sunroute Plaza Shinjuku</h4> <p>2 Chome-3-1 Yoyogi, Shibuya City, Tokyo 151-0053, Japon</p>"
    )
    .openPopup();
});

royalHotelMap.addEventListener("click", () => {
  L.marker([35.5501432, 139.768128])
    .addTo(map)
    .bindPopup(
      "<h4>The Royal Park Hotel Tokyo Haneda</h4> <p>Japon, 〒144-0041 Tokyo, Ota City, Hanedakuko, 2 Chome−6−5 内 第3旅客ターミナルビル Haneda Airport</p>"
    )
    .openPopup();
});

stationHotelMap.addEventListener("click", () => {
  L.marker([35.6814498, 139.7651325])
    .addTo(map)
    .bindPopup(
      "<h4>The Tokyo Station Hotel</h4> <p>1 Chome-9-1 Marunouchi, Chiyoda City, Tokyo 100-0005, Japon</p>"
    )
    .openPopup();
});

sushiMap.addEventListener("click", () => {
  L.marker([35.6674635, 139.7711801])
    .addTo(map)
    .bindPopup(
      "<h4>Sushizanmai Main Branch</h4> <p>4 Chome-11-9 Tsukiji, Chuo City, Tokyo 104-0045, Japon</p>"
    )
    .openPopup();
});

nabezoMap.addEventListener("click", () => {
  L.marker([35.6613933, 139.6979697])
    .addTo(map)
    .bindPopup(
      "<h4>Nabezo Shibuya Koen Dori</h4> <p>31-2 Udagawacho Shibuya Beam 6F, Shibuya 150-0042 Préfecture de Tokyo</p>"
    )
    .openPopup();
});

gyukatsuMap.addEventListener("click", () => {
  L.marker([35.6689554, 139.7070792])
    .addTo(map)
    .bindPopup(
      "<h4>Gyukatsu Motomura Harajuku</h4> <p>3-23-2 Jingumae Jingumae NS Bldg. B1, Shibuya 150-0001 Préfecture de Tokyo</p>"
    )
    .openPopup();
});

L.marker([35.6861, 139.7149]).addTo(map).openPopup();
L.marker([35.7167, 139.7966]).addTo(map).openPopup();
L.marker([35.7094767, 139.8122763]).addTo(map).openPopup();
L.marker([35.6846841, 139.6980314]).addTo(map).openPopup();
L.marker([35.5501432, 139.768128]).addTo(map).openPopup();
L.marker([35.6814498, 139.7651325]).addTo(map).openPopup();
L.marker([35.6674635, 139.7711801]).addTo(map).openPopup();
L.marker([35.6613933, 139.6979697]).addTo(map).openPopup();
L.marker([35.6689554, 139.7070792]).addTo(map).openPopup();

const placesTitle = document.getElementById("placesTitle");
const hostelTitle = document.getElementById("hostelTitle");
const restaurantTitle = document.getElementById("restaurantTitle");
const placesDisplay = document.getElementById("places");
const hostelDisplay = document.getElementById("hostel");
const restaurantDisplay = document.getElementById("restaurant");

placesTitle.addEventListener("click", () => {
  placesDisplay.classList.toggle("display");
});

hostelTitle.addEventListener("click", () => {
  hostelDisplay.classList.toggle("display");
});

restaurantTitle.addEventListener("click", () => {
  restaurantDisplay.classList.toggle("display");
});
