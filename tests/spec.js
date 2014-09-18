describe('angular-ueditor', function() {
    var elm, scope, controller, content, editor, i = 1;

    beforeEach(module('ng.ueditor'));

    beforeEach(inject(function($rootScope, $compile, $document) {
        window.UEDITOR_HOME_URL = "http://ueditor.baidu.com/ueditor/";
        delete window.UEDITOR_CONFIG.serverUrl;

        elm = angular.element(
            '<div class="ueditor" id="' + 'editor' + i + '" ng-model="test"></div>');

        scope = $rootScope.$new(true);
        scope.test = 'test';

        $document.find('body').append(elm);

        $compile(elm)(scope);

        controller = elm.controller('ngModel');
        scope.$digest();
        window.editor = editor = UE.getEditor('editor' + i++);
    }));

    afterEach(function() {
        elm.remove();
    });

    it('should create editor', inject(function($timeout, $rootScope, $document) {
        var flag;
        runs(function() {
            expect(UE.getEditor('editor' + (i - 1))).toBeDefined();
            expect(scope.test).toBe("test");
            editor.ready(function() {
                editor.focus();
                flag = true;
            });
        });
        waitsFor(function() {
            return flag;
        }, "editor should be ready", 1000);
    }));

    it('should change editor content when change model', inject(function($timeout, $rootScope, $document) {
        var flag;
        runs(function() {
            flag = false;
            scope.test = 'new value';
            $rootScope.$apply();
            expect(scope.test).toBe('new value');
            editor.addListener("contentChange", function() {
                expect(editor.getContent()).toBe('<p>new value</p>');
                expect(scope.test).toBe('<p>new value</p>');
                flag = true;
            });
        });
        waitsFor(function() {
            return flag;
        }, "editor should be ready", 1000);
    }));

    it('should change model when change editor content', inject(function($timeout, $rootScope, $document) {
        var flag;
        runs(function() {
            flag = false;
            editor.ready(function() {
                setTimeout(function() {
                    editor.addListener("contentChange", function() {
                        setTimeout(function() {
                            expect(editor.getContent()).toBe('<p>new value 2</p>');
                            expect(scope.test).toBe('<p>new value 2</p>');
                            flag = true;
                        }, 0);
                    });
                    editor.setContent('<p>new value 2</p>');
                    $rootScope.$apply();
                }, 0)
            })
        });
        waitsFor(function() {
            return flag;
        }, "editor should be ready", 1000);
    }));

    it('should be sample toolbars', inject(function($timeout, $rootScope, $document, $compile) {
        var flag;
        runs(function() {
            elm.remove();
            scope.config = {
                //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
                toolbars: [
                    ['FullScreen', 'Source', 'Undo', 'Redo', 'Bold']
                ]
            }
            elm = angular.element(
                '<div class="ueditor" config="config" id="' + 'editor' + i + '" ng-model="test"></div>');

            $document.find('body').append(elm);

            $compile(elm)(scope);

            controller = elm.controller('ngModel');

            scope.$digest();

            window.editor = editor = UE.getEditor('editor' + i++);

            setTimeout(function() {
                editor.ready(function() {
                    expect($('#editor' + (i - 1)).find('.edui-editor-toolbarbox .edui-button').length).toBe(5);
                    flag = true;
                });
            }, 0)
        });
        waitsFor(function() {
            return flag;
        }, "editor should be small", 1000);
    }));

    it('should be ready callback', inject(function($timeout, $rootScope, $document, $compile) {
        var flag;
        runs(function() {
            elm.remove();
            scope.ready = function(editor){
                expect(editor).toBeDefined();
                flag = true
            }
            elm = angular.element(
                '<div class="ueditor" ready="ready" id="' + 'editor' + i + '" ng-model="test"></div>');

            $document.find('body').append(elm);

            $compile(elm)(scope);

            controller = elm.controller('ngModel');

            scope.$digest();
        });
        waitsFor(function() {
            return flag;
        }, "editor should be small", 1000);
    }));
});