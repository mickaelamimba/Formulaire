export const  validateLength =(input, minLength, maxLength)=>{
    return !(  input.value.length < minLength || input.value.length >maxLength)
}