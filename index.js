require('./src/database')
const express = require('express')
const app = express();
const serverless = require('serverless-http');
const routes = require('./src/routes.js')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const SwaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'funcionarios API',
      description: 'test for job',
      contact: {
        name: 'kevin viscardi'
      },
      servers:['http://localhost:3000']
    }
  },
  apis:['src/routes.js']
}
const swaggerDocs = swaggerJsDoc(SwaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocs));
app.use(routes);

module.exports.handler = serverless(app);