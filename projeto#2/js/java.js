window.onload = function(){


	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-27.648598,-48.577423),
			scrollWheel:false,
			zoom:12,
			MapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
			});

		var inforWindow = new google.maps.infoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
	});

		infoWindow.open(map,marker);

		}
	


	initialize();
	addMarker(-27.616637,-48.5923228,"",'Local');

}

