import { pool } from '../db.js'


export const getEmployees= async(req,resp)=>{
    try{
        const [rows] = await pool.query("SELECT * FROM employee")
        resp.status(200).json(rows)
    }catch(error){
        return resp.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getEmployeeById= async(req,resp)=>{
    try{
        const { id } = req.params
        const [rows] = await pool.query(`SELECT * FROM employee WHERE ID = ${id}`)
        if(rows.length === 0) return resp.status(404).json({error: 'Employee not found'})
        resp.json(rows)
    }catch(error){
        console.log(error)
        return resp.status(500).json({
            message: 'Something goes wrong'
        })
    }
}


export const putEmployee= async(req,resp)=>{
    try{
        const {name, salary}=req.body
        const [rows] = await pool.query("INSERT INTO employee(name, salary) VALUE(? , ?)", [name, salary])
        resp.json({rows})
    }catch(error){
        console.log(error)
        return resp.status(500).json({
            message: 'Something goes wrong'
        })
    }
} 

export const deleteEmployee = async (req,resp)=>{
    try{
        const {id} = req.params
        const [ResultSetHeader]= await pool.query(`DELETE FROM employee WHERE id = ${id}`)
        if(ResultSetHeader.affectedRows === 0)return resp.status(404).json({error: 'Employee not found'})
        resp.status(204).send('Employee delete succesfull') 
    }catch(error){
        console.log(error)
        return resp.status(500).json({
            message: 'Something goes wrong'
        })
    }
} 

export const upDateEmployee= async(req,resp)=>{
    try{
        const {id}= req.params
        const { name, salary }= req.body
    
        const [ResultSetHeader]= await pool.query(`UPDATE employee SET name= ?, salary= ? WHERE id
        = ?;`, [name, salary, id])
    
        if(ResultSetHeader.affectedRows === 0)return resp.status(404).json({error: 'Employee not found'})    
        
        const [employee] = await pool.query(`SELECT * FROM employee WHERE ID = ?`,[id])
        
        resp.json(employee)
    }catch(error){
        console.log(error)
        return resp.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const upDateEmployeePatch= async(req, resp)=>{
    try{
        const {id}= req.params
    const { name, salary }= req.body

    const [ResultSetHeader]= await pool.query(`UPDATE employee SET name= IFNULL(?, name), salary= IFNULL(?, salary) WHERE id
    = ?;`, [name, salary, id])

    if(ResultSetHeader.affectedRows === 0)return resp.status(404).json({error: 'Employee not found'})    
    
    const [employee] = await pool.query(`SELECT * FROM employee WHERE ID = ?`,[id])
    
    resp.json(employee)
    }catch(error){
        console.log(error)
        return resp.status(500).json({
            message: 'Something goes wrong'
        })
    }
}