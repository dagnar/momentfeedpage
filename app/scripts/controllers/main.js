'use strict';

/**
 * @ngdoc function
 * @name momentFeedPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the momentFeedPageApp
 */
 angular.module('momentFeedPageApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  	$scope.submitZip = function() {
  		// var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+$scope.zip;
  		var url = "https://api.foursquare.com/v2/venues/search?client_id=2EMFXZ1KTZUBLKRZRM20YF0OBWWGKU4JDWPU0H3JGMMRZH4W&client_secret=Q0G3ZDYJK5KLLAELIYYTBWNHGED4TGJWWF40JU4I5O45AYSA&v=20130815&limit=5&near=" + $scope.zip;
  		
  		var request = $http.get(url);
  		request.then(function(response) {
  			if (response.data.meta.code === 200) {  				
  				$scope.results = response.data.response.venues;
  				// fourUrl += response.data.results[0].geometry.location.lat + ',' + response.data.results[0].geometry.location.lon

  			}
  		});


  	};
  }]);
