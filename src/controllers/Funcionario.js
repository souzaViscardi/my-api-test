const {Funcionario} = require('../models');
const status = require("../config/status");

const listAll = async (event, context, callback) => {
    try{
        const funcionarios = await Funcionario.findAll();
        return {
            statusCode: status.SUCCESS,
            body: JSON.stringify({
                message: "Listado com sucesso",
                response: funcionarios,
            }),
        };
    } catch(error){
        return {
            statusCode: status.ERROR,
            body: error.message,
        }
    }
}

const insert = async (event, context, callback) => {
    try {
        let body = event.body

        const funcionarios = await Funcionario.create(body)
        return {
            statusCode: status.SUCCESS,
            body: JSON.stringify({
                message: "Inserido com sucesso",
                response: funcionarios,
            }),
        };
    } catch (error) {
        console.log(error)
        return {
            statusCode: status.ERROR,
            body: error.message
        }
    }
}

const remove = async (event, context, callback) => {
    try {
        let {
            id
        } = event.body
        const funcionarios = await Funcionario.destroy({
            where: {
                id
            }
        })
        return {
            statusCode: status.SUCCESS,
            body: JSON.stringify({
                message: "Removido com sucesso",
                response: funcionarios,
            }),
        };
    } catch (error) {
        return {
            statusCode: status.ERROR,
            body: error.message,
        }
    }
}

const update = async (event, context, callback) => {
    try {
        const body = event.body;
        const {
            id
        } = body
        delete body.id
        const funcionarios = await Funcionario.update(body, {
            where: {
                id
            }
        });
        return {
            statusCode: status.SUCCESS,
            body: JSON.stringify({
                message: "Atualixado com sucesso",
                response: funcionarios,
            }),
        };
    } catch (error) {
        return {
            statusCode: status.ERROR,
            body: error.message,
        }
    }
}

module.exports = {
    listAll,
    insert,
    remove,
    update
}