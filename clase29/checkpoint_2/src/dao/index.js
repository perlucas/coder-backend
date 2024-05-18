const { BusinessDAO } = require("./mongo/business.dao");
const { OrderDAO } = require("./mongo/order.dao");
const { UserDAO } = require("./mongo/user.dao");

module.exports = {
    Business: BusinessDAO,
    User: UserDAO,
    Order: OrderDAO
}