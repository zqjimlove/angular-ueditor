###*
Created by Dio on 17-9.
http://inhu.net
###
"use strict"
(->
    NGUeditor = angular.module "ng.ueditor",[]
    NGUeditor.directive "ueditorss",[
     ->
        restrict: "C"
        require: "ngModel"
        link:($S, element, attr, ctrl) ->
            class _NGUeditor
                constructor :->
                  @bindRender()
                  @initEditor()
                  return
                ###*
                 * 初始化编辑器
                 * @return {[type]} [description]
                ###
                initEditor : ->
                  _self = @
                  if typeof UE is 'undefined'
                    console.error "Please import the local resources of ueditor!"
                    return
                    # 新建UEditor，可根据API文档进行配置
                  @editor = new UE.ui.Editor()
                  @editor.render element[0]
                  @editor.ready ->
                    _self.editorReady = true
                    _self.setEditorContent()
                    # 监听编辑器内容改变事件
                    _self.editor.addListener "contentChange", ->
                      ctrl.$setViewValue _self.editor.getContent()
                      $S.$apply() unless $S.$$phase
                      return
                    return
                setEditorContent : (content =  @modelContent) ->
                  @editor.setContent content  if @editor and @editorReady
                  return
                bindRender : ->
                  _self = @
                  ctrl.$render = ->
                    _self.modelContent = (if ctrl.$isEmpty(ctrl.$viewValue) then "" else ctrl.$viewValue)
                    _self.setEditorContent()
                    return
                  return

              new _NGUeditor()
              return
    ]
    return
)()