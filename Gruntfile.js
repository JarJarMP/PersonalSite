module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './sass/',
          src: ['*.scss'],
          dest: './',
          ext: '.css'
        }],
        options: {
          style: 'compressed',
          sourcemap: 'none'
        }
      }
    },

    watch: {
      files: {
        files: ['sass/**.*'],
        tasks: ['build']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('dev', ['build', 'watch']);
};
