// const view = document.querySelector('#item');
// var num = 1;

// function viewItem() {
//     if(num  == 1){
//         view.classList.add("on");
//         num = 0;
//     } else {
//         view.classList.remove("on");
//         num=1;
//     }
// }

// <--- gnb_item-S --->
$(function(){
    $('.view').on('click', function(){
        $('.view').toggleClass('on')
    })
})

const item = document.querySelector('.view')


    document.addEventListener('scroll', function(){
        let itemOff = document.documentElement.scrollTop;
        if(itemOff != 0)
            item.classList.remove("on");
        else
            return false;
    })
// <--- gnb_item-S --->

// <--- mobile-gnb-S --->
const viewOn = document.querySelector('.all_menu');
const viewBg = document.querySelector('#header')

        viewOn.addEventListener('click', function view(){
            viewOn.classList.toggle("view_on")
            viewBg.classList.toggle("view_bg")
        })
// <--- mobile-gnb-E --->

// <--- news-S --->
$(function(){
    $('.press').on('click', function(){
        $('.press').parent('li').removeClass();
        $(this).parent('li').addClass('on');
    })
})
// <--- news-E --->

// Hide Header on on scroll down 
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('header').outerHeight(); 

$(window).scroll(function(event){ didScroll = true; });

setInterval(function() {
     if (didScroll) { hasScrolled(); didScroll = false; }
    }, 250); 

function hasScrolled() { 
    let st = $(this).scrollTop(); 
    // Make sure they scroll more than delta 
    if(Math.abs(lastScrollTop + st) <= delta) return; 
    // If they scrolled down and are past the navbar, add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    if (st > lastScrollTop && st > navbarHeight){ 
        // Scroll Down 
        $('header').addClass('nav_up'); 
    } else { 
        // Scroll Up 
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav_up');
        } 
    } 
            
    lastScrollTop = st; 
}

// <--- f_addr-S --->
const addr =  document.querySelector('.mobile_tit');

    addr.addEventListener('click', function(){
        const info = document.querySelector(".f_addr");
        info.classList.toggle("active");
    })
// <--- f_addr-E --->