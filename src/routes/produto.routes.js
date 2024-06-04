import { Router } from 'express'
import { produtoValidator, produtoUpdateValidator, produtoIdValidator } from '../validators/produto.validators.js'
import ProdutoController from '../controllers/produto.controller.js'

const router = Router()

router.get('/', ProdutoController.index)
router.post('/', produtoValidator, ProdutoController.create)
router.get('/:id', produtoIdValidator, ProdutoController.show)
router.put('/:id', produtoUpdateValidator, ProdutoController.update)
router.delete('/:id', produtoIdValidator, produtoUpdateValidator, ProdutoController.delete)

export default router 
