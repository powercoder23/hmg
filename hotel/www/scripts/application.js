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

    this.getAllProducts = function(){
        return $http.get('/scripts/data/getProducts.json').then(function(data){
            return data.data;
        })
    }

})

.controller('IndexController', function($scope, supersonic, Product) {

    $scope.selectedTab = 'sandwich';

    $scope.navbarTitle = "dd";

    $scope.allProducts = {};

    function init(){
        console.log('init')
        Product.getAllProducts().then(function(data){
            var rows = Math.ceil(data.length/3);
            //for (var i = 0; i < rows; i++) {
              //  var cols = data.slice(i*3,(i*3)+3);

            
            var indexes = {};

            for (var i = 0; i < data.length; i++) {
                //data[i]



                if(!$scope.allProducts.hasOwnProperty(data[i].category)){
                    $scope.allProducts[data[i].category] = [];
                    indexes[data[i].category] = 0;
                    //$scope.allProducts[data[i].category][parseInt(indexes[data[i].category])] = [data[i]];
                    $scope.allProducts[data[i].category][parseInt(indexes[data[i].category])] = [];
                    $scope.allProducts[data[i].category][parseInt(indexes[data[i].category])].push(data[i]);
                }else{

                    
                    if($scope.allProducts[data[i].category][parseInt(indexes[data[i].category])].length==3){
                        $scope.allProducts[data[i].category].push([data[i]]);
                        indexes[data[i].category] += 1;
                    }else{
                        $scope.allProducts[data[i].category][parseInt(indexes[data[i].category])].push(data[i]);
                    }
                } 
            };

        })
    }

    $scope.addProduct = function(e){
        var val = angular.element(e.currentTarget).find('button').text();
        if(isNaN(val)){
            val = 1;
        }else{
            val = parseInt(val)
            val++;
        }
        angular.element(e.currentTarget).find('button').text(val);
    }

    $scope.changeTab = function(e){
        $scope.selectedTab = angular.element(e.currentTarget).attr('tab')
    }


    $scope.openLeftMenu = function(){

        

    	supersonic.ui.drawers.open("left").then( function() {
			supersonic.logger.debug("Drawer was shown");
		});
    }

    init()

   

});
