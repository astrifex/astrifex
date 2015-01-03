module.exports = function (grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    broccoli: {
      release: {
        dest: 'release',
        env: 'production'
      },
      dev: {
        dest: 'build'
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    },
    'gh-pages': {
      options: {
        base: 'release',
        repo: 'https://github.com/astrifex/astrifex.github.io.git',
        branch: 'master'
      },
      src: ['**']
    }
  });

  // Default task(s).
  grunt.registerTask('default', ["broccoli:dev:serve"]);
};
