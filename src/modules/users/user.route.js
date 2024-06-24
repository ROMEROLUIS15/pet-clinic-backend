import express from 'express'
import { deleteUser, findAllUser, findOneUser, login, register, updateUser } from './user.controllers.js'

export const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.get('/', findAllUser)


router
.route('/:id')
.get(findOneUser)
.patch(updateUser)
.delete(deleteUser)