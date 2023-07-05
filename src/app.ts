import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
import { generateFacultyId } from './app/modules/user/user.utils';

// import { ApiError } from './error/ApiError'

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);

// app.use('/api/v1/academic-semester', AcademicSemesterRoutes);
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing Error logger')
// })

app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

// const academicSemester = {
//   code: '03',
//   year: '2025',
// };yguu v .

const testId = async () => {
  const testId = await generateFacultyId();
  console.log(testId);
};

testId();

export default app;
