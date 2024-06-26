export const globalErrorHandler = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'fail' // 'fail' = http 500

    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        //additionalMessage: err.additionalMessage
    })
}