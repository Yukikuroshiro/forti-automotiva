const { Op } = require("sequelize");
const Pedido = require("../models/Pedido");

module.exports = {
    async listarPedido(req, res){
        try {
            const cliente = req.query.nome;

            if(cliente){
                const pedidos = await Pedido.findAll({
                    where: {cliente: {
                        [Op.like]: `%${cliente}%`
                    }}
                });

                return res.send(pedidos);
            }

            const pedidos = await Pedido.findAll();
            res.send(pedidos);
        } catch (error) {
            console.log(error);
            res.status(500).send({error})            
        }
    },

    async criarPedido(req, res){
        const {cliente, produto, quantidade} = req.body;

        try{
            pedido = await Pedido.create({cliente, produto, quantidade});
            res.status(201).send(pedido);
        } catch (error) {
            console.log(error);
            res.status(500).send({error})            
        }
    }
};