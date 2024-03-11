const nameKey = "feedback-form-state"
const form = document.querySelector('.feedback-form')
const textEmail = document.querySelector('input')
const textInput = {
    email: '',
    message: ''
}

textEmail.addEventListener('input', (event) =>
    textInput.email = event.target.value
)



function formSubmit(event) {
    event.preventDefault()
    if (textInput.message === '') {
        alert("Введіть ваше повідомлення")
    }
    if (textInput === '') {
        alert('Введіть ваш email')
    }
    const deta = JSON.stringify(textInput)
        localStorage.setItem(nameKey, deta)
    console.log(JSON.parse(deta))
    form.reset()
        localStorage.removeItem(nameKey)
}

form.addEventListener('submit', formSubmit)


