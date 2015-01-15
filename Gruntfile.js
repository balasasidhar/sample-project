module.exports = function(grunt){
    
    grunt.initConfig({
        
        pkg : grunt.file.readJSON('package.json'),
        
        jade :{
            compile : {
                options : {
                    pretty : true
                },
                files : [{
                    expand : true,
                    cwd : './public/v/',
                    src : ['**/*.jade'],
                    dest : './build/',
                    ext : '.html'
                }]
            }
        },
        
        less : {
            compile : {
                files : [{
                    expand : true,
                    cwd : './public/l/',
                    src : ['**/*.less'],
                    dest : './build/css',
                    ext : '.css'
                }]
            }
        },
        
        watch : {
            jade : {
                files : ['./public/v/**/*.jade'],
                tasks : ['jade']
            },
            less : {
                files : ['./public/l/**/*.less'],
                tasks : ['less']
            }
        }
        
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default',['jade','less','watch']);
    
};