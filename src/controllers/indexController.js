import { pool } from '../db.js'
export const ping= async(req,resp)=>{
    const [result]= await pool.query('SELECT "pong" AS result')
    resp.json(result[0])
}


export const ping2= async(req,resp)=>{
    const [result2]= await pool.query('SELECT "pong2" AS result2')
    resp.json(result2[0])
} 