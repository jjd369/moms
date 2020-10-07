function validate() {
    var re = /^[a-zA-Z0-9]{4,12}$/ // 아이디와 패스워드가 적합한지 검사할 정규식
    var re2 = /(^02.{0}|01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/ //핸드폰번호 정규식
    //이름
    var irum = document.getElementById("irum");
    //전화번호
    var phone = document.getElementById("phone");
    //비밀번호
    var pw = document.getElementById("pw");
    //인증방법 이메일
    var email_ch = document.getElementById("email_ch");
    //인증방법 번호
    var phone_ch = document.getElementById("phone_ch");

    //이름 
    if(irum.value=="") {
         alert("성함을 입력해주세요.");
         irum.focus();
         return false;
    }
    //전화번호 
    if(!check(re2,phone,"휴대번호를 -없이 숫자로 정확하게 입력하세요. ex)01012345678")) {
        return false;
    }
    //아이디 
    if(!check(re,ids,"아이디는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }
    //아이디 확인
    if(signUp.ids_ch.value == ''){
        alert("아이디 확인을 입력해주세요.");
        return false;
    }
    if(signUp.ids.value != signUp.ids_ch.value) {
        alert("아이디가 다릅니다. 다시 확인해 주세요.");
        signUp.ids_ch.value = "";
        signUp.ids_ch.focus();
        return false;
    }
    //비밀번호
    if(!check(re,pw,"패스워드는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }
    //비밀번호 확인
    if(signUp.pw_ch.value == ''){
        alert("아이디 확인을 입력해주세요.");
        return false;
    }
    if(signUp.pw.value != signUp.pw_ch.value) {
        alert("비밀번호가 다릅니다. 다시 확인해 주세요.");
        signUp.pw_ch.value = "";
        signUp.pw_ch.focus();
        return false;
    }
    //인증방법 선택
    if(email_ch.checked == 0 && phone_ch.checked == 0 ){
        alert("인증방법을 선택해주세요.");
        return false;
    }
    //보안문자 확인
    if(signUp.s_character.value == ''){
        alert("보안문자를 입력해주세요.");
        return false;
    }
    //이용약관
    if(signUp.Consent1.checked == 0 || signUp.Consent2.checked == 0){
        alert("(필수)이용약관을 체크해주세요.");
        return false;
    }
}

function check(re, what, message) {
if(re.test(what.value)) {
    return true;
}
alert(message);
what.value = "";
what.focus();
//return false;
}