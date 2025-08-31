const btn = document.getElementById('toggleTheme');
if (btn){
  btn.addEventListener('click', ()=>{
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });
  if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
}
