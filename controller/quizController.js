function quizController($scope, $rootScope, $http) {
    $scope.quizs = [];
    $scope.begin = 0;
    $scope.isProgress = true;

    function shuffle(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
    }

    $scope.start = function () {
        console.log($scope.isLogin);
        if ($scope.isLogin == false) {
            alert("Vui lòng đăng nhập!");
            return;
        }
        $scope.isProgress = false;
        $scope.baiLam = []
    }

    const api = "http://localhost:3000/quizs";
    $http.get(api)
        .then(function (response) {
            $scope.quizs = shuffle(response.data);
            console.log($scope.quizs);
        });

    $scope.first = function () {
        $scope.begin = 0;
    }

    $scope.prev = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 1;
        }
    }

    $scope.next = function () {
        if ($scope.begin < 9) {
            $scope.begin += 1;
        }
    }

    $scope.last = function () {
        $scope.begin = 9;
    }
}