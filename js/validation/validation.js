import {
    validateEmail,
    validateLength,
    validatePhoneNumber,
    validatePostalCode, validateTerms,
    validateText,
    validationRequired
} from "./validationFunc";


export const validationFields =(input)=>{
    let fieldName = input.name
    if (fieldName === 'firstName'){
        if(!validationRequired(input)){
            return false
        }
        if(!validateLength(input,2,20)){
            return false
        }
        if(!validateText(input)){
            return false
        }
        return (true)
    }
    if (fieldName === 'lastName'){
        if(!validationRequired(input)){
            return false
        }
        if(!validateLength(input,2,20)){
            return false
        }
        if(!validateText(input)){
            return false
        }
        return (true)
    }
    if (fieldName === 'email'){
        if(!validationRequired(input)){
            return false
        }
        if(!validateEmail(input)){
            return false
        }

        return (true)
    }
    if (fieldName === 'phoneNumber'){
        if(!validationRequired(input)){
            return false
        }

        if(!validatePhoneNumber(input)){
            return false
        }
        return (true)
    }
    if (fieldName === 'city'){
        if(!validationRequired(input)){
            return false
        }

        return (true)
    }
    if (fieldName === 'postalCode'){
        if(!validationRequired(input)){
            return false
        }

        if(!validatePostalCode(input)){
            return false
        }
        return (true)
    }
    if (fieldName === 'conditions'){
        if(!validateTerms(input)){
            return false
        }

        return (true)
    }

}