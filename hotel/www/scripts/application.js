angular.module('SteroidsApplication', [
    'supersonic'
])

.controller('IndexController', function($scope, supersonic) {

    $scope.navbarTitle = "dd";

    var options = {
	  message: "A longer message with \n\n\n\nmultiple lines.",
	  buttonLabel: "Close"
	};



    $scope.openLeftMenu = function(){

    	supersonic.ui.drawers.open("left").then( function() {
			supersonic.logger.debug("Drawer was shown");
		});
    }

    $scope.tabWrapper = function(){
    	var singleWidth = angular.element('footer.tabbed > ul > li').width();



    	return {
    		'width' :(singleWidth * 4) + 'px'
    	}
    }

});
