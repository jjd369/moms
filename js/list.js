// tabs
var tabLinks = document.querySelectorAll(".tabLinks");
var tabContent = document.querySelectorAll(".tabContent");

tabLinks.forEach(function(el) {//el은 단지 식별자일 뿐이고 그것은 요소, 즉 DOM 요소를 가리키는데, 그것은 그 라이브러리의 규약이다.
    el.addEventListener("click", openTabs);
});

function openTabs(el) {
    var btnTarget = el.currentTarget;
    var country = btnTarget.dataset.country;//버튼의 data- "contry"의 속성값을 가져온다

    tabContent.forEach(function(el) {
    el.classList.remove("active");
    });

    tabLinks.forEach(function(el) {
    el.classList.remove("active");
    el.classList.add("none");
    });

    document.querySelector("." + country).classList.add("active");
    
    btnTarget.classList.add("active");
    btnTarget.classList.remove("none");
}


