// import { IFaculty } from './faculty.interface';
// import { IUser } from '../user/user.interface';
// import config from '../../../config';

// const createFaculty = async (
//   faculty: IFaculty,
//   user: IUser
// ): Promise<IUser | null> => {
//   // If password is not given,set default password
//   if (!user.password) {
//     user.password = config.default_student_pass as string;
//   }
//   // set role
//   user.role = 'student';

//   //   const academicSemester = await AcademicSemester.findById(
//   //     student.academicSemester
//   //   ).lean();

//   //   let newUserAllData = null;
//   //   const session = await mongoose.startSession();
//   //   try {
//   //     session.startTransaction();
//   //     // generate student id
//   //     const id = await generateStudentId(academicSemester as IAcademicSemester);
//   //     // set custom id into both  student & user
//   //     user.id = id;
//   //     student.id = id;

//   //     // Create student using session
//   //     const newStudent = await Student.create([student], { session });

//   //     if (!newStudent.length) {
//   //       throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create student');
//   //     }

//   //     // set student _id (reference) into user.student
//   //     user.student = newStudent[0]._id;

//   //     const newUser = await User.create([user], { session });

//   //     if (!newUser.length) {
//   //       throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
//   //     }
//   //     newUserAllData = newUser[0];

//   //     await session.commitTransaction();
//   //     await session.endSession();
//   //   } catch (error) {
//   //     await session.abortTransaction();
//   //     await session.endSession();
//   //     throw error;
//   //   }

//   //   if (newUserAllData) {
//   //     newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
//   //       path: 'student',
//   //       populate: [
//   //         {
//   //           path: 'academicSemester',
//   //         },
//   //         {
//   //           path: 'academicDepartment',
//   //         },
//   //         {
//   //           path: 'academicFaculty',
//   //         },
//   //       ],
//   //     });
//   //   }

//   //   return newUserAllData;
//   return null;
// };

// export const FacultyService = { createFaculty };
