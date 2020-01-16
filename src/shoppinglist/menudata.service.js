(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function () {

      var result = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (result) {



        return result;
      })
      .catch(function (result) {
        console.log("Something went wrong");
      });

      return result;
    };



    service.getItemsForCategory = function (categoryShortName) {
      
      var result = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      }).then(function (result) {

        return result;
      })
      .catch(function (result) {
        console.log("Something went wrong");
      });

      return result;
    };



  }

})();
