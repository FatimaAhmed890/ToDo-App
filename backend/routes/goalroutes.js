const express = require('express')
const router = express.Router()
const { getGoals, 
        setGoal, 
        updateGoal,
        deleteGoal } = require('../controllers/goalcontroller')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal)

// router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

module.exports = router