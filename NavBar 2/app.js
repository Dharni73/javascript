const menu  = document.querySelector('.menu-line');
const menuList = document.querySelector('ul');

menu.addEventListener('click',()=>{
	menuList.classList.toggle('showmenu');
})