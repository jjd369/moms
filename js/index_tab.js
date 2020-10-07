$('.product_tit > a').on('click',function(event){
    event.preventDefault();
    let index = $(this).index();
    $('.product_list').hide();
    $('.product_list').eq(index).fadeIn();
})