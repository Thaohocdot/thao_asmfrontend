function loginController($scope, $rootScope, $http) {
    $scope.sv = [];
    const api = "http://localhost:3000/sv";
    $http.get(api)
        .then(function(response) {
            $scope.sv = response.data;
            console.log(response.data);
        });
    $scope.loginForm = function() {
        for (var i = 0; i < $scope.sv.length; i++) {
            if ($scope.user.email == $scope.sv[i].email && $scope.user.pass == $scope.sv[i].pass) {
                $rootScope.user = $scope.sv[i];
                $rootScope.taikhoan = $rootScope.user.fullname
                console.log($rootScope.user);
                $rootScope.isLogin = true;
                if ($scope.sv[i].isAdmin == "1") {
                    $rootScope.isAdmin = true;
                    window.location.href = "#pages/account"
                } else {
                    window.location.href = "#pages/home"
                }
            }
        }
    }

}