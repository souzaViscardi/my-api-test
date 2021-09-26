const funcionarioController = require('../../../controllers/Funcionario');
const { init } = require('../../../models/Funcionario');
const Funcionario = require('../../../models/Funcionario')
const mocks = require('./mock')
jest.mock('../../../models/Funcionario', () => {
    return {
        findAll: jest.fn().mockImplementation(() => {
            return mocks.findAll;
          }),
          destroy: jest.fn().mockImplementation(() => {
            return "destroy";
          }) ,
          init: jest.fn().mockImplementation(() => {
            return "init";
          }),
          update: jest.fn().mockImplementation(() => {
            return "update";
          }),
          create: jest.fn().mockImplementation(() => {
            return mocks.insert;
          })     
    }
  });
  


beforeEach(() => {
    // Limpa todas as instâncias e chamadas de construtor e todos os métodos:
    Funcionario.findAll.mockClear()
    Funcionario.destroy.mockClear()
    Funcionario.update.mockClear()
    Funcionario.create.mockClear()

  });

test('Funcionario List All', async () => {

    const response = await funcionarioController.listAll()

    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('body');
    expect(response.body).toHaveProperty('response');
    expect(response.body).toHaveProperty('message');
    expect(response.body).not.toBe("");
    expect(response).toHaveProperty('statusCode');
    expect(response.statusCode).toBe(200);

  });


  test('Funcionario List All db error', async () => {

    Funcionario.findAll = jest.fn().mockImplementation(() => {
      throw new Error("error");
    })

    const response = await funcionarioController.listAll()

    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('body');
    expect(response.body).not.toBe("");
    expect(response).toHaveProperty('statusCode');
    expect(response.statusCode).toBe(400);

  });


  test('Funcionario INSERT', async () => {

    const response = await funcionarioController.create({body: mocks.body})

    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('body');
    expect(response.body).toHaveProperty('response');
    expect(response.body).toHaveProperty('message');
    expect(response.body).not.toBe("");
    expect(response).toHaveProperty('statusCode');
    expect(response.statusCode).toBe(200);

  });

  test('Funcionario INSERT without payload', async () => {

    const response = await funcionarioController.create()

    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('body');
    expect(response.body).not.toBe("");
    expect(response).toHaveProperty('statusCode');
    expect(response.statusCode).toBe(400)

  });

  test('Funcionario INSERT db error', async () => {

    Funcionario.create = jest.fn().mockImplementation(() => {
      throw new Error("error");
    })

    const response = await funcionarioController.create({body: mocks.body})

    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('body');
    expect(response.body).not.toBe("");
    expect(response).toHaveProperty('statusCode');
    expect(response.statusCode).toBe(400);

  });

  test('Funcionario UPDATE', async () => {

    const response = await funcionarioController.update({body: mocks.body, params: {id:1}})
    
    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('body');
    expect(response.body).toHaveProperty('response');
    expect(response.body).toHaveProperty('message');
    expect(response.body).not.toBe("");
    expect(response).toHaveProperty('statusCode');
    expect(response.statusCode).toBe(200);

  });

  test.only('Funcionario UPDATE db error', async () => {

    Funcionario.update = jest.fn().mockImplementation(() => {
      throw new Error("error");
    })

    const response = await funcionarioController.update();

    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('body');
    expect(response.body).not.toBe("");
    expect(response).toHaveProperty('statusCode');
    expect(response.statusCode).toBe(400);

  });