import { validationResult } from 'express-validator'

// Validara los resultados, dando paso a siguientes controladores o validadores en caso de que todo este correcto
export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ errors: error.array() })
  }
}
