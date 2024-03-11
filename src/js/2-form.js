const nameKey = "feedback-form-state"
const form = document.querySelector('.feedback-form')
const textForm = {
    email: '',
    message:''
}

const getMessage = () => {
        textForm.email=form.elements.email.value.trim(),
        textForm.message=form.elements.message.value.trim(),
    localStorage.setItem(nameKey, JSON.stringify(textForm));
}

const load = () => {
    const data = localStorage.getItem(nameKey)
    if (data) {
        const { email, message } = JSON.parse(data)
        form.elements.email.value = email
        form.elements.message.value = message
    }
}
 
load()

function formSubmit(event) {
    event.preventDefault()
    if (form.elements.message.value !== '' && form.elements.email.value !== '') {
        console.log(textForm)
    form.reset()
    localStorage.removeItem(nameKey)
    } else {
        alert ("Не всі поля заповнені")
    }
}

form.addEventListener('input', getMessage) 

form.addEventListener('submit', formSubmit)




