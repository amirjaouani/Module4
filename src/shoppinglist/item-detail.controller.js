(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['MenuDataService', 'items'];
function ItemDetailController(MenuDataService, items) {
  var itemDetail = this;

  itemDetail.items = items;

}

})();
