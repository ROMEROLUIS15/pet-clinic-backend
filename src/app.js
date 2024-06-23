import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes


app.all('/', (re,res) => {
    return res.send('Pet Clinic Backend')
})


export default app;