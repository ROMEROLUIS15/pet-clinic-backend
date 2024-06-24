export const extractValidationData = (resultValidation) => {
    let errorMessages
    let data //clean data
    const hasError = !resultValidation.success

    if(hasError) errorMessages = JSON.parse(resultValidation.error.message) //JSON.parse = nice response to the error
    if(!hasError) data = resultValidation.data //reply: response to screen

    return {
        hasError,
        errorMessages,
        data
    }
}

//Function to validate all register