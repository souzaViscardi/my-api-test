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
        let body = JSON.parse(event.body)
        body.id && delete body.id

        const funcionarios = await Funcionario.create(body)
        return {
            statusCode: status.SUCCESS,
            body: JSON.stringify({
                message: "Inserido com sucesso",
                response: funcionarios,
            }),
        };
    } catch (error) {
        return {
            statusCode: status.ERROR,
            body: error.message
        }
    }
}

const remove = async (event, context, callback) => {
    try {
        let id = event.pathParameters.id
        console.log(event.pathParameters)
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
        const body = JSON.parse(event.body)
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
                message: "Atualizado com sucesso",
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