/**
 * Created by beebe on 3/7/2017.
 */
angular.module("js").controller("controller", function($scope, services){
    var sortProp;
    $scope.quotes = services.getQuotes();
    $scope.delete = services.deleteQuote;
    $scope.add = services.addQuote;
    $scope.option = services.options;

});