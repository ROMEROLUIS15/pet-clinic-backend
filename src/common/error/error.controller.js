import { envs } from "../../config/enviroments/enviroments.js"
import { AppError } from "./appError.js"
import Error from "./error.model.js"


//Function to validate DNI and EMAIL
 const handleCastError23505 = () => {
     return new AppError('Duplicate field value: enter another value', 400) //both way
 }

 const handleCastError22P02 = () => new AppError('Invalid data type in database', 400) //both way


const sendErrorDev = (err, res) => {

    //const errorMessage = err.parent && err.parent.detail ? err.parent.detail : err.message;

 
     return res.status(err.statusCode).json({
         status: err.status,
         message: err.message,
         //additionalMessage: err.additionalMessage = 'Pet Clinic Backend'
         stack: err.stack,
         err
     })
}


const sendErrorProd = async(err, res) => {

    await Error.create({
        status: err.status,
        message: err.message, // this save error in database
        stack: err.stack
    })
    
    if(err.isOperational){
        //operational, trusted error: send message to client
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            //additionalMessage: err.additionalMessage = 'Pet Clinic Backend'
            })
    } else {
        //programming or other unknown error: don't leak error details (post)
        console.log('ERROR:', err)
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong'
        })
    }
}



export const globalErrorHandler = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'fail' // 'fail' = http 500

    if(envs.NODE_ENV === 'development'){
        console.log('desarrollo')
      sendErrorDev(err, res)
    }

    if(envs.NODE_ENV === 'production'){

        let error = err
        
        if(err.parent?.code === '23505') error = handleCastError23505() //NEW ERROR PASSING THROUGH catchAsync.js
        if(err.parent?.code === '22P02') error = handleCastError22P02()
      sendErrorProd(error, res)
    }

}