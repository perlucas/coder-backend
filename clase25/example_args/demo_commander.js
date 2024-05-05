const { Command } = require('commander')

const program = new Command()

program
    .description('Comando de prueba!')
    .option('-d', 'Activar el modo debug', false)
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('-m, --mode <mode>', 'Modo de ejecución', 'production')
    .option('-l, --letters [letters...]', 'Letras')
    .requiredOption('-u <user>', 'Usuario')

program.parse()

console.log(program.opts())

// Ver ayuda del comando con node .\demo_commander.js --help
// node .\demo_commander.js -u lucas -p 999 --mode dev -l a b c -d

// Ver soporte para argumentos con program.processedArgs y // .argument('<s>', 'Comando a ejecutar')