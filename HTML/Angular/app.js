angular.module('physicianPortal', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('welcome', {
    url: '/',
    templateUrl: 'Angular/welcome/welcome.html',
  })
  .state('outstandingreports', {
    url: '/outstandingreports',
    templateUrl: 'Angular/outstandingReports/outstandingReports.html',
  })
  .state('completedreports', {
    url: '/completedreports',
    templateUrl: 'Angular/completedReports/completedReports.html',
  })
  .state('patientlist', {
    url: '/patientlist',
    templateUrl: 'Angular/patientList/patientList.html',
  })



  $urlRouterProvider
      .otherwise('/')

})
