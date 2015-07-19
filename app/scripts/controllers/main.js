'use strict';

/**
 * @ngdoc function
 * @name momentFeedPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the momentFeedPageApp
 */
angular.module('momentFeedPageApp')

.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    v: '3.17',
    libraries: 'weather,geometry,visualization'
  });
}])

.controller('MainCtrl', ['$scope', '$http', 'uiGmapGoogleMapApi', function ($scope, $http, uiGmapGoogleMapApi) {
	// $scope.currentCommunity.options = {
 //    animation: google.maps.Animation.drop,
 //    icon: {
 //      url: 'https://mt.google.com/vt/icon?psize=20&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-blue.png&ax=44&ay=48&scale=1&text=%E2%80%A2'
 //    }
 //  };
	$scope.submitZip = function() {
		// var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+$scope.zip;
		var url = "https://api.foursquare.com/v2/venues/search?client_id=2EMFXZ1KTZUBLKRZRM20YF0OBWWGKU4JDWPU0H3JGMMRZH4W&client_secret=Q0G3ZDYJK5KLLAELIYYTBWNHGED4TGJWWF40JU4I5O45AYSA&v=20130815&limit=5&near=" + $scope.zip;
		
		var request = $http.get(url);
		request.then(function(response) {
			if (response.data.meta.code === 200) {  				
				$scope.markerList = response.data.response.venues;
	      processMarkers($scope.markerList);
	      $scope.target = response.data.response.geocode;
	      uiGmapGoogleMapApi.then(function() {
	        $scope.map = {
	          center: {
	            latitude: $scope.target.feature.geometry.center.lat,
	            longitude: $scope.target.feature.geometry.center.lng
	          },
	          zoom: 10
	        };
	      });				

			}
		});
	};

	var processMarkers = function(markers) {
		for (var i = 0; i < markers.length; i++) {
			markers[i].labelNum = i + 1;
			markers[i].coordinates = {
				latitude: markers[i].location.lat,
				longitude: markers[i].location.lng
			};
			// markers[i].coordinates.latitude = markers[i].location.lat;
			// markers[i].coordinates.longitude = markers[i].location.lng; 
			markers[i].options = {
        icon: {
          url: 'https://mt.google.com/vt/icon/text=' + (i + 1).toString() + '&psize=16&font=fonts/arialuni_t.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=48&scale=1'            
        }
			};
		}

	};

}]);
