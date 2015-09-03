
(function(){

  var app = angular.module('footerModule', [] );

  app.directive('tapaFooter',function(){
  	return {
  		restrict : 'E',
  		templateUrl : 'app/components/home/tapa-footer.html',
  		controllerAs : 'footerCtrl',
  		controller : function() {
        this.visitWebsite = function(){
          window.open('http://onca.se/');
        }
  		}

  	}
  });

 

})();