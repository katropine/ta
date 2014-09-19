timelly.controller('LoginDialogController',['$scope', '$modalInstance', '$http', function LoginDialogController($scope, $modalInstance, $http){
	$scope.data = $scope.data || {
        title: "Listing",
        message: ""
    };
    $scope.tasks = [];
     // end init
   

    $scope.close = function() {
        $modalInstance.close('cancel');
    };


}]);