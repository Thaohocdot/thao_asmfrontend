function accountController($scope, $http) {
    const api = "http://localhost:3000/sv";
    $scope.students = [];

    //lấy data
    $http.get(api)
        .then(function(response) {
            //đổ dữ liệu sau khi thực thi thành công vào $scope.students
            $scope.students = response.data;
            // console.log($scope.students);
            // lấy ra được 1 mảng student trong api
        });


    $scope.select = function(index) { //trả về index khi click vào dòng trên table
        apiUpdate = api + "/" + $scope.students[index].id; //lấy api update gồm cả id (id lấy trong list theo index)
        $scope.index = index;
        $scope.sv = angular.copy($scope.students[index]); // lấy dữ liệu trong list tại vị trí index sau khi click -> đổ lại vào đối tượng sv để hiển thị lên form
        // đưa đối tượng lên form
    }

    $scope.index = -1;
    $scope.sv = { gender: "1", isAdmin: "1" };
    $scope.isSuccess = true;
    $scope.message = "";

    //Thêm tài khoản
    $scope.onInsert = function() {
        if ($scope.sv.pass != $scope.sv.pass1) { //check 2 pass trùng nhau hay không
            $scope.isSuccess = false;
            $scope.message = "Mật khẩu không khớp!";
            return;
        }
        $http.post(api, $scope.sv) //Gửi yêu cầu lên API với phương thức là POST (POST => thêm 1 bản ghi mới lên API)
            .then(function(response) {
                $scope.students.push(response.data) // Nếu thành công thì list thêm 1 bản ghi mới theo dữ liệu $http trả về
                console.log(response);
            });
        $scope.message = "Thêm thành công!"
    }

    $scope.onUpdate = function() {
        //apiUpdate => link để update đã được khai báo ở trên đã có id
        $http.put(apiUpdate, $scope.sv) //Gửi yêu cầu lên API với phương thức là PUT (PUT => sửa 1 bản theo id lên API)
            .then(function(response) {
                //Nếu PUT được thực thi thành công thì list tại vị trí index khi sửa sẽ = dữ liệu $http.put trả về
                $scope.students[$scope.index] = angular.copy(response.data);
                console.log(response.data);
            })
        $scope.onClear();
    }

    $scope.onClear = function() {
        $scope.index = -1;
        $scope.sv = { gender: "1", isAdmin: "1" };
        $scope.isSuccess = true;
        $scope.message = "";
    }

    $scope.onDelete = function() {
        console.log(apiUpdate); //Gửi yêu cầu lên API với phương thức là DELETE (DELETE => sửa 1 bản theo id lên API)
        $http.delete(apiUpdate, $scope.sv)
            .then(function(response) {
                //Nếu DELETE được thực thi thành công thì list sẽ xóa 1 bản ghi tại vị trí index được select
                $scope.students.splice($scope.index, 1);
                console.log(response);
                alert("Xóa thành công!")
            });
    }










}