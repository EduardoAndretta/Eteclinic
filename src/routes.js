import express from 'express';
import user from './controller/users/userController.js';
import login from './controller/login/loginController.js';
import profission from './controller/profission/profissionController.js';
import customer from './controller/customers/customerController.js';
import specialist from './controller/specialist/specialistController.js';

const router = express.Router();

router.use('/user', user);
router.use('/login', login);
router.use('/profission', profission);
router.use('/customer', customer);
router.use('/specialist', specialist);

export default router;