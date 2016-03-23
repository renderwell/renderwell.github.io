module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true
                },
                files: {
                    'css/app.css': '_scss/app.scss'
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            sass: {
                files: '_scss/**/*.scss',
                tasks: ['sass']
            },
            js: {
                files: '_js/*.js',
                tasks: ['copy:js']
            },
            fontello: {
                files: '_scss/fontello/css/*.scss',
                tasks: ['copy:fontello']
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            foundation: {
                src: [
                    'bower_components/foundation/js/vendor/fastclick.js',
                    'bower_components/foundation/js/vendor/placeholder.js',
                    'bower_components/foundation/js/foundation/foundation.js',
                    'bower_components/foundation/js/foundation/foundation.tab.js',
                    'bower_components/foundation/js/foundation/foundation.topbar.js',
                    'bower_components/foundation/js/foundation/foundation.offcanvas.js',
                    'bower_components/foundation/js/foundation/foundation.equalizer.js'
                ],
                dest: 'js/foundation.js',
            },
            app: {
                src: [
                    'bower_components/jquery-cycle2/build/jquery.cycle2.js',
                    '_js/app.js'
                ],
                dest: 'js/app.js',
            }
        },

        copy: {
            fontello: {
                files: [
                    {
                        expand: true,
                        cwd: '_scss/fontello/font',
                        src: [
                            '**/*' // copy everything
                            ],
                        dest: 'css/fontello/font'
                    }
                ]
            },
            js: {
                files: [
                    {
                        expand: true,
                        cwd: '',
                        src: [
                            'bower_components/foundation/js/vendor/jquery.js',
                            'bower_components/foundation/js/vendor/modernizr.js'
                            //'bower_components/react/react.js',
                            //'bower_components/react/react-dom.js',
                            //'_js/app-react.js'
                            ],
                        flatten: true,
                        filter: 'isFile',
                        dest: 'js'
                    }
                ]
            }
        },
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['sass', 'concat', 'copy']);
    grunt.registerTask('default', ['build', 'watch']);
}
