const { connectToDB, closeConnection } = require('../connection')
const Order = require('./order.model')

const main = async () => {
    await connectToDB('aggregations')

    const results = await Order.aggregate([
        // obtener las órdenes medium
        {
            $match: {
                size: "medium"
            }
        },

        // sumar las unidades de cada orden agrupando por sabor
        {
            $group: {
                _id: '$name',
                totalQuantity: {
                    $sum: "$quantity"
                }
            }
        },

        // ordenar los resultados de mayor a menor por el total
        {
            $sort: {
                totalQuantity: -1
            }
        },

        // agrupar los resultados en un único documento
        {
            $group: {
                _id: null,
                data: {
                    $push: '$$ROOT'
                }
            }
        },

        // quitar el campo _id
        {
            $project: {
                _id: 0
            }
        },

        // setear la fecha del reporte
        {
            $set: {
                date: new Date()
            }
        },

        // insertar resultados en la colección reports
        {
            $merge: {
                into: 'reports'
            }
        }
    ])

    console.log(results)

    await closeConnection()
}

main()