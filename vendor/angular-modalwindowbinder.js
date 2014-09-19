/*
 * angular-ui-modalWindowBinder
 * http://katropine.com

 * Version: 1.0.0 - 2014-04-09
 * License: MIT
 * Author: Kristian Beres
 * 
 * settings: https://github.com/angular-ui/bootstrap/blob/master/src/modal/docs/readme.md
 */
angular.module('ui.modalWindowBinder', []).factory('ModalWindowBinder', ['$rootScope', '$modal', function($rootScope, $modal) {
   
    function create(settings){
        
      this.data = {
        result: 'init',
        reason: null
      };
      this.settings =  {
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        scope: (function() {
            var scope = $rootScope.$new();
            scope.data = this.data;
            return scope;
        })(),
        templateUrl: settings.tmpl,
        controller: settings.ctrl,
        windowClass: settings.windowClass
      };
      this.setTitle = function(title){
            this.settings.scope.title = title; 
      };
      this.setParams = function(params){
          this.settings.scope.params = params;
      };
      this.openDialog = function(entity) {
        this.settings.scope.entity = entity;
        console.log(this.settings.scope.entity);
        return $modal.open(this.settings);
        
      }; 
   }
    
    return {create : create};
}]);