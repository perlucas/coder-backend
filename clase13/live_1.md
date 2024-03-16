## Crear BD "baseCRUD"

`use baseCRUD`

## Crear collection "mascotas"

`db.createCollection('mascotas')`

## Agregar 3 mascotas

```javascript
db.mascotas.insertMany([
    {nombre: "Firulais", edad: 5, especie: "perro"},
    {nombre: "Beto", edad: 7, especie: "perro"},
    {nombre: "Felipe", edad: 3, especie: "gato"}    
])
```

## Buscar mascotas por especie "perro"

`db.mascotas.find({especie: 'perro'})`

## Contar el número de mascotas

`db.mascotas.countDocuments()` o bien `db.mascotas.estimatedDocumentCount()`