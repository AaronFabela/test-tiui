import data from '../data/data.json'
import { body, param } from 'express-validator'
import { validateResult } from '../helpers/validate.helper.js'

// Validara que en el body se esten enviando los valores y tipo de datos correctos para crear una entidad
export const nuevaEntidad = () => {
  return [
    body('id')
      .trim()
      .exists()
      .notEmpty()
      .isNumeric()
      .withMessage('Ingresa un ID valido'),
    body('nombre')
      .trim()
      .exists()
      .notEmpty()
      .isString()
      .withMessage('Ingresa un nombre'),
    body('descripcion')
      .trim()
      .exists()
      .notEmpty()
      .isString()
      .withMessage('Ingresa una Descripcion'),
    body('fechaDeCreacion')
      .trim()
      .exists()
      .notEmpty()
      .isString()
      .withMessage('Ingresa una fecha'),
    (req, res, next) => {
      validateResult(req, res, next)
    },
  ]
}

// Validara que en el body se esten enviando los valores y tipo de datos correctos para actualizar una entidad
export const actualizarEntidad = () => {
  return [
    body('nombre')
      .trim()
      .exists()
      .notEmpty()
      .isString()
      .withMessage('Ingresa un nombre'),
    body('descripcion')
      .trim()
      .exists()
      .notEmpty()
      .isString()
      .withMessage('Ingresa una Descripcion'),
    body('fechaDeCreacion')
      .trim()
      .exists()
      .notEmpty()
      .isString()
      .withMessage('Ingresa una fecha'),
    (req, res, next) => {
      validateResult(req, res, next)
    },
  ]
}

// Validara que en el parametro @entidadId se envíe un dato correcto y que la entidad exsita en nuestros datos
export const buscarEntidad = () => {
  return [
    param('entidadId')
      .trim()
      .exists()
      .notEmpty()
      .withMessage('Ingresa un ID valido')
      .custom((value) => checkEntidad(value)),
    (req, res, next) => {
      validateResult(req, res, next)
    },
  ]
}

// Checara si la entidad existe o no en nuestos datos
const checkEntidad = (value) => {
  try {
    const isFound = data.some((element) => {
      console.log(element.id, parseInt(value))
      if (element.id === parseInt(value)) {
        return true
      }
      return false
    })
    if (!isFound) return Promise.reject('Entidad no encontrada')
    return true
  } catch (error) {
    return Promise.reject(error)
  }
}
