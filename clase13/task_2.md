## Crear colección "clientes"

`db.createCollection('clientes')`

## Insertar 5 clientes

```javascript
db.clientes.insertMany([
    { nombre : "Pablo", edad : 25 },
    { nombre : "Juan", edad : 22 },
    { nombre : "Lucia", edad : 25 },
    { nombre : "Juan", edad : 29 },
    { nombre : "Fede", edad : 35 }
])
```

## Listar todos los documentos de la colección clientes ordenados por edad descendente
`db.clientes.find().sort({edad:-1})`

## Listar el cliente más joven
`db.clientes.find().sort({edad:-1}).limit(1)`

## Listar el segundo cliente más joven
`db.clientes.find().sort({edad:-1}).limit(1).skip(1)`

## Listar los clientes llamados 'Juan'
`db.clientes.find({nombre:'Juan'})`

## Listar los clientes llamados 'Juan' que tengan 29 años
`db.clientes.find({  $and: [  {nombre:'Juan'}, {edad:29}   ]   })`

## Listar los clientes llamados 'Juan' ó 'Lucia'
` db.clientes.find({  $or: [  {nombre:'Juan'}, {nombre:'Lucia'}   ]   })`

## Listar los clientes que tengan más de 25 años
`db.clientes.find({edad: {$gt: 25} })`

## Listar los clientes que tengan 25 años ó menos
`db.clientes.find({edad: {$lte: 25} })`

## Listar los clientes que NO tengan 25 años
`db.clientes.find({edad: {$ne: 25} })`

## Listar los clientes que estén entre los 26 y 35 años
`db.clientes.find({$and: [     {edad: {$gte: 26}},   {edad: {$lte: 35}}         ]})`

## Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado
`db.clientes.updateOne({nombre: 'Fede'}, {$set: { edad:36 }})`

## Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado
`db.clientes.updateMany({edad:25}, {$inc: { edad:1 }})`

## Borrar los clientes que se llamen 'Juan' y listar verificando el resultado
`db.clientes.deleteMany({nombre:'Juan'})`

## Eliminar además todos los documentos de estudiantes que hayan quedado con algún valor
`db.estudiantes.deleteMany({})`
