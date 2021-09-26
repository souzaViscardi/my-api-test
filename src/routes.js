const express = require('express');
const router = express.Router();
const Funcionarios = require('./controllers/Funcionario')

// define the home page route
router.use('/funcionario', router)

router.get('/list', async function(req, res) {
    const response = await Funcionarios.listAll(req)
    return res.json(response).status(response.statusCode)
});

router.post('/', async function(req, res) {
    const response = await Funcionarios.create(req)
    return res.json(response).status(response.statusCode)
});

router.put('/:id', async function(req, res) {
    const response = await Funcionarios.update(req)
    return res.json(response).status(response.statusCode)
});

router.delete('/:id', async function(req, res) {
    const response = await Funcionarios.remove(req)
    return res.json(response).status(response.statusCode)
});

module.exports = router;