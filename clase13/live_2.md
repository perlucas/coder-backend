## Insertar 3 estudiantes

```javascript
db.estudiantes.insertMany([
    {nombre:"Fernando", apellido: "Alfonso", curso:"Bases de datos", edad: 27, correo: "falfonso@gmail.com", sexo:"H"},
    {nombre:"Claudia", apellido: "Villareal", curso:"Programación Frontend", edad: 24, correo: "claudia_2001@gmail.com", sexo:"M"},
    {nombre:"Víctor", apellido: "Gutiérrez", curso:"Programación Backend", edad: 23, correo: "victor_guti@gmail.com", sexo:"H"}
])
```

## Insertar estudiante sólo con nombre
`db.estudiantes.insertOne({nombre:"Juan"})`

## Proyectar sólo los apellidos y ordenarlos
`db.estudiantes.find({}, { apellido: 1, _id: 0 }).sort({ apellido: 1 })`

## Proyectar nombre y apellido, ordenar por nombre y devolver desde el documento 7
` db.estudiantes.find({},{nombre:1, apellido:1}).sort({nombre:1}).skip(7)`

## Proyectar nombre y apellido, ordenar por nombre y devolver los primeros 3 documentos
` db.estudiantes.find({},{nombre:1, apellido:1}).sort({nombre:1}).limit(3)`