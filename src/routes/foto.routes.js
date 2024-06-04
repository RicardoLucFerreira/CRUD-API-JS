import { Router } from 'express'
import FotoController from '../controllers/foto.controller.js'
import { fotoValidator, fotoUpdateValidator, fotoIdValidator } from '../validators/foto.validators.js'

const router = Router()

router.get('/', FotoController.index)
router.post('/', fotoUpdateValidator, FotoController.create)

export default router