const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const GreenController = require('./app/controllers/GreenController');
const ProjectController = require('./app/controllers/ProjectController');
const ImgController = require('./app/controllers/ImgController');

const validateUserStore = require('./app/validators/UserStore');
const validateSessionStore = require('./app/validators/SessionStore');

const validateProjectStore = require('./app/validators/ProjectStore');

const validateGreenStore = require('./app/validators/GreenStore');
const validateGreenUpdate = require('./app/validators/GreenUpdate');

const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.post('/session', validateSessionStore, SessionController.store);

// aplica o middleware em todas as rotas abaixo
routes.use(authMiddleware);

routes.get('/user', UserController.index);

routes.get('/projects', ProjectController.indexAll);
routes.get('/project/:id', ProjectController.index);
routes.post('/project', validateProjectStore, ProjectController.store);
routes.delete('/project/:id', ProjectController.delete);
routes.put('/project/:id', validateGreenUpdate, ProjectController.update);

routes.get('/greens', GreenController.indexAll);
routes.get('/green/:id', GreenController.index);
routes.get('/teste', GreenController.teste);
routes.post('/green', validateGreenStore, GreenController.store);
routes.delete('/green/:id', GreenController.delete);
routes.put('/green/:id', validateGreenUpdate, GreenController.update);

routes.post('/imgs', upload.single('file'), ImgController.store);

module.exports = routes;
