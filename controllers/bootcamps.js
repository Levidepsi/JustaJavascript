// @desc Get all bootcamps
// @route Get /api/v1/bootcamps
// @access Public

exports.getBootcamps = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: 'show all bootcamps', hello: req.hello})
}

// @desc Get single all bootcamps
// @route Get /api/v1/bootcamps/:id 
// @access Public

exports.getBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}`})
}


// @desc create new bootcamp
// @route POst /api/v1/bootcamps
// @access Private

exports.createBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: 'Create new bootcamp'})
}

// @desc update new bootcamp
// @route Put /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}`})
}

// @desc Delete new bootcamp
// @route Delete /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: `Delete bootcamps ${req.params.id}`})
}
