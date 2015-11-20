module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    browserify: {
      main: {
        files:{
          "./app.js": ["./src/main.js"]
        },
        options: {
          browserifyOptions: {
            debug: true
          },
          transform: [["babelify", {presets: ["react"]}]]
        }
      }
    },

    watch: {
      server: {
        files: 'src/**/*',
        tasks: ['browserify'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', 'Builds the application.', ['browserify']);

  grunt.registerTask('b', 'Shortcut: Builds the application.', ['build']);
  grunt.registerTask('w', 'Shortcut: Starts a watch for the build process.', ['watch']);

  grunt.registerTask('default', ['build']);
};
