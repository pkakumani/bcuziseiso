
sesioApp.controller('servicesController', ["$scope", function ($scope) {
	/*services tabs default set to "services"*/
	$scope.servicesModel = "services";
	$scope.formFilds = {searchName:"Text Entry", email1:"",email2:"me@evagiselle.co",email3:"me@evagiselle.com" ,platform:""}

	$scope.availableTags = [
		"autoComplete",
		"autoCorrect",
		"autoMobile",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$scope.complete=function(){
		$( "#tags" ).autocomplete({
			source: $scope.availableTags
		});
	} 

}]);


