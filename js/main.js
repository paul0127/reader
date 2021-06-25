/*手機板選單*/
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

/*登入及註冊*/
let login_btn = document.querySelector('.head_right .login_btn')
let regist_btn = document.querySelector('.head_right .regist_btn')

let login_popup_bg = document.querySelector('.popup_bg')
let login_popup_panel = document.querySelector('.popup_bg .popup')
let login_popup_close = document.querySelector('.popup .close')
let login_model = document.querySelector('.popup .login_panel')
let regist_model = document.querySelector('.popup .regist_panel')
let forget_model = document.querySelector('.popup .forget_panel')

let to_regist = document.querySelector('.popup .login_panel .to_regist')
let to_login = document.querySelector('.popup .regist_panel .to_login')
let to_forget = document.querySelector('.popup .login_panel a.to_forget')
let to_back = document.querySelector('.popup .forget_panel .back_btn button')

login_btn.addEventListener('click', () => {
  login_popup_bg.classList.add('active')
  login_model.classList.add('active')
})

regist_btn.addEventListener('click', () => {
  login_popup_bg.classList.add('active')
  regist_model.classList.add('active')
})

login_popup_close.addEventListener('click', () => {
  login_popup_bg.classList.remove('active')
  login_model.classList.remove('active')
  regist_model.classList.remove('active')
  forget_model.classList.remove('active')
})

to_regist.addEventListener('click', () => {
  login_model.classList.remove('active')
  forget_model.classList.remove('active')
  regist_model.classList.add('active')
})

to_login.addEventListener('click', () => {
  regist_model.classList.remove('active')
  forget_model.classList.remove('active')
  login_model.classList.add('active')
})

to_forget.addEventListener('click', () => {
  regist_model.classList.remove('active')
  login_model.classList.remove('active')
  forget_model.classList.add('active')
})

to_back.addEventListener('click', () => {
  regist_model.classList.remove('active')
  forget_model.classList.remove('active')
  login_model.classList.add('active')
})

document.addEventListener('click', (e) => {
  if (
    login_popup_bg.classList.contains('active') &&
    !login_btn.contains(e.target) &&
    !regist_btn.contains(e.target) &&
    !login_popup_panel.contains(e.target)
  ) {
    login_popup_bg.classList.remove('active')
    login_model.classList.remove('active')
    regist_model.classList.remove('active')
    forget_model.classList.remove('active')
  }
})

/*會員登入前往*/
let member_login = document.querySelector('.login_panel .send_btn button')
member_login.addEventListener('click', () => {
  location.href = './member_account.html'
})

/*會員左側選單*/
let mobile_left_menu = document.querySelector('.mobile_left_menu')
let mobile_left_menu_btn = document.querySelector('.mobile_left_menu .selected')

if (mobile_left_menu) {
  mobile_left_menu_btn.addEventListener('click', () => {
    mobile_left_menu.classList.toggle('active')
  })
}

let body = document.querySelector('body')
let search_btn = document.querySelector('header .top .search_btn')
let search_bar = document.querySelector('header .top .search')

search_btn.addEventListener('click', () => {
  search_bar.classList.add('active')
  body.classList.add('fixed')
})

window.addEventListener('click', (event) => {
  let serch_form = search_bar.querySelector('form')
  if (
    search_bar.classList.contains('active') &&
    !search_btn.contains(event.target) &&
    !serch_form.contains(event.target)
  ) {
    search_bar.classList.remove('active')
    body.classList.remove('fixed')
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 1200) {
    body.classList.remove('fixed')
    search_bar.classList.remove('active')
  }
})

let search = new Vue({
  el: '#search',
  data() {
    return {
      search_text: '',
      toggle: 0,
    }
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.get_search_result, 500)
  },
  methods: {
    get_search_result() {
      console.log(this.search_text)
    },
    clear_search() {
      this.search_text = ''
    },
    search_cancel() {
      search_bar.classList.remove('active')
      body.classList.remove('fixed')
    },
  },
  watch: {
    search_text(new_search, old_search) {
      this.debouncedGetAnswer()
    },
  },
})
