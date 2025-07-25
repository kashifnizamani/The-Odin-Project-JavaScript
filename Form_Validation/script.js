const email = document.querySelector("#mail");
const country = document.querySelector("#country");
const postalCode = document.querySelector("#code");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("passwordconfirm");
const submit = document.querySelector(".submit");
const form = document.querySelector(".form");

const inputs = document.querySelectorAll("input");

   console.log(email.parentNode.textContent)


   inputs.forEach(element =>{
    let span = element.nextElementSibling;
    element.addEventListener("input",(e)=>{
             
        span.textContent = "";
        
        if(element.validity.valid){

            span.textContent = "";
            span.className = "error";

        }
        else{
            showError(element, span);
        }
       

    })
   })


function showError(element, span){

      const label = document.querySelector(`label[for="${element.id}"]`);
  const fieldName = label ? label.textContent.replace(":", "") : "this field";
  

    if(element.validity.valueMissing){

       span.textContent = `you need to fill out this field`;

    }
    else if(element.validity.typeMismatch){

        span.textContent = `you need to enter ${fieldName}`;
        
        
    }

    else if(element.validity.tooShort){
        span.textContent = `${fieldName} shoub be at least ${element.minLength}`;  
    
    }

    else if(element.validity.tooLong){

          span.textContent = `${fieldName} shoub be at most ${element.maxLength}`; 

    }

    span.className = "error active";



}