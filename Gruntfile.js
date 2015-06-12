'use strict';


module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        src: 'src',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({
        config: appConfig,
        // Copies remaining files to places other tasks can use
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/{,*/}*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '.tmp',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.map',
                        '*.js'
                    ]
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= config.dist %>/angular-ueditor.min.js': ['<%= config.dist %>/*.js']
                }
            }
        },
        coffee: {
            options: {
                sourceMap: true,
                sourceRoot: ''
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>',
                    src: '*.coffee',
                    dest: '.tmp',
                    ext: '.js'
                }]
            }
        },
        watch: {
            coffee: {
                files: ['<%= config.src %>/*.coffee'],
                tasks: ['coffee']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'sample/**/*.html',
                    '.tmp/**/*.js'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: false,
                    middleware: function(connect) {
                        return [
                            connect.static('sample'),
                            connect.static('.tmp'),
                            connect.static('src')
                        ];
                    }
                }
            }
        }
    });



    grunt.registerTask('build', [
        'clean:dist',
        'coffee:dist',
        'copy:dist',
        'uglify:dist'
    ]);

    grunt.registerTask('serve', 'DEPRECATED TASK. Use the "serve" task instead', function(target) {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'build'
    ]);
};