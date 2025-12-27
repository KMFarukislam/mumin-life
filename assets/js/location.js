const locationBox = document.getElementById("userLocation");

// Fallback
locationBox.innerText = "📍 Bangladesh";

// Reverse geocode (district-level)
function detectLocation(lat, lon) {
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    .then(res => res.json())
    .then(data => {
      const addr = data.address;
      const district =
        addr.city ||
        addr.town ||
        addr.state_district ||
        addr.county ||
        addr.state ||
        "Bangladesh";

      locationBox.innerText = `📍 ${district}`;
    })
    .catch(() => {
      locationBox.innerText = "📍 Bangladesh";
    });
}

// Get GPS
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    pos => detectLocation(pos.coords.latitude, pos.coords.longitude),
    () => locationBox.innerText = "📍 Bangladesh"
  );
}
