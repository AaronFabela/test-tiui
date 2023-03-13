import express from 'express'
import morgan from 'morgan'
import entidadRoutes from './routes/entidad.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

// Routes
app.get('/', (req, res) => {
  res.json({
    author: 'Aaron Fabela',
    descripcion: 'Prueba Tecnica TIUI',
  })
})

// Entidad Routes
app.use('/api/entidad', entidadRoutes)

export default app
