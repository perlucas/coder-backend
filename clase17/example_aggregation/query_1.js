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
        }
    ])

    console.log(results)

    await closeConnection()
}

main()