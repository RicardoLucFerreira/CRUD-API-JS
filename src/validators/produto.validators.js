import { body, param } from "express-validator"

export const produtoValidator = [
    body('nome').isString().withMessage('Nome é obrigatório'),
    body('preco').isNumeric().withMessage('Preco é obrigatorio'),
    body('descricao').isString().withMessage('Descricao é obrigatoria')
]

export const produtoUpdateValidator = [
    param('id').isInt().withMessage("ID é obrigatório"),
    body('nome').isString().withMessage('Nome é obrigatório'),
    body('preco').isNumeric().withMessage('Preco é obrigatorio'),
    body('descricao').isString().withMessage('Descricao é obrigatoria')
]

export const produtoIdValidator = [
    param('id').isInt().withMessage("Id é obrigatório")
]