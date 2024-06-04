import { Router } from 'express'
import produtoRouter from './produto.routes.js'
import fotoRouter from './foto.routes.js'

const router = Router()

router.use('/produtos', produtoRouter)
router.use('/fotos', fotoRouter)

export default router