const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const geocoder = require('../utils/geocoder')
const Bootcamp = require('../models/bootcamp')


exports.getBootcamps = asyncHandler(async (req, res, next) =>{
        let query;
        
        // Copy req.query
        const reqQuery = { ...req.query }

        // Fields to exclude

        const removeFields = ['select', 'sort', 'page', 'limit']

        // Loop over removeFields and delete them from reqQuery 
        removeFields.forEach(param => delete reqQuery[param])  
        // Create Query String
        let queryStr = JSON.stringify(reqQuery)

        // Create operators($gt, $gte, etc)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

        // Finding resource
        query = Bootcamp.find(JSON.parse(queryStr))
       
        // Select fields
        if(req.query.select){
            const fields = req.query.select.split(',').join(' ');
            
            console.log(fields)
        }

        // Select Sorting 
            if (req.query.sort) {
                const sortBy = req.query.sort.splt(',').join('')
                query = query.sort(sortBy)
            } else {
                query = query.sort('-createdAt')
            }
        
        // Pagination
        const page = parseInt(req.query.page, 10)|| 1;
        const limit = parseInt(req.query.limit, 10)|| 100;
        const skip = (page -1) * limit;
        
        // Executing query
        const bootcamps = await query;
       
        res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps})
   
})


exports.getBootcamp = asyncHandler(async (req, res, next) =>{
    
        const bootcamp = await Bootcamp.findById(req.params.id)
        
        if(!bootcamp) {
            return  next(new ErrorResponse(`Bootcamp not found with id of${req.params.id}`, 404));
        }
        
        res.status(200).json({ success: true, data: bootcamp })
   
    
});

exports.createBootcamp = asyncHandler(async (req, res, next) =>{
   

    const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({
        success: true,
        data: bootcamp

        });
});  

exports.updateBootcamp = asyncHandler(async(req, res, next) =>{

        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!bootcamp) {
            return  next(new ErrorResponse(`Bootcamp not found with id of${req.params.id}`, 404));
        }
        res.status(200).json({success: true, data:bootcamp})
   
})

exports.deleteBootcamp = asyncHandler(async(req, res, next) =>{
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if(!bootcamp) {
        return next(
            new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)

        )
    }
    res.status(200).json({ success: true, data: {}})
})


exports.getBootcampsInRadius = asyncHandler(async(req, res, next) => {
   
      const {zipcode, distance} = req.params;

    //   Get lat/lng from geocoder
    const loc = await geocoder.geocode(zipcode)
    const lat = loc[0].latitude;
    const lng = loc[0].longitude
    // Calc radius using radians
    // Divide Dist by radius of earth
    // Earth = 3,963 mi / 6,378km

    const radius = distance / 3963

    const bootcamps = await Bootcamp.find({
        location: { $geoWithin: {$centerSphere: [[ lng, lat], radius] } }
    })

    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    })
})
