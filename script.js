const form=document.querySelector('#loginForm');
const password=document.querySelector('#password');
document.querySelector('#toggle').addEventListener('click',()=>{password.type=password.type==='password'?'text':'password'});
form.addEventListener('submit',event=>{event.preventDefault();document.querySelector('#message').classList.add('show');document.querySelector('.submit').textContent='Acesso revalidado';document.querySelector('.submit').disabled=true});
