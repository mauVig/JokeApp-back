import express from 'express'
import router from './router/chistes.router.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

app.use('/jokes',router)



app.listen(80, ()=>{
    console.log('Server on!!!')
})