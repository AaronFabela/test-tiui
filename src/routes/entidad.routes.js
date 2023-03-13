import { Router } from 'express'
import * as entidadController from '../controllers/entidad.controllers.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import {
  nuevaEntidad,
  buscarEntidad,
  actualizarEntidad,
} from '../validators/entidad.validator.js'

const router = Router()

// RUTAS

// -GET
// Nos permite generar un jwt para acceder a los demas endpoints
router.get('/jwt', entidadController.getJWT)
// Nos permite obtener todas las entidades
router.get('/', entidadController.getEntidades)
// Nos permite obtener una entidad por Id
router.get('/:entidadId', buscarEntidad(), entidadController.getEntidadByID)

// -POST
// Nos permite crear una nueva entidad
router.post('/', verifyToken, nuevaEntidad(), entidadController.createEntidad)

// -PUT
// Nos permite modificar una entidad existente
router.put(
  '/:entidadId',
  verifyToken,
  buscarEntidad(),
  actualizarEntidad(),
  entidadController.updateEntidad
)

// -DELETE
// Nos permite eliminar una entidad existente
router.delete(
  '/:entidadId',
  verifyToken,
  buscarEntidad(),
  entidadController.deleteEntidadByID
)

export default router
