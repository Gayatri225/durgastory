function placeholder(img, name){
  const d=document.createElement('div');
  d.className='placeholder';
  d.innerHTML = `Add <code>${name}</code> to <code>site/images/</code>`;
  img.replaceWith(d);
}
const btn = document.getElementById('toggleTheme');
if (btn){
  btn.addEventListener('click', ()=>{
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });
  if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
}
