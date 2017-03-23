(function (angular) {

    'use strict';

    angular.module("domacare", ["ui.router", 'module1', 'module2']).config( function ( $stateProvider,  $urlRouterProvider ) {
	
             $stateProvider
                .state("home", {
                url: "/",
                templateUrl: "homeComponent.html",
                controller: "test"
            });
            
	        $urlRouterProvider.otherwise('/');
	});



    angular.module("domacare").controller("test", mainController)

    function mainController($scope) {

        $scope.working = "It is working"

    }

})(window.angular);