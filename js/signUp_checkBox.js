 // 전체 동의 control
 let all_check = document.getElementById('Consent_all');
 let consent = document.querySelectorAll('.Consent');
 // all_check 클릭할때 
 document.getElementById('Consent_all').onclick = function() {
     var checkboxes = consent
     for (var checkbox of checkboxes) {
         checkbox.checked = this.checked;
     }
 }
 // consent 클릭할때
 consent.forEach(function(element,index){
     element.addEventListener('click',function(){
         let consent1 = document.getElementById('Consent1');
         let consent2 = document.getElementById('Consent2');
         let consent3 = document.getElementById('Consent3');
         let consent4 = document.getElementById('Consent4');
         let consent5 = document.getElementById('Consent5');
         if(consent1.checked != 0 &&
            consent2.checked != 0 &&
            consent3.checked != 0 &&
            consent4.checked != 0 &&
            consent5.checked != 0 ){
                all_check.checked = 1;
            }else if(consent1.checked == 0 ||
                     consent2.checked == 0 ||
                     consent3.checked == 0 ||
                     consent4.checked == 0 ||
                     consent5.checked == 0){
                         all_check.checked = 0;
                     }
     })
 })