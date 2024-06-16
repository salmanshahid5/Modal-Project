const showModel = document.querySelector('.show');
const wrapper = document.querySelector('.wrapper');
const last = document.querySelector('.last');
const btn = document.querySelector('.fa-close');
const signup = document.querySelector('.signup');
const form = document.querySelector("#input")

showModel.addEventListener('click',function(){
    last.classList.remove('hidden');
    wrapper.style.display = 'block';
});

btn.addEventListener('click',function(){
    wrapper.style.display = 'none';
    last.classList.add('hidden');
})

signup.addEventListener('click',function(){
    form.value = "";
})