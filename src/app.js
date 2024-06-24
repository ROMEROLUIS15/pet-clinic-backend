import express from 'express'
import cors from 'cors'
import { router } from './routes/index.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/v1', router)


app.all('/', (re,res) => {
    return res.send('Pet Clinic Backend')
})


export default app;