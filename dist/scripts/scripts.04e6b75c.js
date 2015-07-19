"use strict";angular.module("momentFeedPageApp",["ngAnimate","ngRoute","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("momentFeedPageApp").config(["uiGmapGoogleMapApiProvider",function(a){a.configure({v:"3.17",libraries:"weather,geometry,visualization"})}]).controller("MainCtrl",["$scope","$http","uiGmapGoogleMapApi",function(a,b,c){a.submitZip=function(){var e="https://api.foursquare.com/v2/venues/search?client_id=2EMFXZ1KTZUBLKRZRM20YF0OBWWGKU4JDWPU0H3JGMMRZH4W&client_secret=Q0G3ZDYJK5KLLAELIYYTBWNHGED4TGJWWF40JU4I5O45AYSA&v=20130815&limit=5&near="+a.zip,f=b.get(e);f.then(function(b){200===b.data.meta.code&&(a.markerList=b.data.response.venues,d(a.markerList),a.target=b.data.response.geocode,c.then(function(){a.map={center:{latitude:a.target.feature.geometry.center.lat,longitude:a.target.feature.geometry.center.lng},zoom:10}}))})};var d=function(a){for(var b=0;b<a.length;b++)a[b].labelNum=b+1,a[b].coordinates={latitude:a[b].location.lat,longitude:a[b].location.lng},a[b].options={icon:{url:"https://mt.google.com/vt/icon/text="+(b+1).toString()+"&psize=16&font=fonts/arialuni_t.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=48&scale=1"}}}}]),angular.module("momentFeedPageApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("momentFeedPageApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="container"> <h2>Foursquare: Venue Endpoint</h2> <!-- input --> <form role="form" ng-submit="submitZip()"> <div class="row"> <div class="input-group"> <input type="text" class="form-control" ng-model="zip" placeholder="Enter ZIP"> <span class="input-group-btn"> <input type="submit" class="btn btn-primary" value="Go"> </span> </div> </div> </form> <div class="panel panel-default"> <ui-gmap-google-map center="map.center" pan="true" zoom="map.zoom"> <ui-gmap-markers models="markerList" options="\'options\'" fit="true" coords="\'coordinates\'"> <ui-gmap-windows options="windowOptions"> <div style="white-space: nowrap" ng-non-bindable>{{::name}}</div>  </ui-gmap-windows></ui-gmap-markers> </ui-gmap-google-map> </div> <div class="panel panel-default"> <!-- Default panel contents --> <div class="panel-heading">Things Nearby</div> <!-- Table --> <table class="table"> <tr ng-repeat="result in markerList"> <td> <h6>{{result.name}}</h6> </td> </tr> </table> </div> </div> ')}]);