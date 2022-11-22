const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login__button');

const handLeFocus = ({ target }) => {
    const span = target.previousElementSibling
    span.classList.add('span-active')
}

const handLeFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling
        span.classList.remove('span-active')
    }

}


const handleSubmit = (event) => {
    event.preventDefault()

    const name = document.querySelector('input[name=name]').value
    const email = document.querySelector('input[name=email]').value
    const whatsapp = document.querySelector('input[name=whatsApp]').value
    const modulo = document.querySelector('input[name=modulo]').value
    const tamanho = document.querySelector('input[name=tamanho]').value
    const sexo = document.querySelector('input[name=opcao]').value

    fetch('https://api.sheetmonkey.io/form/tDfS1oMJCen9nYmJybX6wq', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, whatsapp, modulo, tamanho, sexo})
    }).then(() => {
        alert('pedido feito com sucesso')
    })
  
    
}
 



document.querySelector('form').addEventListener('submit', handleSubmit)
inputs.forEach((input) => input.addEventListener('focus', handLeFocus))
inputs.forEach((input) => input.addEventListener('focusout', handLeFocusOut))