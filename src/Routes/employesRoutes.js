import {Router} from 'express'
import { deleteEmployee, getEmployeeById, getEmployees, putEmployee, upDateEmployee, upDateEmployeePatch } from '../controllers/employeesController.js'

const employesRoutes= Router()

employesRoutes.get('/employees', getEmployees)

employesRoutes.get('/employee/:id', getEmployeeById)

employesRoutes.post('/employees',putEmployee)

employesRoutes.delete('/employee/:id', deleteEmployee)

employesRoutes.put('/employee/:id', upDateEmployee)

employesRoutes.patch('/employee/:id', upDateEmployeePatch)


export default employesRoutes