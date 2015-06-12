 var ROUTE = angular.module('APP.route', ['ngRoute']);

 ROUTE.config(['$routeProvider', function($routeProvider) {
   $routeProvider
     .when('/', {
       templateUrl: 'views/index.html',
       controller: 'CTRL'
     })
     .when('/index2', {
       templateUrl: 'views/index2.html',
       controller: 'CTRL'
     })
     .otherwise({
       redirectTo: '/'
     });
 }]);


 var APP = angular.module('UeditorApp', ["ng.ueditor", 'APP.route']);

 APP.controller("CTRL", ["$scope", function($S) {
   $S._simpleConfig = {
     //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
     toolbars: [
       ['FullScreen', 'Source', 'Undo', 'Redo', 'Bold', 'test']
     ],
     //focus时自动清空初始化时的内容
     autoClearinitialContent: true,
     //关闭字数统计
     wordCount: false,
     //关闭elementPath
     elementPathEnabled: false
   };
   $S.content1 = 'Hello Ueditor';
   $S.content2 = 'Hello Ueditor Content2';
 }]);