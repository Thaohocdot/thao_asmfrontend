function registerController($scope, $http) {
    const api = "http://localhost:3000/sv"
    $scope.sv = {
        gender: 1,
        isAdmin: 0,
    }

    $scope.onRegister = function () {
        if ($scope.sv.pass != $scope.sv.pass1) {
            alert("Sai mật khẩu!");
        } else {
            $http.post(api, $scope.sv)
            .then(function (reponse) {
                console.log(Response.data)
            })
        }
    }
}