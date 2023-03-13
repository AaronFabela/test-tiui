import jwt from 'jsonwebtoken'
import config from '../config'

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    console.log(token)

    if (!token)
      return res.status(403).json({
        message: 'No se ingreso un token',
      })

    const decoded = jwt.verify(token, config.JWT)

    if (decoded.user !== 'Usuario TIUI')
      return res.status(404).json({
        message: 'Usuario no encontrado',
      })
    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Acceso denegado',
    })
  }
}
