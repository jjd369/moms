$(function(){
    $('.slide1').clone().appendTo('.content_slide_wrap');
    let s_wrap = $('.content_slide_wrap');
    let prev = $('.slide_btn > a:first-child');
    let next = $('.slide_btn > a:last-child');
    let current_slide = 0;
    let slide = document.querySelectorAll('.slider')
    let nbr_slides = slide.length-1;
    let silde_wrap = document.querySelector('.content_slide_wrap');

    silde_wrap.style.width = (nbr_slides+1)* 100+'%';
    slide.forEach(function(e){
        e.style.width = 100/(nbr_slides+1)+'%';
    })
    console.log(silde_wrap.style.width);
    /*arrow next btn*/ 
    next.on('click',function(e){
        e.preventDefault();
        if(current_slide < nbr_slides){
             current_slide++;

            if(current_slide == nbr_slides){
                s_wrap.animate({'left':-(current_slide * 100)+'%'},250,function(){
                    $(this).css({'left':'0%'});
                })
                current_slide = 0;
            }else{
                s_wrap.animate({'left':-(current_slide *100)+'%'},250)
            }
        }
    })
    /*prev*/
    prev.on('click',function(e){
        e.preventDefault();
        if(current_slide >= 0){

             current_slide--;
            if(current_slide == -1){
                s_wrap.css({'left':-(nbr_slides * 100)+ '%'});
                current_slide = nbr_slides-1;

                s_wrap.animate({'left':-(current_slide * 100)+ '%'},250);

            }else{
                s_wrap.animate({'left':-(current_slide *100)+'%'},250);
            }
        }
    })

    function listMove(){
        let parameters = location.search.substring(1).split("&");//검색창에 포함된 매개변수를 substring(1)로 ?를 제거하고 는 split("&") 매개변수가 여러개일때 분활하는 기능
        let temp = parameters[0].split("=");// "=" 값을 제거
        itemIndex = unescape(temp[1]);//escape를 통해서 만들어진 URI 이스케이핑을 디코드    
        itemIndex = Number(itemIndex);//문자열을 숫자로    

        current_slide = itemIndex;
        s_wrap.css({'left':-(current_slide * 100)+'%'});
    }
    window.addEventListener("load",listMove());
})