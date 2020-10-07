$('dd').hide();
$('dt').click(function(){
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
        $(this).parent().find('dd').slideDown();
        return false;
    }else if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).parent().find('dd').slideUp();
        return false;
    }
})