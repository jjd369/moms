$(function(){
  /*tab button js*/
	$('.login2').hide();
 $('.tab_1').on('click',function(){
   $('#tab > a').removeClass('active');
   $(this).addClass('active');
   $('.login2').hide();
   $('.login1').show();
 });
  $('.tab_2').on('click',function(){
    $('#tab > a').removeClass('active');
   $(this).addClass('active');
    $('.login1').hide();
    $('.login2').show();
 });
});
