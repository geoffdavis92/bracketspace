module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			sass: {
				files: ['sass/**/*.sass'],
				tasks: ['sass']
			},
			pages: {
				files: ['pages/**/*'],
				tasks: ['copy:pages']
			}
		},
		copy: {
			pages: {
				files: [{
					expand: true,
					cwd: './pages',
					src: ['**/*'],
					dest: 'app/public'
				}]
			}
		},
		sass: {
			all: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: './sass',
					src: ['./*.sass','./components/*.sass','./views/*.sass'],
					dest: 'app/src/css',
					ext: '.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default',['watch']);
}