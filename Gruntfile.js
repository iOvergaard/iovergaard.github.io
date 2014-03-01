module.exports = function(grunt) {

	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dev: {
				options: {
					bundleExec: true,
					environment: 'development'
				}
			},
			dist: {
				options: {
					bundleExec: true,
					environment: 'production'
				}
			}
		},

		jekyll: {
			options: {
				bundleExec: true
			},
			build: {
				options: {
					drafts: true
				}
			}
		},

		watch: {
			scripts: {
				files: 'sass/*.scss',
				tasks: ['compass:dev'],
				options: {
					spawn: false,
					atBegin: true
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 4000,
					base: '_site',
					keepalive: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['watch', 'jekyll:build']);
}