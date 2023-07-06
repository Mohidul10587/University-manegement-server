import { Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getUsers = async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully get user',
    data: result,
  });
};

const createStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { student, ...userData } = req.body;

    const result = await UserService.createStudent(student, userData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully create user',
      data: result,
    });
  }
);

export const UserController = { createStudent, getUsers };
