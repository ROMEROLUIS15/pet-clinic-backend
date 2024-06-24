import { validateUser } from './user.schema.js';
import { UserService } from './user.service.js';

export const register = async(req,res) => {
    try {
    const { hasError, errorMessages, userData } = validateUser(req.body)

    if (hasError){
        return res.status(422).json({
            status: 'error',
            message: errorMessages,
        })
    }
    res.json(userData)
    } catch (error) {
    console.error(error)
    res.status(500).json({
        status: 'fail',
        message: 'Something went wrong',
    error,
})
    }
}

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

export const findAllUser = async(req,res) => {
    try {
    const users = await UserService.findAllUser()
    return res.send(users)
    } catch (error) {
    console.error(error)
    res.status(500).json({
        status: 'fail',
        message: 'Something went wrong',
        error,
})       
    }
}

export const findOneUser = async(req,res) => {
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

export const updateUser = async(req,res) => {
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

export const deleteUser = async(req,res) => {
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