import express from 'express'
import cors from 'cors'
import indexRoute from './Routes/indexRoutes.js'
import employesRoutes from './Routes/employesRoutes.js'
import { PORT } from './config.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use(indexRoute)
app.use('/api',employesRoutes)

app.use((req,resp,next)=>{
    resp.status(404).json({
        message: "endpoint not found"
    })
})


app.listen(PORT, ()=>{
    console.log(`Server listen un PORT ${process.env.PORT}🚀`)
})