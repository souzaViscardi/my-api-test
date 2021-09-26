const {Funcionario} = require('../models');
const status = require("../config/status");

const listAll = async (req) => {
    try{
        const funcionarios = await Funcionario.findAll();
        return {
            statusCode: status.SUCCESS,
            body: {
                message: "Listado com sucesso",
                response: funcionarios,
            },
        };
    } catch(error){
        return {
            statusCode: status.ERROR,
            body: error.message,
        }
    }
}

const create = async (req) => {
    try {
        let body = req.body
        body.id && delete body.id

        const funcionarios = await Funcionario.create(body)
        return {
            statusCode: status.SUCCESS,
            body: {
                message: "Inserido com sucesso",
                response: funcionarios,
            },
        };
    } catch (error) {
        return {
            statusCode: status.ERROR,
            body: error.message
        }
    }
}

const remove = async (req) => {
    try {
        let {id} = req.params; 
        if(isNaN(id)) 
            throw new Error('Id do funcionario é obrigatorio');

        const funcionarios = await Funcionario.destroy({
            where: {
                id
            }
        })
        return {
            statusCode: status.SUCCESS,
            body: {
                message: "Removido com sucesso",
                response: funcionarios,
            },
        };
    } catch (error) {
        return {
            statusCode: status.ERROR,
            body: error.message,
        }
    }
}

const update = async (req) => {
    try {
        const body = req.body
        const {id} = req.params; 

        if(isNaN(id)) 
            throw new Error('Id do funcionario é obrigatorio');

        const funcionarios = await Funcionario.update(body, {
            where: {
                id
            }
        });
        return {
            statusCode: status.SUCCESS,
            body: {
                message: "Atualizado com sucesso",
                response: funcionarios,
            },
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
    create,
    remove,
    update
}