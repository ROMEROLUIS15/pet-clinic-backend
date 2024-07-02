import express from 'express'
import { router } from './routes/index.js'
import { AppError } from './common/error/appError.js'
import { globalErrorHandler } from './common/error/error.controller.js'
import morgan from 'morgan'
import { envs } from './config/enviroments/enviroments.js'
import { enableCors } from './config/plugins/cors.plugins.js'
const app = express()

const ACCEPTED_ORIGINS = [
    'http://localhost:3000', 
    'http://localhost:8080', 
    'http://localhost:5173',
]

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
enableCors(app, ACCEPTED_ORIGINS)


if(envs.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

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