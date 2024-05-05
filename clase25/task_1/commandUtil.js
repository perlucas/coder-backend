const { Command } = require('commander')

module.exports = function () {
    const program = new Command()

    program.option('-m, --mode <mode>', 'Modo de ejecución', 'development')

    program.parse()

    return program.opts()
}