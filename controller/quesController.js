function quesController($scope, $http) {
    const api = "http://localhost:3000/quizs";
    $scope.index = -1;
    $scope.indexCheckBox = 1;
    $scope.quizs = [];
    $scope.begin = 0;
    $http.get(api)
        .then(function(response) {
            $scope.quizs = response.data;
            console.log($scope.quizs);
        });
    $scope.pageCount = Math.ceil($scope.quizs.length / 10);

    $scope.onSelect = function(index) { //Khi click bất kỳ vào dòng nào trên table sẽ đổ dữ liệu lên Form
        $scope.index = index;
        $scope.quiz = angular.copy($scope.quizs[index]);
        switch ($scope.quiz.check) {
            case 1:
                $scope.indexCheckBox = 1;
                $scope.quiz.answer = angular.copy($scope.quiz.answer1);
                break;
            case 2:
                $scope.indexCheckBox = 2;
                $scope.quiz.answer = angular.copy($scope.quiz.answer2);
                break;
            case 3:
                $scope.indexCheckBox = 3;
                $scope.quiz.answer = angular.copy($scope.quiz.answer3);
                break;
            case 4:
                $scope.indexCheckBox = 4;
                $scope.quiz.answer = angular.copy($scope.quiz.answer4);
                break;
        }
    }

    //Đổ các đáp án từ input vào list câu trả lời
    $scope.click1 = function() {
            $scope.quiz.answer = $scope.quiz.answer1;
        }
        //Đổ các đáp án từ input vào list câu trả lời
    $scope.click2 = function() {
            $scope.quiz.answer = $scope.quiz.answer2;
        }
        //Đổ các đáp án từ input vào list câu trả lời
    $scope.click3 = function() {
            $scope.quiz.answer = $scope.quiz.answer3;
        }
        //Đổ các đáp án từ input vào list câu trả lời
    $scope.click4 = function() {
        $scope.quiz.answer = $scope.quiz.answer4;
    }


    $scope.onClear = function() {
        $scope.quiz = {};
        $scope.index = -1;
        $scope.indexCheckBox = 1;
    }

    $scope.onInsert = function() {
        $scope.quiz.id = null;
        if ($scope.quiz.check == null) { //Nếu chưa chọn đáp án đúng thì return
            return
        }
        $http.post(api, $scope.quiz)
            .then(function(response) {
                console.log(response.data);
                alert("Thêm thành công!");
            });
    }

    $scope.onUpdate = function() {
        const apiUpdate = api + "/" + $scope.quiz.id;
        // $scope.quiz.id = null;
        $http.put(apiUpdate, $scope.quiz)
            .then(function(response) {
                console.log(response.data);
                alert("Sửa thành công!");
            });
    }

    $scope.onDelete = function() {
        const apiDelete = api + "/" + $scope.quiz.id;
        $http.delete(apiDelete, $scope.quiz)
            .then(function(response) {
                console.log(response)
                alert("Xóa thành công!");
            });
    }

    // $scope.first = function() {
    //     $scope.begin = 0;
    // }

    // $scope.prev = function() {
    //     console.log($scope.begin);
    //     if ($scope.begin > 0) {
    //         $scope.begin -= 10;
    //     }
    // }

    // $scope.next = function() {
    //     if ($scope.begin < (($scope.pageCount - 1) * 10)) {
    //         $scope.begin += 10;
    //     }
    //     console.log($scope.beign);
    // }

    // $scope.last = function() {
    //     $scope.begin = ($scope.pageCount - 1) * 10;

    // }

}