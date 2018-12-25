const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearFile, listartabla} = require('./multiplica/multiplicar')

//let base ='ew';
//console.log(process.argv)
let argv2 = process.argv;
//console.log(argv);
//console.log('limite', argv.limite);
let comando = argv._[0];
switch(comando){
     case 'listar':
          listartabla(argv.base, argv.limite)

          break;
     case 'crear':
          crearFile(argv.base, argv.limite)
               .then( archivo => console.log('file '+ archivo.green+' creado'))
               .catch (e=> console.log(e));
          break;
     default:
          console.log('comando no existe');
}
//console.log(argv2);
/*let parametro =argv[2];
let base=parametro.split('=')[1]*/
//console.log(base)

/*crearFile(base)
   .then( archivo => console.log('file '+ archivo+' creado'))
   .catch (e=> console.log(e));
   */


   