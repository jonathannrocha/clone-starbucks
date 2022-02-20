// document.querySelectorAll('.about-us').classList.remove('active')



document.querySelectorAll('.about-us').addEventListener("click", function(e) {
    e.addClass("active");

});




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