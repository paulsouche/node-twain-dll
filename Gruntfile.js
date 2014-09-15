module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jasmine_node: {
      options: {
        forceExit: true,
        specNameMatcher: 'Spec'
      },
      unit: ['test/unit/'],
      e2e: ['test/e2e/']
    },
    jshint: {
      module: {
        options: {
          jshintrc: '.jshintrc'
        },
        src : ['*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src : ['test/**/*.js']
      }
    },
    watch: {
      options : {
        interrupt: true
      },
      js: {
        files: ['*.js'],
        tasks: ['jshint:module','test:unit']
      },
      test: {
        files: ['test/**/*.js'],
        tasks: ['jshint:test','test:unit']
      }
    }
  });

  grunt.registerTask('dev',['watch']);
  grunt.registerTask('test:unit', ['jasmine_node:unit']);
  grunt.registerTask('test:e2e', ['jasmine_node:e2e']);



};