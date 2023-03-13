import data from '../data/data.json'
import config from '../config'
import jwt from 'jsonwebtoken'

// Nos permite obtener todas las entidades existentes
export const getEntidades = (req, res) => {
  try {
    res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({
      message: 'No hay datos',
    })
  }
}

// Nos permite obtener una entidad por ID
export const getEntidadByID = (req, res) => {
  const { entidadId } = req.params

  const entidadById = data.filter(
    (elemento) => elemento.id === parseInt(entidadId)
  )

  return res.status(200).json(entidadById)
}

// En el body debemos enviar el @id, @nombre, @descripcion y @fechaDeCreacion para poder utilizar este controlador y crear una nueva entidad
export const createEntidad = (req, res) => {
  try {
    const { id, nombre, descripcion, fechaDeCreacion } = req.body

    const newEntidad = {
      id: parseInt(id),
      nombre,
      descripcion,
      fechaDeCreacion,
    }

    data.push(newEntidad)

    res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({
      message: error,
    })
  }
}

// Como param debemos enviar el @id de la entidad a actualizar y en el body debemos enviar el @nombre, @descripcion y @fechaDeCreacion para poder utilizar este controlador y actualizar la entidad

export const updateEntidad = (req, res) => {
  try {
    const { entidadId } = req.params
    const { nombre, descripcion, fechaDeCreacion } = req.body

    data.map((elemento) => {
      if (elemento.id === parseInt(entidadId)) {
        elemento.nombre = nombre
        elemento.descripcion = descripcion
        elemento.fechaDeCreacion = fechaDeCreacion
      }
      return elemento
    })

    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}

// Como parametro debemos enviar el @id de la entidad a eliminar
export const deleteEntidadByID = (req, res) => {
  try {
    const { entidadId } = req.params

    data.splice(
      data.findIndex((elemento) => elemento.id === parseInt(entidadId)),
      1
    )

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({
      message: error,
    })
  }
}

// Este controlador nos permite generar un JWT que nos permitira acceder a los endpoints para crear, editar y eliminar una entidad

export const getJWT = (req, res) => {
  const token = jwt.sign({ user: 'Usuario TIUI' }, config.JWT, {
    expiresIn: 3600,
  })

  res.status(200).json({ token })
}
