angular.module('SteroidsApplication', [
    'supersonic'
])

.service('Product', function($q, $http){

    var baseURL = 'http://localhost:9200/satnam/'

    this.getProductsByCategory = function(category){
        return $http.get(baseURL + category+'/_search').then(function(data){
            console.log(data); 
            return data;
        })
    }

})

.controller('IndexController', function($scope, supersonic, Product) {

    //supersonic.ui.screen.setAllowedRotations(["landscapeLeft", "landscapeRight"]);

    $scope.navbarTitle = "dd";

    function init(){
        console.log('init')
        Product.getProductsByCategory('sandwiches').then(function(data){
            alert(data)
            console.log(data);
        })
    }


    $scope.openLeftMenu = function(){

        Product.getProductsByCategory('sandwiches').then(function(data){
            alert(data)
            console.log(data);
        })

    	supersonic.ui.drawers.open("left").then( function() {
			supersonic.logger.debug("Drawer was shown");
		});
    }

   

});
