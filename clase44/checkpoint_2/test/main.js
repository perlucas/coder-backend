const { bootstrap } = require("./app");

bootstrap()
    .then(app => app.listen(8080, () => console.log('Servidor listo!')))
    .catch(console.error)