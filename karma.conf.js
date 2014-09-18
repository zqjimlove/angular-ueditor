module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'http://cdn.staticfile.org/angular.js/1.2.18/angular.min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-mocks.js',
      'http://ueditor.baidu.com/ueditor/ueditor.config.js',
      'http://ueditor.baidu.com/ueditor/ueditor.all.js',
      'http://cdn.staticfile.org/jquery/2.1.1-rc2/jquery.js',
      'dist/angular-ueditor.js',
      'tests/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};