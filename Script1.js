function iniciarMap(){
    var coord = {lat:19.5360736,lng: -99.2009924,15};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} 