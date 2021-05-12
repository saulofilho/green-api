const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const GreenController = require('./app/controllers/GreenController');
const ProjectController = require('./app/controllers/ProjectController');
const ImgController = require('./app/controllers/ImgController');
const CalendarController = require('./app/controllers/CalendarController');
const WebhookController = require('./app/controllers/WebhookController');
const PaymentsController = require('./app/controllers/PaymentsController');

const validateUserStore = require('./app/validators/UserStore');
const validateUserUpdate = require('./app/validators/UserUpdate');
const validateSessionStore = require('./app/validators/SessionStore');

const validateProjectStore = require('./app/validators/ProjectStore');
const validateProjectUpdate = require('./app/validators/ProjectUpdate');
const validateCalendarStore = require('./app/validators/CalendarStore');
const validateCalendarUpdate = require('./app/validators/CalendarUpdate');
const validateCalendarDelete = require('./app/validators/CalendarDelete');

const validateGreenStore = require('./app/validators/GreenStore');
const validateGreenUpdate = require('./app/validators/GreenUpdate');

const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();
const upload = multer(multerConfig);

// mercadopago
routes.post('/mercadopago', WebhookController.store);
routes.post('/payments', PaymentsController.store);

// create user
routes.post('/users', validateUserStore, UserController.store);
routes.post('/session', validateSessionStore, SessionController.store);

// apply middleware
routes.use(authMiddleware);

routes.get('/mercadopago', WebhookController.index);

routes.get('/admins', UserController.indexAll);

routes.get('/user', UserController.index);
routes.put('/users', validateUserUpdate, UserController.update);
routes.delete('/user/:email', UserController.delete);

routes.get('/harvests', ProjectController.indexAll);
routes.get('/harvest/:id', ProjectController.index);
routes.post('/harvest', validateProjectStore, ProjectController.store);
routes.delete('/harvest/:id', ProjectController.delete);
routes.put('/harvest/:id', validateProjectUpdate, ProjectController.update);

routes.get('/green/:id', GreenController.index);
routes.post('/green', validateGreenStore, GreenController.store);
routes.put('/green/:id', validateGreenUpdate, GreenController.update);

routes.get('/calendar', CalendarController.index);
routes.post('/calendar', validateCalendarStore, CalendarController.store);
routes.put('/calendar/:id', validateCalendarUpdate, CalendarController.update);
routes.delete(
  '/calendar/:id',
  validateCalendarDelete,
  CalendarController.delete
);

routes.post('/imgs', upload.single('file'), ImgController.store);

module.exports = routes;
