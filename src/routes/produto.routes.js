import { Router } from 'express'
import { produtoValidator, produtoUpdateValidator, produtoIdValidator } from '../validators/produto.validators.js'

const router = Router()

router.get('/', ProdutoController.index)
router.post('/', produtoValidator, ProdutoController.create)
router.get('/:id', produtoIdValidator, ProdutoController.show)
router.patch('/:id', produtoUpdateValidator, ProdutoController.update)
router.delete('/:id', produtoIdValidator, ProdutoController.delete)

export default router 
