(function (angular) { 

    angular.module('module2',[]).config( function ( $stateProvider,  $urlRouterProvider ) {
	
	        $stateProvider
                .state("module2", {
                url: "/module2",
                templateUrl: "module2/module2.html"
            }).state("module2.feature1", {
                url: "/feature1",
                templateUrl: "module2/feature1-component/feature.view.html",
                controller: "featureControler",
                onEnter: function ($state, $stateParams) {
                  console.log("In state");
                    }
            }).state("module2.feature2", {
                url: "/feature2",
                templateUrl: "module2/feature2-component/feature2.view.html",
                controller: "featureControler2",
                onEnter: function ($state, $stateParams) {
                        console.log("In state");
                    }
            });
	});

 })(window.angular)

