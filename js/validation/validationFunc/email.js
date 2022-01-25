export const validateEmail =(input)=>{
    const EMAIL = input.value
    const POSAT = EMAIL.indexOf("@")
    const POSDOT = EMAIL.lastIndexOf(".")
    return !(POSAT< 1 ||(POSDOT - POSAT< 2))
}