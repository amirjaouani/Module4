(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
