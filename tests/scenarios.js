describe('angular-ueditor', function () {
    var elm, scope, controller, content, instance,editor, i = 1;

    beforeEach(module('ng.ueditor'));

    beforeEach(inject(function ($rootScope, $compile, $document) {
        window.UEDITOR_HOME_URL = "/base/ueditor";
        delete window.UEDITOR_CONFIG.serverUrl;

        elm = angular.element(
            '<div class="ueditor" id="' + 'editor' + i + '" ng-model="test"></div>');

        scope = $rootScope.$new(true);
        scope.test = 'test';
        scope.editor = {};

        $document.find('body').append(elm);

        $compile(elm)(scope);
        controller = elm.controller('ngModel');
     
    }));

    afterEach( function() {
        elm.remove();
    } );

    it('should create editor', inject(function ($timeout, $rootScope, $document) {
        var flag;
        runs(function() {
          // expect().toBe('test');
          console.log(UE.getEditor('editor'+i).getContentTxt())
          setTimeout(function() {
                flag = true;
          }, 500)
        });
        waitsFor(function() {
            return flag;
        }, "instance should be ready", 1000);
    }));

   

});