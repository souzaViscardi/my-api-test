const express = require('express')
const {Funcionario} = require("./src/models")
const app = express();
const port = 8000;

app.get('/', async (req, res) => {
  const funcionario = await Funcionario.findAll() 
  res.json(funcionario)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})