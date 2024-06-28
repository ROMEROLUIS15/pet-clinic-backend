import { catchAsync } from '../../common/error/catchAsync.js';
import { validatePartialUser, validateUser } from './user.schema.js';
import { UserService } from './user.service.js';


//REGISTER USER CONTROLLER
export const register = catchAsync(async(req, res, next) => {
    
    const { hasError, errorMessages, userData } = validateUser(req.body)

    if (hasError){
        return res.status(422).json({
            status: 'error',
            message: errorMessages,
        })
    }
    
    const user = await UserService.create(userData)

    return res.status(201).json(user)
})


//LOGIN USER CONTROLLER
export const login = catchAsync(async(req, res, next) => {

})


//FIND ALL USER CONTROLLER
export const findAllUser = catchAsync(async(req, res, next) => {

    const users = await UserService.findAll()
    return res.status(200).json(users)
})


//FIN ONE USER CONTROLLER
export const findOneUser = catchAsync(async(req, res, next) => {

    const { user } = req //from user.middleware.js

    return res.status(200).json(user)
        
})


//UPDATE USER CONTROLLER
export const updateUser = catchAsync(async(req, res, next) => {
    
    const { user } = req //from user.middleware.js
    const { hasError, errorMessages, userData } = validatePartialUser(req.body)

    if(hasError){
        return res.status(422).json({
            status: 'error',
            message: errorMessages,
        })
    }

    const userUpdated = await UserService.update(user, userData)

    return res.status(200).json(userUpdated)
})


//DELETE USER CONTROLLER
export const deleteUser = catchAsync(async(req, res, next) => {

        const {user} = req //from user.middleware.js

        await UserService.delete(user)

        return res.status(202).json({message: 'User deleted successfully'})
        //return res.status(204).json()
})