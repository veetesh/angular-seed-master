'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', 'rootValGetterServiceQQ' ,function(version,rootValGetterServiceQQ) {
  	var data = rootValGetterServiceQQ.getVal();
    return function(scope, elm, attrs) {
      elm.text(version);
      //elm.text(data);
    };
  }]).
  directive('search',['searchService',function(searchService){
  	return{
  		restrict:'A',
  		link:function(scope,element,attrs){
  			//alert("I am working");
        searchService.getPersons("abc").then(
          function(success){
            scope.data = success;
          },
          function(error){console.log(error);},
          function(notify){console.log(notify);}
          );
  		},
      transclude:"true",
      template:'<h1 ng-transclude></h1><select ng-model="data" ng-options="d.val for d in data"></select>',
  		scope:{
        
  		}//to give directive an isolated scope
  	}
  }]);