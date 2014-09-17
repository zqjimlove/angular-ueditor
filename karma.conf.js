module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'http://cdn.staticfile.org/angular.js/1.2.18/angular.min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-mocks.js',
      'ueditor/ueditor.config.js',
      'ueditor/ueditor.all.js',
      'ueditor/lang/**/*.js',
      'ueditor/themes/**/*.css',
      'ueditor/third-party/codemirror/*.*',
      'ueditor/third-party/highcharts/highcharts.js',
      'ueditor/third-party/*.js',
      'ueditor/third-party/zeroclipboard/*.js',
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