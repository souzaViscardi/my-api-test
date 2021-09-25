const {Model, DataTypes} = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) {
        super.init({
            idade:DataTypes.INTEGER,
            nome:DataTypes.STRING,
            cargo: DataTypes.STRING,
        },
        {sequelize})
    }
}


module.exports = Funcionario;