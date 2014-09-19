var timelly = angular.module('timelly', ['ui.bootstrap', 'ui.modalWindowBinder', 'ngRoute']);

timelly.config(function($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: "app/views/index.html",
            controller: "IndexController"
        })
        .when('/contact',
        {
            templateUrl: "app/views/contact.html",
            controller: "ContactController"
        })
        
});

timelly.controller('HeaderController', ['$scope', '$location', 'ModalWindowBinder' ,function HeaderController($scope, $location, ModalWindowBinder){

	
	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};

    
    $scope.openModalLogin = function(){
        var loginModal = {};
        var dialogSettings = {
            tmpl : 'app/views/dialog-login.html?p='+Math.random(),
            ctrl : 'LoginDialogController'
        };

        loginModal = new ModalWindowBinder.create(dialogSettings);

        loginModal.openDialog().result.then();
    };

}]);