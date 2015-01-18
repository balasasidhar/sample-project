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
                    cwd : './public/l/src',
                    src : ['base.less'],
                    dest : './build/css',
                    ext : '.css'
                }]
            }
        },
        
        copy :{
            scripts : {
                files :[{
                    expand : true,
                    cwd : './public/j/',
                    src : '**',
                    dest : './build/js'
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
            },
            copy :{
                files : ['./public/j/**/*.js'],
                tasks : ['copy']
            },
            
        }
        
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default',['jade','less','copy','watch']);
    
};