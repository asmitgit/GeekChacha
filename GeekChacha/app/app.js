
//angular.module("GeekChacha", ["ngRoute", "ui.bootstrap", "ui.filters"]).config(["$routeProvider",
//  function ($routeProvider) {
//      $routeProvider.
//          when('/GeekChacha/register', {
//              templateUrl: 'views/register.html',
//              controller: 'registerCtrl'
//          })
//          .when('/GeekChacha/login', {
//              templateUrl: 'views/login.html',
//              controller: 'LoginController'
//          })
//          .when('/GeekChacha/Insurer/InsurerUnderwriting', {
//              templateUrl: 'views/InsurerUnderwriting.html',
//              controller: 'InsurerUnderwritingCtrl'
//          })
//          .when('/GeekChacha/Insurer/InsurerDashboard', {
//              templateUrl: 'views/InsurerDashboard.html',
//              controller: 'InsurerDashboardCtrl'
//          })
//          .when('/GeekChacha/Insurer/InsurerMediaFiles', {
//              templateUrl: 'views/InsurerMediaFiles.html',
//              controller: 'InsurerUnderwritingCtrl'
//          })
//          .when('/GeekChacha/Login', {
//              templateUrl: 'views/login.html',
//              controller: 'LoginCtrl'
//          })
//           .when('/GeekChacha/Admin/AddNewUser', {
//               templateUrl: 'views/addnewuser.html',
//               controller: 'UserMgmtCtrl'
//           })
//          .when('/GeekChacha/ChangePassword', {
//              templateUrl: 'views/ChangePassword.html',
//              controller: 'ChangePasswordCtrl'
//          })
//          .when('/GeekChacha/Admin/UserDetails', {
//              templateUrl: 'views/UserDetails.html',
//              controller: 'UserDetailsController'
//          })
//          .when('/GeekChacha/Admin/UpdateUserInfo', {
//              templateUrl: 'views/UpdateUserInfo.html',
//              controller: 'UpdateUserInfoCtrl'
//          })
//          .otherwise('/GeekChacha/Login', {
//              templateUrl: 'views/login.html',
//              controller: 'LoginCtrl'
//          });
//  }]);


(function () {
    'use strict';

    angular
        .module('GeekChacha', ['ngRoute', 'ngCookies', 'ui.bootstrap', 'ui.filters'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })

            .when('/GeekChacha/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })

            //.when('/register', {
            //    controller: 'RegisterController',
            //    templateUrl: 'register/register.view.html',
            //    controllerAs: 'vm'
            //})

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();

