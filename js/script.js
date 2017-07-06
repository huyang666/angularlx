var app=angular.module('myApp',[]);
app.controller('loginControl',function($scope){
	$scope.username='1505fhy';
	$scope.show=function(){
		alert($scope.username)
	}
})
app.controller("myColor", function($scope) {
	$scope.records = [
		"red",
		"blue",
		"yellow",
		"green"
	]
});