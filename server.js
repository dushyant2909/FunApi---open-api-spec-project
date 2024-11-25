import express from 'express'
import swaggerUi from 'swagger-ui-express'
import dotenv from 'dotenv'
import yaml from 'yamljs'
import jokesRouter from './routes/jokes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;

// Load swagger documentation
const swaggerDocument = yaml.load('./swagger/swagger.yaml')

// Middleware to serve Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Base route
app.get('/', (req, res) => {
    res.send("Welcome to FunApi! Go to /docs for API documentation")
})

app.use('/api/jokes', jokesRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})
