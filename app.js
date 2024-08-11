const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const address = document.getElementById('address')
const aboutProject = document.getElementById('aboutProject')
const form = document.getElementById('form')
const emailRejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function clearErrors() {
    document.querySelectorAll('.contact-container-item-field').forEach(el => el.innerText = '');
  }


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    clearErrors()
    if(firstName.value==='')
    {
        document.getElementById('firstName-error').innerText = 'firstName is empty'
    }
    if(lastName.value==='')
    {
        document.getElementById('lastName-error').innerText =' lastname is empty'
    }
    if(email.value==='')
    {
        document.getElementById('email-error').innerText ='email is empty '
    }
    if(address.value==='')
    {
        document.getElementById('address-error').innerText = 'address is empty'
    }
    if(aboutProject.value==='')
    {
        document.getElementById('aboutProject-error').innerText = 'about Project is empty'
    }
    if(emailRejex.test(email.value)===false)
    {
        document.getElementById('email-error').innerText = 'enter correct email id'
    }
 
    
})