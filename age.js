var app=angular.module("app",[]);
app.controller("HelloController",["$scope",function($scope){
	$scope.contacte=[];
function Contact(nume,prenume,telefon,mail){

		this.nume=nume;
		this.prenume=prenume;
		this.telefon=telefon;
		this.mail=mail;
	};
	
	
	$scope.saveC=function() {
		alert("Adaugat cu succes!");
		$scope.contacte.push(new Contact($scope.nume,$scope.prenume,
			$scope.telefon,$scope.mail));
		$scope.$apply();
		$scope.nume=$scope.prenume=$scope.telefon=$scope.mail="";
	}
	$scope.sortC=function() {
		
	$scope.contacte.sort(function(a,b){
	return b.nume-a.nume;
	});

	}


}])
app.service("HelloService", ["$scope, $http", function($scope,$http){
	//conectarea la db
	//$http.post()
}])
	 
