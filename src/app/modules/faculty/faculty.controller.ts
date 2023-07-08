// import { Request, RequestHandler, Response } from 'express';
// import sendResponse from '../../../shared/sendResponse';
// import catchAsync from '../../../shared/catchAsync';
// import httpStatus from 'http-status';
// import { FacultyService } from './faculty.service';

// const createFaculty: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const payloads = req.body;

//     const result = await FacultyService.createFaculty(payloads);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Successfully create user',
//       data: result,
//     });
//   }
// );

// export const FacultyController = { createFaculty };
