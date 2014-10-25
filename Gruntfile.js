module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['libs/jquery-1.7.1.min.js', 'libs/astar.js', 'src/game.js'],
        dest: 'build/script.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/script.js',
        dest: 'build/script.min.js'
      }
    },
    watch: {
      scripts: {
        files: 'src/*.js',
        tasks: ['default']
      }
    },
    connect: {
      server: {
        options: {
          port: 4000,
          keepalive: true,
          base: '',
          hostname: '*'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat', 'uglify']);

};