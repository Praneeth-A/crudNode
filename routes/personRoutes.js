const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.get('/', personController.getPeople);

router.get('/new', personController.showCreateForm);

router.post('/', personController.createPerson);

router.get('/edit/:id', personController.showEditForm);

router.put('/:id', personController.updatePerson);

router.delete('/:id', personController.deletePerson);

module.exports = router;
