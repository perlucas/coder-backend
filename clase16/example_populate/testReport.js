const { connectToDB, closeConnection } = require('./connection')
require('./student.model')
const ReportModel = require('./report.model')

const main = async () => {
    await connectToDB()

    const reportId = '660b0ceda46e32dbcd0116dc'
    let report = await ReportModel.findOne({ _id: reportId })
    console.log(report)

    // asignar reporte al estudiante
    // utilizamos la operación $push que permite agregar un elemento a un campo que es un array. Agregamos el objeto {course: 'id curso'}
    const studentId = '660b0758c7e99c358932ed55'
    await ReportModel.updateOne({ _id: reportId }, { $set: { student: studentId } })

    // hacer que mongoose popule el campo courses, reemplazando cada referencia por el documento equivalente por el modelo de Course
    report = await ReportModel.find({ _id: reportId }).populate('student')
    console.log(JSON.stringify(report, null, 4))

    await closeConnection()
}

main()