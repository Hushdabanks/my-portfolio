const btn = document.getElementById('theme-toggle');
btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')){
        btn.textContent='Light mode';
    } else {
        btn.textContent = 'Dark mode';
    }
});