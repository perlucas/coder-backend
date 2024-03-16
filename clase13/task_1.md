## Crear BD "colegio"

`use colegio`

## Crear colección "estudiantes"

`db.createCollection('estudiantes')`

## Insertar 5 estudiantes

```javascript
db.estudiantes.insertMany([
    {nombre:"Pedro", apellido: "Pérez", curso:"Programación Backend", edad: 27, correo: "pedro_p@gmail.com", sexo:"H"},
    {nombre:"María", apellido: "Fernández", curso:"Programación Frontend", edad: 24, correo: "maria_fz@gmail.com", sexo:"M"},
    {nombre:"Agustín", apellido: "Gutiérrez", curso:"Programación Backend", edad: 23, correo: "agus_gg@gmail.com", sexo:"H"},
    {nombre:"Horacio", apellido: "Gómez", curso:"Bases de datos", edad: 28, correo: "horacio_gz@gmail.com", sexo:"H"},
    {nombre:"Sofía", apellido: "Pérez", curso:"Diseño de GUI", edad: 27, correo: "sofi_1995@gmail.com", sexo:"M"}
])
```

## Insertar estudiante con nombre, apellido y curso
`db.estudiantes.insertOne({nombre:"Adrián", apellido: "López", curso:"Física cuántica"})`

## Listar todos los estudiantes
`db.estudiantes.find()`

## Listar sólo los estudiantes varones
`db.estudiantes.find({sexo:'H'})`

## Contar todos los documentos creados

`db.estudiantes.countDocuments()`

## Contar las estudiantes mujeres

`db.estudiantes.countDocuments({sexo:'M'})`