const x = document.getElementById("geoLocation");
const y = document.getElementById("maps");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError, {
      maximumAge: 10000,
      timeout: 5000,
      enableHighAccuracy: true,
    }); //watchPosition untuk request terus menerus
  } else {
    x.innerHTML = "Browser Tidak Support.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude:" +
    position.coords.longitude +
    "<br>Accuracy:" +
    position.coords.accuracy +
    "<br>altitude:" +
    position.coords.altitude +
    "<br>altitude Accuracy:" +
    position.coords.altitudeAccuracy +
    "<br>heading:" +
    position.coords.heading +
    "<br>speed:" +
    position.coords.speed +
    "<br>timestamp:" +
    position.timestamp;

  y.innerHTML =
    '<iframe width="700" height="300" src="https://maps.google.com/maps?q=' +
    position.coords.latitude +
    "," +
    position.coords.longitude +
    '&amp;z=15&amp;output=embed"></iframe>';
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User Menolak Request Geolokasi.";
      break;
    case error.POSSITION_UNAVAILABLE:
      x.innerHTML = "Lokasi Tidak Ditemukan.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "Request Timed Out";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "Tidak Diketahui";
      break;
  }
}
