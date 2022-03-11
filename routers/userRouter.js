import Router from 'express';
import authHandler from '../middleware/authHandler.js'
import addTimestamp from '../middleware/addTimestamp.js'
import userHandler from '../middleware/userHandler.js'
import userController from '../controllers/userController.js';



const router = Router();

router.use(userHandler);

router.route('/register')
.post(authHandler)
.post(addTimestamp)
.post(userController.register);


router.route('/login')
.post(userController.login);

export default router;
