let login_btn = document.querySelector('.login_btn');

let tab_a_first = document.querySelector('#tab a:first-child');
let tab_a_last = document.querySelector('#tab a:last-child');

let login_input = document.querySelectorAll('.login > input');

    login_btn.addEventListener('click',function(){
        /*회원 로그인*/
        if(tab_a_first.classList.contains('active') != 0){
            if(login_form.login_ids.value==0){
                alert('아이디를 입력해주세요.');
                login_form.login_ids.focus();
                return false;
            }
            if(login_form.login_pws.value==0){
                alert('비밀번호를 입력해주세요.');
                login_form.login_pws.focus();
                return false;
            }
            /* 로그인 확인 후 이동 */
            if(login_form.login_ids.value != 0  && login_form.login_pws.value != 0){
                location.href="order.html";
            }
        }
        /*비회원 로그인*/
        if(tab_a_last.classList.contains('active') != 0){
            if(login_form.order_ids.value==0){
                alert('주문 아이디 를 입력하세요.');
                login_form.order_ids.focus();
                return false;
            }
            if(login_form.order_pws.value==0){
                alert('주문 비밀번호를 입력하세요.');
                login_form.order_pws.focus();
                return false;
            }
            /* 로그인 확인 후 이동 */
            if(login_form.order_ids.value != 0  && login_form.order_pws.value != 0){
                location.href="order.html";
            }
        }
    })
