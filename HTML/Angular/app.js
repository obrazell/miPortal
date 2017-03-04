angular.module('physicianPortal', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('welcome', {
    url: '/',
    templateUrl: 'Angular/welcome/welcome.html',
  })
  .state('outstandingreports', {
    url: '/outstandingreports',
    templateUrl: 'js/reports/outstandingReports.html',
  })
  .state('completedreports', {
    url: '/completedreports',
    templateUrl: 'js/reports/completedReports.html',
  })
  .state('patientlist', {
    url: '/patientlist',
    templateUrl: 'js/patientList/patientList.html',
  })



  $urlRouterProvider
      .otherwise('/')

})
