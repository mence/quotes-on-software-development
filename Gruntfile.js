module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      main: {
        files: {
          './app.js': ['./src/main.js'],
        },
        options: {
          transform: [
            ['babelify', { presets: [ 'react' ] }],
            ['uglifyify'],
          ],
        },
      },
    },

    eslint: {
      target: [
        'src/**/*.js',
        'Gruntfile.js',
      ],
    },

    jsonlint: {
      main: {
        src: [ 'src/assets/quotes.json' ],
      },
    },

    watch: {
      server: {
        files: 'src/**/*',
        tasks: ['browserify'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', 'Builds the application.', ['browserify']);
  grunt.registerTask('test', 'Tests the application.', ['lint']);
  grunt.registerTask('lint', 'Lints the application.', ['eslint', 'jsonlint']);

  grunt.registerTask('b', 'Shortcut: Builds the application.', ['build']);
  grunt.registerTask('w', 'Shortcut: Starts a watch for the build process.', ['watch']);
  grunt.registerTask('t', 'Shortcut: Runs tests.', ['test']);
  grunt.registerTask('l', 'Shortcut: Lints the application.', ['lint']);

  grunt.registerTask('default', ['test', 'build']);
};
