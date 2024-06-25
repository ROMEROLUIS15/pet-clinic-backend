import { UserService } from "./user.service.js"


export const validateExistingUser = async(req,res,next) => {
    try {
        const { id } = req.params
        const user = await UserService.findOne(id)
    
        if(!user){
            return res.status(404).json({
                status: 'error',
                message: `User with id: ${id} not found`
            })
        }

        req.user = user //add the created user into line 6 to the request
        next()

    } catch (error) {
    console.error(error)
        res.status(500).json({
        status: 'fail',
        message: 'Something went wrong',
        error,
        }) 
    }
    
}
