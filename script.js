var MyApp= angular.module('MyApp',['ngRoute']);

	MyApp.config(function($routeProvider){

		$routeProvider
			.when('/main', {
				templateUrl: 'views/Main.html'
		
			})
			.when('/planetes', {
				templateUrl: 'views/Planetes.html'
		
			})
			.when('/etoiles', {
				templateUrl: 'views/Étoiles.html'
		
			})
			.when('/lunes', {
				templateUrl: 'views/Lunes.html'
		
			})
			.otherwise({
				retirectTo: '/main'
			})
	})


	