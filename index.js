var map = L.map('map').setView([-23.989686, -46.290439], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-23.989686, -46.290439]).addTo(map);

var marker = L.marker([-23.989686, -46.390439]).addTo(map);