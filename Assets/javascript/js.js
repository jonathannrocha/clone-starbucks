// document.querySelectorAll('.about-us').classList.remove('active')


function about() {
    console.log('aqui');
    document.querySelector('.contenier-footer--princ .about-us').classList.remove('active-about')

    document.querySelector('.contenier-footer--princ .about-us').classList.add('active-about');
}

// Selector menu mobile
document.querySelector('.menumob').addEventListener("click", function() {

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