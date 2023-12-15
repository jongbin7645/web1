$('document').ready(function(){



    $('.banner').slick({
        'prevArrow' : '.btn.type2',
        'nextArrow' : '.btn.type1',
        autoplay: true,
        autoplaySpeed: 3000,

    });
    
    $('.mset2 .infoset').slick({
        slidesToShow: 4,
  slidesToScroll:2,
  'prevArrow' : '.mset2 .arrowset .btn1',
  'nextArrow' : '.mset2 .arrowset .btn2',

    });





});