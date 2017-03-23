(function (angular) { 

    angular.module('module1',[]).config( function ( $stateProvider,  $urlRouterProvider ) {
	
	        $stateProvider
               .state("module1", {
                url: "/module1",
                templateUrl: "module1/module1.html"
            }).state("module1.feature1", {
                url: "/feature1",
                templateUrl: "module1/feature1-component/feature.view.html",
                controller: "featureControler",
                onEnter: function ($state, $stateParams) {
                  console.log("In state");
                    }
            }).state("module1.feature2", {
                url: "/feature2",
                templateUrl: "module1/feature2-component/feature2.view.html",
                controller: "featureControler2",
                onEnter: function ($state, $stateParams) {
                        console.log("In state");
                    }
            });
            
	});
    
 })(window.angular)

