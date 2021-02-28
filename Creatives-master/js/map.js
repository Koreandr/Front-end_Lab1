      function myMap() {

        var pos = new google.maps.LatLng(50.447194, 30.455318)

        gMap = new google.maps.Map(document.getElementById('gMap'), {
          zoom: 15.6,
          center: pos
        });

        gMarker = new google.maps.Marker({
          position: pos,
          map: gMap,
          animation: google.maps.Animation.DROP,
          title: 'DKS Group'
        });

        var htmlContent = '<h4>CREATIVES</h4>';

        var infowindow = new google.maps.InfoWindow({
          content: htmlContent
        });

        infowindow.open(gMap, gMarker);

        gMarker.addListener('click', function(){
          infowindow.open(gMap, gMarker);
        });

        gMarker.setMap(gMap);
      }