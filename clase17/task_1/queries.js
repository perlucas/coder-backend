const { connectToDB, closeConnection } = require('../connection')
const Student = require('./student.model')

const main = async () => {
    await connectToDB('students')

    // estudiantes agrupados por calificación,mayor a menor
    const q1 = await Student.aggregate([
        {
            $group: {
                _id: '$grade',
                students: {
                    $push: '$$ROOT'
                }
            }
        },
        {
            $sort: {
                _id: -1
            }
        }
    ])
    console.log('1', q1)

    // estudiantes agrupados por grupo
    const q2 = await Student.aggregate([
        {
            $group: {
                _id: '$group',
                students: {
                    $push: '$$ROOT'
                }
            }
        }
    ])
    console.log('2', q2)

    //promedio del grupo 1B
    const q3 = await Student.aggregate([
        {
            $match: {
                group: '1B'
            }
        },
        {
            $group: {
                _id: '$group',
                promedio: {
                    $avg: '$grade'
                }
            }
        }
    ])
    console.log('3', q3)

    //promedio del grupo 1A
    const q4 = await Student.aggregate([
        {
            $match: {
                group: '1A'
            }
        },
        {
            $group: {
                _id: '$group',
                promedio: {
                    $avg: '$grade'
                }
            }
        }
    ])
    console.log('4', q4)

    //promedio general
    const q5 = await Student.aggregate([
        {
            $group: {
                _id: null, // no agrupamos por ningún campo
                promedio: {
                    $avg: '$grade'
                }
            }
        }
    ])
    console.log('5', q5)

    //promedio estudiantes varones
    const q6 = await Student.aggregate([
        {
            $match: {
                gender: 'M'
            }
        },
        {
            $group: {
                _id: null, // no agrupamos por ningún campo
                promedio: {
                    $avg: '$grade'
                }
            }
        }
    ])
    console.log('6', q6)

    //promedio estudiantes mujeres
    const q7 = await Student.aggregate([
        {
            $match: {
                gender: 'F'
            }
        },
        {
            $group: {
                _id: null, // no agrupamos por ningún campo
                promedio: {
                    $avg: '$grade'
                }
            }
        }
    ])
    console.log('7', q7)

    await closeConnection()
}

main()