var app = angular.module("myApp", ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/pages/home", {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when("/pages/quiz", {
            templateUrl: 'pages/quiz.html',
            controller: 'quizController'
        })
        .when("/pages/introduce", {
            templateUrl: 'pages/introduce.html',
        })
        .when("/pages/qa", {
            templateUrl: 'pages/QA.html'
        })
        .when("/pages/contact", {
            templateUrl: 'pages/contact.html'
        })
        .when("/login", {
            templateUrl: 'pages/login.html',
            controller: "loginController"
        })
        .when("/register", {
            templateUrl: 'pages/register.html',
            controller: "registerController"
        })
        .when("/infor", {
            templateUrl: 'pages/setInfor.html',
        })
        .when("/pages/account", {
            templateUrl: "pages/account.html",
            controller: "accountController"
        })
        .when("/pages/question", {
            templateUrl: "pages/question.html",
            controller: "quesController"
        })
});
app.controller("myController", myController);
app.controller("homeController", homeController);
app.controller("quizController", quizController);
app.controller("loginController", loginController);
app.controller("registerController", registerController);
app.controller("accountController", accountController);
app.controller("quesController", quesController);



