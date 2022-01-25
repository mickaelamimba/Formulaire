export const validatePhoneNumber = (input)=>{
    return  input.value.match(/^\(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}/)
}