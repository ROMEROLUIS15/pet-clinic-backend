import { validatePartialUser, validateUser } from './user.schema.js';
import { UserService } from './user.service.js';

//REGISTER USER CONTROLLER
export const register = async(req,res) => {
    try {
    //const { email, dni } = req.body
    const { hasError, errorMessages, userData } = validateUser(req.body)

    if (hasError){
        return res.status(422).json({
            status: 'error',
            message: errorMessages,
        })
    }

    const user = await UserService.create(userData)
    //console.log(user.dataValues)

    return res.status(201).json(user)

    } catch (error) {
        //console.error('Error details:', JSON.stringify(error, null, 2)); // Log detallado

        // if (error.name === 'SequelizeUniqueConstraintError') {
        //   let message = 'A unique constraint error occurred';
        //   if (error.errors && error.errors.length > 0) {
        //     const uniqueError = error.errors[0];
        //     if (uniqueError.path === 'email') {
        //       message = 'Email ya registrado';
        //     } else if (uniqueError.path === 'dni') {
        //       message = 'DNI ya registrado';
        //     }
        //   } else if (error.parent && error.parent.detail) {
        //     if (error.parent.detail.includes('email')) {
        //       message = 'Email ya registrado';
        //     } else if (error.parent.detail.includes('dni')) {
        //       message = 'DNI ya registrado';
        //     }
        //   }
        //   return res.status(400).json({
        //     status: 'fail',
        //     message,
        //   });
        // }
    
        console.error(error);

    res.status(500).json({
        status: 'fail',
        message: 'Something went wrong',
    error,
})
    }
}

//LOGIN USER CONTROLLER
export const login = async(req,res) => {
    try {
        
    } catch (error) {
    console.error(error)
    res.status(500).json({
        status: 'fail',
        message: 'Something went wrong',
        error,
}) 
    }
}

//FIND ALL USER CONTROLLER
export const findAllUser = async(req,res) => {
    try {
    const users = await UserService.findAll()
    return res.status(200).json(users)

    } catch (error) {
    console.error(error)
    res.status(500).json({
        status: 'fail',
        message: 'Something went wrong',
        error,
})       
    }
}

//FIN ONE USER CONTROLLER
export const findOneUser = async(req,res) => {
    try {
    const { user } = req //from user.middleware.js

    return res.status(200).json(user)
        
    } catch (error) {
    console.error(error)
    res.status(500).json({
        status: 'fail',
        message: 'Something went wrong',
        error,
})     
    }
}

//UPDATE USER CONTROLLER
export const updateUser = async(req,res) => {
    try {
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


    } catch (error) {
    console.error(error)
    res.status(500).json({
        status: 'fail',
        message: 'Something went wrong',
        error,
})   
    }
}

//DELETE USER CONTROLLER
export const deleteUser = async(req,res) => {
    try {

        const {user} = req //from user.middleware.js

        await UserService.delete(user)

        return res.status(202).json({message: 'User deleted successfully'})
        //return res.status(204).json()
        
    } catch (error) {
 
    }
}