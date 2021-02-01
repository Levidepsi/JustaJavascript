
const errorHandler = (err, req, res, next) => {

   console.log(err.stack.red);
   
   res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;