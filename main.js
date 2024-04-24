const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const shadowHeader = () => {
    const header = document.getElementById('header')
    
    if(window.scrollY >=30){
        header.classList.add('shadow-header')
    }
    else{
        header.classList.remove('shadow-header')
    }
}

window.addEventListener('scroll', shadowHeader)



const swiperFavorites  = new Swiper('.favorite__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto'
})