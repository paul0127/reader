let menu_btn = document.querySelector('.menu_btn')
let menu = document.querySelector('header .bottom')
let sub_menu_btn = document.querySelectorAll('header .bottom ul.nav li.sub > a')

menu_btn.addEventListener('click', () => {
  menu.classList.toggle('active')
})

sub_menu_btn.forEach((item) => {
  item.addEventListener('click', (event) => {
      console.log(window.innerWidth)
    if (window.innerWidth < 1200) {
      let sub_top_btn = item.parentNode
      event.preventDefault()
      sub_top_btn.classList.toggle('active')
    }
  })
})

let login_btn = document.querySelector('.login_btn')
let login_popup_bg = document.querySelector('.login_popup_bg')
let login_popup_close = document.querySelector('.login_popup .close')

login_btn.addEventListener('click',()=>{
  login_popup_bg.classList.toggle('active')
})
login_popup_close.addEventListener('click',()=>{
  login_popup_bg.classList.remove('active')
})
