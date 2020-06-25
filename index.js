var signupApp = angular.module("signupApp", []);
var obj = [{
    fname: "Ishika",
    lname: "Dubey",
    uname: "ishika1727",
    password: "12345678",
    dob: "17-06-2000",
    country: "India"
}];
signupApp.controller("signupController", function ($scope) {
    $scope.submitData = function (data) {
        if ($scope.data.password.length < 8) {
            alert("Password should contain atleast 8 characters. Please type a new password.");
            $scope.data.password = "";
            return;
        }
        for (i = 0; i < obj.length; i++) {
            // if(obj[i].fname==$scope.data.fname && obj[i].lname==$scope.data.lname && obj[i].uname==$scope.data.uname && obj[i].dob==$scope.data.dob)
            if (obj[i].uname == $scope.data.uname) {
                alert("Username already exists!");
                return;
            }
        }
        alert("User succesfully registered!");
        obj.push($scope.data);
        $scope.data = {};
    }
});

signupApp.controller("loginController", function ($scope) {
    $scope.loginUser = function (login) {
        var flag = 0;
        for (i = 0; i < obj.length; i++) {
            if (obj[i].uname == $scope.login.uname && obj[i].password == $scope.login.password) {
                flag = 1;
                alert("Username logged in!");
            }
        }
        if (flag == 0) {
            alert("User does not exists");
        }
    }
});

signupApp.controller("userController", function ($scope) {
    $scope.users = obj;
});