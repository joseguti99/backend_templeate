import { Router } from 'express';
import { UserController } from './controller.ts';
import { validateDTO } from '../../middlewares/validateDTO.ts'
import { GetUserDTO } from './dto.ts';

const router = Router();

const userController = new UserController();

router.get('/user', validateDTO(GetUserDTO), userController.getAllUsers.bind(userController));

export default router;
