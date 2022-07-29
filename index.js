import express from 'express'
import router from './router/chistes.router.js'
import cors from 'cors'
import dotenv from 'dotenv' 

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

app.use('/jokes',router)



app.listen(process.env.PORT, ()=>{
    console.log('Server on!!!')
})