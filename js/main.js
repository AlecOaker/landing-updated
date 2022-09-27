$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
    });
});
$(window).scroll(function(){
    let docscroll=$(document).scrollTop();
    if(docscroll>($(window).height() * 0.00001)){
        $('.header').css({'height': '40px','width': '100%'}).addClass('fixed');
    }else{
        $('.header').removeClass('fixed');
    }
});
$(window).scroll(function(){
    let scroll=$(document).scrollTop();
    if(scroll>($(window).height())){
        $('#up-btn').css({'display': 'block'});
    }else{
        $('#up-btn').css({'display': 'none'});
    }
});
function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "read more";
        moreText.style.display = "none";
        btnText.style.opacity = '100%';
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "read less";
        btnText.style.opacity = '50%';
        moreText.style.display = "inline";
    }
}
let openBtn = document.getElementById('list-opener');
let nextList = document.getElementById('nextList');
let listOpen = () => {
    if (nextList.style.display === 'none') {
        nextList.style.display = 'block';
        openBtn.innerHTML = 'Less';
    } else {
        nextList.style.display = 'none';
        openBtn.innerHTML = 'More';
    }
}