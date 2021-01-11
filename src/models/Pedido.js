const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {

    //Aqui inicializamos nossos campos da tabela
    static init(sequelize){
        super.init(
            {
                cliente: DataTypes.STRING,
                produto: DataTypes.STRING,
                quantidade: DataTypes.INTEGER,
            },
            {
                //tableName - serve para especificar o nome da tabela
                sequelize,
            }
        )
    }
    /*
        Aqui configuramos os relacionamentos
    */
    static associate(models){

    }
}

module.exports = Pedido;