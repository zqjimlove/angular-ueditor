
/**
Created by Dio on 17-9.
http://inhu.net
 */

(function() {
  "use strict";
  (function() {
    var NGUeditor;
    NGUeditor = angular.module("ng.ueditor", []);
    NGUeditor.directive("ueditorss", [
      function() {
        return {
          restrict: "C",
          require: "ngModel",
          link: function($S, element, attr, ctrl) {
            var _NGUeditor;
            _NGUeditor = (function() {
              function _NGUeditor() {
                this.bindRender();
                this.initEditor();
                return;
              }


              /**
               * 初始化编辑器
               * @return {[type]} [description]
               */

              _NGUeditor.prototype.initEditor = function() {
                var _self;
                _self = this;
                if (typeof UE === 'undefined') {
                  console.error("Please import the local resources of ueditor!");
                  return;
                }
                this.editor = new UE.ui.Editor();
                this.editor.render(element[0]);
                this.editor.ready(function() {
                  _self.editorReady = true;
                  _self.setEditorContent();
                  return _self.editor.addListener("contentChange", function() {
                    ctrl.$setViewValue(editor.getContent());
                    if (!$S.$$phase) {
                      $S.$apply();
                    }
                  });
                });
              };

              _NGUeditor.prototype.setEditorContent = function(content) {
                if (content == null) {
                  content = this.modelContent;
                }
                if (this.editor && this.editorReady) {
                  this.editor.setContent(content);
                }
              };

              _NGUeditor.prototype.bindRender = function() {
                var _self;
                _self = this;
                ctrl.$render = function() {
                  var _ref;
                  _self.modelContent = (ctrl.$isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue);
                  if ((_ref = _self.editor) != null) {
                    _ref.setEditorContent();
                  }
                };
              };

              return _NGUeditor;

            })();
            new _NGUeditor();
          }
        };
      }
    ]);
  })();

}).call(this);

//# sourceMappingURL=ueditor.js.map
