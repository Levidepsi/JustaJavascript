// const ErrorResponse = require('../utils/errorResponse');
// const asyncHandler = require('../middleware/async')
// const Bootcamp = require('../models/bootcamp')

// // @desk        Get courses
// // @route       get api/v1/courses
// // @route       get api/v1/bootcamps/:bootcampId/courses
// // @access      public

// exports.getCourses = asyncHandler(async (req, res, next) => {
//     let query;

//     if (req.params.bootcampId) {
//         query = Course.find({ bootcamp: req.params.bootcampId})
//     } else{
//         query = Course.find().populate('bootcamp')
//      path:'bootcamp',
//      select: 'name description'
//     }

//     const courses = await query;

//     res.status(200).json({
//         success: true,
//         count: courses.length,
//         data: courses
//     })
// })

// @desk        Get single courses
// // @route       get api/v1/courses
// // @route       get api/v1/bootcamps/:bootcampId/courses
// // @access      public

// exports.getCourse = asyncHandler(async (req, res, next) => {
//    const course = await Course.findById(req.params.id).populate({
//      path:'bootcamp'
        // select: 'name description'
// })
// if(!course) {
//     return next(new ErrorResponse(`No course with the id of ${req.params.id}`, 404))
// }

//     res.status(200).json({
//         success: true,
//         data: courses
//     })
// })

// @desk           add course
// // @route       get api/v1/courses
// // @route       get api/v1/bootcamps/:bootcampId/courses
// // @access      public

// exports.getCourse = asyncHandler(async (req, res, next) => {
//    const course = await Course.findById(req.params.id).populate({
//      path:'bootcamp'
        // select: 'name description'
// })
// if(!course) {
//     return next(new ErrorResponse(`No course with the id of ${req.params.id}`, 404))
// }

//     res.status(200).json({
//         success: true,
//         data: courses
//     })
// })