import z from 'zod'
import { extractValidationData } from '../../common/utils/extractErrorData.js'

const registerSchema = z.object({
    name: 
    z.string({required_error: 'Name is required'}).min(3, {message: 'Name is too short'}).max(50, {message: 'Name is too long'}),

    surname: 
    z.string({required_error: 'Surname is required'}).min(3, {message: 'Surname is too short'}).max(50, {message: 'Name is too long'}),

    email: 
    z.string({required_error: 'Email is required'}).email({message: 'Please enter a valid email'}),

    password: 
    z.string({required_error: 'Password is required'}).min(8, {message: 'Password must be at least 8 characteres'}).max(100),

    dni: 
    z.string({required_error: 'DNI is required'}).min(10,{message: 'DNI is too short'}).max(15,{message: 'DNI is too short'}),

    genre: 
    z.enum(['male', 'female', 'other']),

    role: 
    z.enum(['client', 'developer', 'receptionist']),
    
    birthdate: z.string({
        invalid_type_error: 'birthdate must be a correct format',
        required_error: 'birthdate is required',
    })
})


//This function validates that the schema in the user register is fulfilled
export function validateUser(data){
    const result = registerSchema.safeParse(data)

    const { 
        hasError, 
        errorMessages, 
        data: userData,
    } = extractValidationData(result)

    return {
        hasError,
        errorMessages,
        userData,
    }
}