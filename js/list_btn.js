//btn
var moreBtn = document.querySelectorAll('.list_more_btn');

moreBtn.forEach(function(el){
    el.addEventListener('click',openLists);
})

function openLists(el) {
    el.preventDefault();
    var btnTarget =el.currentTarget;
    var country  = btnTarget.dataset.country;
    var nbr_li = document.querySelectorAll('.'+country+'> ul > li').length;
    
    for(var i = 9;i < nbr_li+1; i++){
        document.querySelector('.'+country+' > ul > li:nth-child('+i+')').classList.add('active');
    }
    document.querySelector('.'+country+' > ul> li:nth-child(9) > a').focus();
    
    btnTarget.style.display = 'none';
}