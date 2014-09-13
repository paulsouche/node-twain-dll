module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
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
        tasks: ['jshint:module']
      },
      test: {
        files: ['test/**/*.js'],
        tasks: ['jshint:test']
      }
    }
  });
};