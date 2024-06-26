import express from 'express'
import cors from 'cors'
import { router } from './routes/index.js'
import { AppError } from './common/error/appError.js'
import { globalErrorHandler } from './common/error/error.controller.js'
import morgan from 'morgan'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

//routes
app.use('/api/v1', router)


app.all('*', (req,res,next) => {
    //const err = new Error(`Route ${req.originalUrl} not found`)
    //err.status = 'error' // = http 400
    //err.statusCode = 404
    //err.additionalMessage = 'Pet Clinic Backend'
    //from error.controller.js, function globalErrorHandler

    return next(
        new AppError(`Route ${req.originalUrl} not found on this server`, 404))
})

app.use(globalErrorHandler)


export default app;