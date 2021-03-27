var placeSearch, autoAddress;
  var componentForm = {
    streetNumber: 'short_name',
    streetName: 'long_name',
    city: 'long_name',
    state: 'short_name',
    country: 'long_name',
    postalCode: 'short_name'
  };

function initAutocomplete() {
  autoAddress = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */(document.getElementById('autoAddress')),
    {types: ['geocode']});

  autoAddress.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  var place = autoAddress.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autoAddress.setBounds(circle.getBounds());
    });
  }
}