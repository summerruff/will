// for login page
const button = document.querySelector('input[type="submit"]')

button.addEventListener('click', () => {
    const user = document.getElementById('user').value
    if(user.toLowerCase() === 'will' || user.toLowerCase() === 'willy' || user.toLowerCase() === 'william'){
        window.location.assign('welcome.html')
    }else{
        alert('Sorry, you are an unautorized user')
    }
})