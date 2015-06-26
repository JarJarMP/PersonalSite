module.exports = function(grunt) {

  // Use "copy" plugin to load files 
  // from third party libs into jekyll source folder
  grunt.initConfig({
    copy: {
      main: {
        files: [
          // materialize font files
          {
            expand: true, 
            cwd: 'jekyll_source/_third_party/materialize/dist/font/',
            src: ['**'], 
            dest: 'jekyll_source/font/'
          },
          // materialize js files
          {
            expand: true,
            cwd: 'jekyll_source/_third_party/materialize/dist/js/',
            src: 'materialize.min.js', 
            dest: 'jekyll_source/js/'
          },
        ],
      },
    },
  });

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy']);

};