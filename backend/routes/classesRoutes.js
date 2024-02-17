const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classesController');

// Route to get all classes
router.get('/', classesController.getAllClasses);

// Route to get a single class by ID
router.get('/:id', classesController.getClassById);

// Route to create a new class
router.post('/', classesController.createClass);

// Route to update a class by ID
router.put('/:id', classesController.updateClass);

// Route to delete a class by ID
router.delete('/:id', classesController.deleteClass);

module.exports = router;