angular.module('routes', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          controller: 'TeamCtrl',
          templateUrl: 'templates/teams.html'
      })
      .when('/view/:teamId', {
          controller: 'ViewCtrl',
          templateUrl: 'templates/team.html'
      })
      .otherwise({
          redirectTo: '/'
      });
})

.controller('TeamCtrl', new TeamCtrl($scope))
.controller('ViewCtrl',
  function ($scope, $routeParams) {
      $scope.id = $routeParams.id;
      
  })
    ;