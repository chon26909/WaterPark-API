import { Router } from 'express';
import { login, loginWithGoogle, register } from '../controllers/authController';

const router = Router();
router.post('/login/google', loginWithGoogle);
router.post('/login', login);
router.post('/register', register);
export default router;
