let form = document.querySelector('.form1')

form.onsubmit = (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)
    let {login, password} = Object.fromEntries(formData)
    console.log(login)
    console.log(password)
    console.log(Object.fromEntries(formData))
}