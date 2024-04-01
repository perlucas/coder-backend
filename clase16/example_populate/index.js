const { connectToDB, closeConnection } = require('./connection')
require('./course.model')
const StudentModel = require('./student.model')

const main = async () => {
    await connectToDB()

    const studentId = '660b0758c7e99c358932ed55'
    let student = await StudentModel.findOne({ _id: studentId })
    console.log(student)

    // agregar un curso al estudiante
    // utilizamos la operación $push que permite agregar un elemento a un campo que es un array. Agregamos el objeto {course: 'id curso'}
    // const courseId = '660b0757c7e99c358932ed51'
    //await StudentModel.updateOne({ _id: studentId }, { $push: { courses: { course: courseId } } })

    // hacer que mongoose popule el campo courses, reemplazando cada referencia por el documento equivalente por el modelo de Course
    student = await StudentModel.find({ _id: studentId }).populate('courses.course')
    console.log(JSON.stringify(student, null, 4))

    await closeConnection()
}

main()