const express=require('express')
const { connection } = require('./db')
const { authenticate } = require('./middlewares/authenticate.middleware')
const { noteRouter } = require('./routes/Note.routes')
const { userRouter } = require('./routes/User.routes')
const cors=require('cors')

const app = express()
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.use('/users',userRouter)
app.use(authenticate)
app.use('/notes',noteRouter)

const port=8080
app.listen(port,async()=>{
    console.log(`server running on port ${port}`)
    try {
        await connection
        console.log('connected to database')
    } catch (error) {
        console.log(error.message)
    }
})