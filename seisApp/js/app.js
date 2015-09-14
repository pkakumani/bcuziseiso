var sesioApp = angular.module('sesio', ['ui.router','ui.bootstrap']);



sesioApp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	// route to show our basic form (/pacKit)
		.state('services', {
			url: '/services',
		templateUrl: 'views/services.html',
		controller: 'servicesController'
		})
		.state('Home', {
			url: '/Home',
			templateUrl: 'views/Home.html',
			controller: 'homeController'
		})


	$urlRouterProvider.otherwise('/services');
});