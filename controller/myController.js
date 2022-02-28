function myController($scope, $rootScope, $http) {
    $rootScope.isLogin = false;
    $rootScope.isAdmin = false;
    $rootScope.user = {};
    console.log($rootScope.isLogin);
    $rootScope.taikhoan = "Tài khoản";

    $scope.logout = function () {
        $rootScope.isLogin = false;
        $rootScope.taikhoan = "Tài khoản";
        window.location.href = "#login";
    }

    $scope.changePass = function () {
        if ($scope.user.pass == $scope.u.pass1 && $scope.u.pass2 == $scope.u.pass3) {
            let api = "http://localhost:3000/sv/" + $scope.user.id;
            $scope.user.pass1 = angular.copy($scope.u.pass3);
            $scope.user.pass = angular.copy($scope.u.pass3);
            $http.put(api, $scope.user)
                .then(function (response) {
                    console.log(response);
                    alert("Đổi mật khẩu thành công!");
                })
        }
    }


}
