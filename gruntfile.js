module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
             dist: {
        src: [
            'js/vendor/*.js' // All JS in the libs folder
        ],
        dest: 'js/production.js',
    }
},

        uglify: {
    build: {
        src: 'js/production.js',
        dest: 'js/production.min.js'
    }
},

sass: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/build.css':'css/build.scss'
        }
    } 
},

watch: {
    options: {
        livereload: true,
    },
    scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
    },

        css: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
    }
}



    });

    // Load All NPM Dependencies
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify',, 'sass', 'watch']);

};