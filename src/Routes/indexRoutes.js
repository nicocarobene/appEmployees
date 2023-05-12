import {Router} from 'express'
import { ping, ping2 } from '../controllers/indexController.js'

const indexRoute= Router()

indexRoute.get('/sql',ping)
indexRoute.get('/sql2',ping2)


export default indexRoute