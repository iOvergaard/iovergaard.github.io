module.exports = function(grunt) {

	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			options: {
				bundleExec: true,
				require: ['susy', 'breakpoint'],
				environment: 'production'
			},
			dev: {
				options: {
					environment: 'development'
				}
			},
			dist: {
				options: {
					force: true
				}
			}
		},

		jekyll: {
			options: {
				bundleExec: true
			},
			build: {
				options: {
					drafts: true,
					dest: './_dev'
				}
			},
			dist: {}
		},

		watch: {
			scripts: {
				files: 'sass/**/*.scss',
				tasks: ['compass:dev', 'jekyll:build'],
				options: {
					spawn: false,
					atBegin: true
				}
			},
			jekyll: {
				files: ['_layouts/**/*.html', '*.html'],
				tasks: ['jekyll:build'],
				options: {
					spawn: false,
					atBegin: false
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 4000,
					base: '_dev',
					keepalive: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('dist', ['compass:dist', 'jekyll:dist']);
}