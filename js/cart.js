// 열기 버튼
var cartHeight = $('.cart').innerHeight();
$('.cart_btn_wrap').click(function () {
    if (!$('.cart').hasClass('active')) {
        $('.cart').addClass('active');
        $(this).hide();
        $('.order_content').animate({ 'padding-bottom': cartHeight }, 500);
    }
})
// 닫기 버튼
$('.cart_close_btn').click(function () {
    if ($('.cart').hasClass('active')) {
        $('.cart').removeClass('active');
        $('.cart_btn_wrap').fadeIn();
        $('.order_content').animate({ 'padding-bottom': '5%' }, 500);
    }
})