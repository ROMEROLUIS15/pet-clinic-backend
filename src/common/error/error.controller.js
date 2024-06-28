import { envs } from "../../config/enviroments/enviroments.js"

const sendErrorDev = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        //additionalMessage: err.additionalMessage = 'Pet Clinic Backend'
        stack: err.stack,
        err
    })
}


const sendErrorProd = (err, res) => {
    // console.error('Error details:', JSON.stringify(err, null, 2)); // Log detallado

    //      if (err.name === 'SequelizeUniqueConstraintError') {
    //        let message = 'A unique constraint error occurred';
    //        if (err.errors && err.errors.length > 0) {
    //          const uniqueError = err.errors[0];
    //          if (uniqueError.path === 'email') {
    //            message = 'Email ya registrado';
    //         } else if (uniqueError.path === 'dni') {
    //       message = 'DNI ya registrado';
    //          }
    //        } else if (err.parent && err.parent.detail) {
    //          if (err.parent.detail.includes('email')) {
    //            message = 'Email ya registrado';
    //          } else if (err.parent.detail.includes('dni')) {
    //            message = 'DNI ya registrado';
    //          }
    //        }
    //        return res.status(400).json({
    //         status: 'fail',
    //          message,
    //        });
    //  }
    
}



export const globalErrorHandler = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'fail' // 'fail' = http 500

    if(envs.NODE_ENV === 'development'){
      sendErrorDev(err, res)
    }

    if(envs.NODE_ENV === 'production'){
   sendErrorProd(err, res)
    }

}