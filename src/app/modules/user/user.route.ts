import express from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.get('/', UserController.getUsers);
router.post(
  '/create-student',
  validateRequest(UserValidation.createStudentZodSchema),
  UserController.createStudent
);

router.post(
  '/create-faculty',
  // validateRequest(FacultyController.createFacultyZodSchema),
  UserController.createFaculty
);

// router.post(
//   '/create-admin',
//   validateRequest(UserValidation.createAdminZodSchema),
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   UserController.createAdmin
// );

export const UserRoutes = router;
