const { Model, DataTypes } = require('sequelize')

class Donors extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            blood: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Donors