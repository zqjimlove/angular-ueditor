angular-ueditor
===============
**angular-ueditor** is a prot of Baidu [UEditor](http://ueditor.baidu.com)

The goal is to use UEditor whit angular easier

## Demo

http://zqjimlove.github.io/angular-ueditor/ 

## Installation

Include both the `javascript` file of [UEditor](http://ueditor.baidu.com):

```html
<script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="/ueditor/ueditor.all.js"></script>
```

Grab the latest release and `javascript` file:

```html
<script type="text/javascript" src="angular-ueditor.js"></script>
```

Then add `angular-ueditor` to your modules dependencies:

```js
angular.module('app', ['ng.ueditor'])
```

## Bower install

**You should include the `javascript` file of [UEditor](http://ueditor.baidu.com) by yourself,because the UEDitor not in Bower**

```Shell
bower install angular-ueditor --save
```

## Usage

#### Basic usage

**Must bind `NgModel`**

```html
<div class="ueditor" ng-model="content"></div>
```

#### Editor customization

You can customize the UEditor by [UE start config](http://fex-team.github.io/ueditor/#start-config)


```html
<div class="ueditor" config="config" ng-model="content"></div>
...
<script>
    $scope.config = {
        ...
    }
</script>
```

**If Element ID exists then the editor will keep save the status and content ** 

## Method

#### `ready(listener)`

Registers a listener callback to be executed whenever the editor ready.

##### Parameters

parame       |type                         |Details
-------------|-----------------------------|-------
listener     |function(editor)             |Callback called whenever the editor ready.

##### Example

```html
<div class="ueditor" ready="ready" ng-model="content"></div>
...
<script type="text/javascript">
    $scope.ready = function(editor){
        alert(editor.getContent());
    }
</script>
```

## Building

If you want to build from master, you need to:

```Shell
npm install
grunt
```

## Test

```Shell
npm install
npm test
```

## License

Mit License: http://www.opensource.org/licenses/mit-license.php