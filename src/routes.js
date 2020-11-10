const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

// const User = require('./app/models/User');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const GreenController = require('./app/controllers/GreenController');
const ImgController = require('./app/controllers/ImgController');

const validateUserStore = require('./app/validators/UserStore');
// const validateUserUpdate = require('./app/validators/UserUpdate');
const validateSessionStore = require('./app/validators/SessionStore');
const validateGreenStore = require('./app/validators/GreenStore');
const validateGreenUpdate = require('./app/validators/GreenUpdate');

const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.post('/session', validateSessionStore, SessionController.store);

// routes.put('/users', authMiddleware, UserController.update);

routes.get('/green', GreenController.indexAll);
routes.get('/get-day', GreenController.index);

// aplica o middleware em todas as rotas abaixo
routes.use(authMiddleware);

// routes.put('/users', validateUserUpdate, UserController.update);

routes.post('/green', validateGreenStore, GreenController.store);
routes.delete('/green/:id', GreenController.delete);
routes.put('/green', validateGreenUpdate, GreenController.update);

routes.post('/imgs', upload.single('file'), ImgController.store);

module.exports = routes;
