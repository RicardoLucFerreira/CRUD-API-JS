import { body, param } from "express-validator"

export const fotoValidator = [
    body('title').isString().withMessage('Titulo é obrigatório'),
    body('url').isString().withMessage('URL é obrigatorio'),
    body('produtoId').isString().withMessage('Produto ID é obrigatorio')
]

export const fotoUpdateValidator = [
    body('titulo').isString().withMessage('Titulo é obrigatório'),
    body('url').isString().withMessage('URL é obrigatorio'),
    body('produtoId').isNumeric().withMessage('Produto ID é obrigatoria')
]

export const fotoIdValidator = [
    param('id').isInt().withMessage("Id é obrigatório")
]