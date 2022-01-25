export const validateAddress = (input)=>{
    return  input.value.match(/^\s*\S+(?:\s+\S±){2}/)
}