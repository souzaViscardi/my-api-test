const findAll = [{
    "id": 2,
    "idade": 50,
    "nome": "Genevive",
    "cargo": "assistente",
    "createdAt": "2021-09-25T00:49:21.000Z",
    "updatedAt": "2021-09-25T01:04:55.000Z"
}, {
    "id": 3,
    "idade": 26,
    "nome": "kevin viscardi",
    "cargo": "DEV",
    "createdAt": "2021-09-25T00:53:17.000Z",
    "updatedAt": "2021-09-25T00:53:17.000Z"
}]
 const insert = {
    "message": "Inserido com sucesso",
    "response": {
        "id": 7,
        "idade": 50,
        "nome": "rodnei",
        "cargo": "faz tudo",
        "updatedAt": "2021-09-25T20:19:53.821Z",
        "createdAt": "2021-09-25T20:19:53.821Z"
    }
}

const body = `{
    "idade":50,
    "nome": "rodnei",
    "cargo": "faz tudo",
    "id":1
}`
module.exports = {
    findAll,
    insert,
    body
}