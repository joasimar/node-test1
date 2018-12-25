const opt = {
     base: {
          demand: true,
          alias: 'b'
     },
     limite: {
          alias: 'l',
          default: 10
     }

}
const argv = require('yargs')
                    .command('listar','implimir consola',opt)
                    .command('creear','crea archivo',opt)
                    .argv;

module.exports = {
     argv
}