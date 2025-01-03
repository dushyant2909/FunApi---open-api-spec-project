import express from 'express'
import swaggerUi from 'swagger-ui-express'
import dotenv from 'dotenv'
import yaml from 'yamljs'
import jokesRouter from './routes/jokes.js'
import userRouter from './routes/users.js'
import quotesRouter from './routes/quotes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;

// Load swagger documentation
const swaggerDocument = yaml.load('./swagger/swagger.yaml')

// Middleware to serve Swagger UI
// Now / route will show api doc
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Base route
app.get('/', (req, res) => {
    res.send("Welcome to FunApi! Go to /docs for API documentation")
})

app.use('/api/jokes', jokesRouter)
app.use('/api/users', userRouter)
app.use('/api/quotes', quotesRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})
