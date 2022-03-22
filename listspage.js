const map = L.map("map", { scrollWheelZoom: false }).setView(
  [35.654004, 139.7458],
  12
);
L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([35.6861, 139.7149])
  .addTo(map)
  .bindPopup(
    "<h4>Les jardins de Shinjuku</h4> 11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japon"
  )
  .openPopup();
