import {createPool} from 'mysql2/promise'
import { DATABASE, HOST, PASSWORD, PORT_DB, USER } from './config.js'

export const pool=  createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: PORT_DB,
    database: DATABASE
})
