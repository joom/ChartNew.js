module.exports = function(grunt) {
    // load tasks
    [   'grunt-contrib-uglify'
    ].forEach(function(task) {
        grunt.loadNpmTasks(task);
    });

    grunt.initConfig({
      uglify: {
        options: {
          compress: {
            drop_console: true
          }
        },
        source: {
          files: {
            'ChartNew.min.js': ['ChartNew.js']
          }
        }
      }
    });

    grunt.registerTask('default', ['uglify']);
};