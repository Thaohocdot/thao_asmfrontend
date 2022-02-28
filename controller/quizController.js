function quizController($scope, $rootScope, $http, $timeout) {
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

    $scope.start = function() {
        console.log($scope.isLogin);
        if ($scope.isLogin == false) {
            alert("Vui lòng đăng nhập!");
            return;
        }
        $scope.isProgress = false;
        $scope.baiLam = []


        $scope.m = 15;
        $scope.s = 00;
        $scope.timeQuiz = function() {
            if ($scope.s == -1) { //Cập nhật lại phút và giây khi giây chạy xuống -1
                $scope.m -= 1;
                $scope.s = 59;
            }

            if ($scope.s < 10) { //Nếu giây <10 thì thêm số 0 đằng trước
                $scope.s = '0' + $scope.s;
            }

            if ($scope.m == -1) {
                confirm('Hết giờ');
                return false;
            }

            //Service cập nhật lại thời gian sau 1s
            $timeout(function() {
                $scope.s -= 1;
                $scope.timeQuiz();
            }, 1000);
        }
        $scope.timeQuiz();
    }

    $scope.checkQuestion = function() {
        $scope.isSuccess == false;
        $scope.message = "";
    }

    const api = "http://localhost:3000/quizs";
    $http.get(api)
        .then(function(response) {
            $scope.quizs = shuffle(response.data);
            console.log($scope.quizs);
        });

    $scope.first = function() {
        $scope.begin = 0;
    }

    $scope.prev = function() {
        if ($scope.begin > 0) {
            $scope.begin -= 1;
        }
    }

    $scope.next = function() {
        if ($scope.begin < 9) {
            $scope.begin += 1;
        }
    }

    $scope.last = function() {
        $scope.begin = 9;
    }
}