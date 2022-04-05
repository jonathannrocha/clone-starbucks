// document.querySelectorAll('.about-us').classList.remove('active')


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


select = (e) => document.querySelector(e)
let btleft = select('.banner-controls--left')
let btrigth = select('.banner-controls--right ')
let banner = select('.banner-carrossel .banner-1')



btleft.addEventListener('click', () => { 
    if(banner.style.width == '100%') {
        banner.style.width = '0'
    }else {
        banner.style.width = '100%'
    }
})

btrigth.addEventListener('click', () => {
   

    if(banner.style.width == '100%') {
        banner.style.width = '0'
    }else {
        banner.style.width = '100%'
    }
})
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

