function accountController($scope, $http) {
  const api = "http://localhost:3000/sv";
  $scope.students = [];
  
  //lấy data
  $http.get(api)
    .then(function (response) {
      $scope.students = response.data;
      // console.log($scope.students);
      // lấy ra được 1 mảng student trong api
    });
  $scope.select = function (index) {
    apiUpdate = api + "/" + $scope.students[index].id;
    $scope.index = index;
    $scope.sv = angular.copy($scope.students[index]);
    // đưa đối tượng lên form
  }

  $scope.index = -1;
  $scope.sv = { gender: "1", isAdmin: "1" };
  $scope.isSuccess = true;
  $scope.message = "";

  $scope.onInsert = function () {
    if ($scope.sv.pass != $scope.sv.pass1) {
      $scope.isSuccess = false;
      $scope.message = "Mật khẩu không khớp!";
      return;
    }
    $http.post(api, $scope.sv)
      .then(function (response) {
        console.log(response);
      });
    // $scope.message = "Thêm thành công!"
  }

  $scope.onUpdate = function () {
    $scope.sv.id = null; //
    $http.put(apiUpdate, $scope.sv)
      .then(function (response) {
        console.log(response.data);
      })
    $scope.onClear();
  }

  $scope.onClear = function () {
    $scope.index = -1;
    $scope.sv = { gender: "1", isAdmin: "1" };
    $scope.isSuccess = true;
    $scope.message = "";
  }

  $scope.onDelete = function () {
    console.log(apiUpdate);
    $http.delete(apiUpdate, $scope.sv)
      .then(function (response) {
        console.log(response);
        alert("Xóa thành công!")
      });
  }



  
 





}

