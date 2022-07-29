import express from 'express'
import { getOne } from '../controller/chistes.controler.js'


const router = express.Router()

router.route('/one')
    .get(getOne)



export default router