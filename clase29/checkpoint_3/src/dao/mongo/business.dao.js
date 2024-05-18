const BusinessModel = require('./models/business.model')

class BusinessDAO {

    async getBusinesses() {
        try {
            const businesses = await BusinessModel.find()
            return businesses.map(u => u.toObject())
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async getBusinessById(id) {
        try {
            const business = await BusinessModel.findById(id)
            return business?.toObject() ?? false
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async saveBusiness(business) {
        try {
            const savedBusiness = await BusinessModel.create(business)
            return savedBusiness.toObject()
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async updateBusiness(id, business) {
        try {
            const result = await BusinessModel.updateOne({ _id: id }, { $set: business })
            return result
        }
        catch (err) {
            console.error(err)
            return null
        }
    }
}

module.exports = { BusinessDAO }