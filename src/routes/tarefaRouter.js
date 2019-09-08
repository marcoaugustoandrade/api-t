const express = require('express')
const router = express.Router()
const tarefaController = require('../controllers/tarefaController')
const tarefaValidation = require('../util/tarefaValidation')

router.get('/', tarefaController.listar)
router.get('/:id', tarefaValidation.listarPorId, tarefaController.listarPorId)
router.post('/', tarefaValidation.inserir, tarefaController.inserir)
router.put('/:id', tarefaValidation.alterar, tarefaController.alterar)
router.delete('/:id', tarefaValidation.deletar, tarefaController.deletar)

module.exports = router


// const { check, validationResult } = require('express-validator');
// router.get('/teste/:id', validacao, (req, res) => {
// router.get('/teste/:id', (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   } else {
//     return res.status(200).json({"message": req.params.id})
//   }
// })


// Esse get é para 2 rotas / e ?f=descricao
// router.get('/', (req, res) => {
//   if (req.query.f)
//     res.json({
//       "query": req.query.f
//     })
//   else res.json({
//     "message": "Listando todas as tarefas"
//   })
// })

// router.get('/:id', (req, res) => {
//   res.json({
//     "id": req.params.id
//   })
// })

// router.post('/', (req, res) => {
//   res.json({
//     "body": req.body
//   })
// })

// router.put('/:id', (req, res) => {
//   res.json({
//     "id": req.params.id,
//     "body": req.body
//   });
// })

// router.delete('/:id', (req, res) => {
//   res.json({
//     "id": req.params.id
//   })
// })

