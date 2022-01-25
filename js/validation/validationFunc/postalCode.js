export const validatePostalCode =(input)=>{
    return  input.value.match("^(0[1-9]|[1-9][1-9])[0-9][0-9][0-9]$")
}