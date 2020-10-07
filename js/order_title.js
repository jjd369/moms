let fixHeight = $('#name').innerHeight();
let titleHeight = $('.order_title_wrap').innerHeight();

// scroll js
$(window).scroll(function(){
    if($(window).scrollTop()>fixHeight){
        $('.order_title_wrap').addClass('fixed');
        $('.order_content').css('padding-top',titleHeight);
    }
    if($(window).scrollTop()<fixHeight){
        $('.order_title_wrap').removeClass('fixed');
        $('.order_content').css('padding-top',0);
    }
})

//list title css js
$('.order_title').click(function(){
    $('.order_title').removeClass('active')
    $(this).addClass('active')
})