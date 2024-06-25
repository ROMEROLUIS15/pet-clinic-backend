import express from 'express'
import { deleteUser, findAllUser, findOneUser, login, register, updateUser } from './user.controllers.js'
import { validateExistingUser } from './user.middleware.js'

export const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.get('/', findAllUser)


router
.route('/:id')
.get(validateExistingUser, findOneUser)
.patch(validateExistingUser, updateUser)
.delete(validateExistingUser, deleteUser)