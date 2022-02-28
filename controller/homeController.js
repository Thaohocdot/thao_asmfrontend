function homeController($scope, $rootScope, $http) {
    const api = "http://localhost:3000/subject";
    $scope.subjects = [];
    $http.get(api)
        .then(function (response) {
            $scope.subjects = response.data;
            $scope.countSub = $scope.subjects.length;
        });
}