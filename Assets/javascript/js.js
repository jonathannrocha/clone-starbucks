
let select = (e) => document.querySelector(e)


// Selector menu mobile
document.querySelector('.menumob').addEventListener("click", function () {

    if (document.querySelector(" nav").style.display == 'flex') {

        document.querySelector(" nav").style.display = 'none';
        document.querySelector(".bt-white").style.display = 'none';
        document.querySelector(".bt-black").style.display = 'none';
        document.querySelector(".menu-right--location").style.display = 'none';
        document.querySelector(".menu-right--img").style.display = 'none';

    } else {

        document.querySelector(" nav").style.display = 'flex'
        document.querySelector(".bt-white").style.display = 'flex';
        document.querySelector(".bt-black").style.display = 'flex';
        document.querySelector(".menu-right--location").style.display = 'flex';
        document.querySelector(".menu-right--img").style.display = 'flex';

    }

});



let btleft = select('.banner-controls--left')
let btrigth = select('.banner-controls--right ')
let banner = select('.banner-carrossel .banner-1')
let balls_right= select('.banner-balls--right')
let balls_left= select('.banner-balls--left')


setInterval(()=> {
    if(document.querySelector('body').clientWidth <= 904 ) {
        left()
    }

}, 7000)
btleft.addEventListener('click', left) 
btrigth.addEventListener('click', left)

function left() { 

    balls_left.classList.remove('balls--active')
    balls_right.classList.remove('balls--active')

    if(banner.style.width === '100%') {
        console.log('aqui')

        banner.style.width = '0'
        balls_left.classList.add('balls--active')
    }else {
        
        banner.style.width = '100%'
        balls_right.classList.add('balls--active')
    }
}

let acess = document.querySelector('.acess ')



acess.addEventListener('click', (e) => {

    let abrir = acess.querySelectorAll('.about-us')

    let open = e.target.parentNode

    if (open.querySelector('li').style.display == 'none') {

        document.querySelectorAll('.about-us li').forEach((e) => {
            e.style.display = 'none';
        })
    
        document.querySelectorAll('.about-us ul svg').forEach((e) => {
            e.style.transform = "rotate(0deg)"
            e.style.transitionDuration = '0s'
        })

        open.querySelector('svg').style.transform = "rotate(180deg)"
        open.querySelector('svg').style.transitionDuration = "0.15s"
        
        open.querySelectorAll('li').forEach((a) => {
            a.style.display = 'block';
        })

    } else {

        open.querySelectorAll('li').forEach((a) => {

            open.querySelector('svg').style.transform = "rotate(0deg)"
            open.querySelector('svg').style.transitionDuration = "0.15s"
            a.style.display = 'none';
            console.log('carai')
        })

    }

})

