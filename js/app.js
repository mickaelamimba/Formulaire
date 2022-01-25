import {validationFields} from "./validation/validation";

(()=>{
   'use strict'
   let form = document.getElementById('lessonForm')
   form.addEventListener('submit', (e)=>{
       Array.from(form.elements).forEach((input)=>{
           if(input.type !== 'submit'){
               if(!validationFields(input)){
                   e.preventDefault()
                   e.stopPropagation()

                   input.classList.remove('is-valid')
                   input.classList.add('is-invalid')
                   input.nextElementSibling.style.display ='block'
               }
               else{
                   input.nextElementSibling.style.display ='none'
                   input.classList.remove('is-invalid')
                   input.classList.add('is-valid')
               }
           }
       })
   }, false)
})()