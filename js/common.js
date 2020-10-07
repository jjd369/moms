
/*메뉴토글*/
$(function(){
	$('.menu_btn').click(function(){

		$('.search_wrap').stop().animate({top:'-50%','opacity':'0'},300,'linear');
		$('.search_wrap').removeClass('on');

		if($('.nav').hasClass('on')){
			$('.nav').removeClass('on');
			$('.nav').stop().animate({right:'-50%','opacity':'0'},300,'linear');
		}else{
			$('.nav').addClass('on');
			$('.nav').animate({right:'0','opacity':'1'},500,'linear');
		}
		return false;
	});
});

/*검색토글*/
$(function(){
	$('.search_btn').click(function(){		
		$('.nav').stop().animate({right:'-50%','opacity':'0'},300,'linear');
			$('.nav').removeClass('on');

		if($('.search_wrap').hasClass('on')){
			$('.search_wrap').stop().animate({top:'-50%','opacity':'0'},300,'linear');
			$('.search_wrap').removeClass('on');
		}else{
			$('.search_wrap').stop().animate({top:'0','opacity':'1'},500,'linear');
			$('.search_wrap').addClass('on');
		}	
		return false;
	});
	/*검색 입력*/
	$('.search_box input[type="search"]').on('change',function(){
		$(this).html(' ');
	})
	
});

/*검색취소버튼*/
$(function(){
	$('.close').click(function(){
			$('.search_wrap').stop().animate({top:'-50%','opacity':'0'},300,'linear');
			$('.search_wrap').removeClass('on');
			return false;
	});
});
