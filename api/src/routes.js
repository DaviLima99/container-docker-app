const express = require('express');
const routes = express.Router();

const ActivityController = require('./controllers/ActivityController');

routes.post('/activity', ActivityController.create);
routes.get('/activity', ActivityController.index);
routes.delete('/activity/:id', IncidentController.show);

module.exports = routes;

