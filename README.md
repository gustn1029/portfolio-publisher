# 김현수 포트폴리오 

국비지원 퍼블리싱 & 프론트엔드 과정을 수료하고 만든  
제 첫번째 포트폴리오입니다.

JAVASCRIPT 는 클릭하면 복사되는 코드만 오픈소스를 사용하였고,  
그 외에는 제가 직접 작성하였습니다.
  
우측 사이드바(aside)는 메인비주얼 영역을 벗어날 때 나타나도록  
설정하였고, window의 width 에 따라 사라지게 설정했습니다.

```js
const modal = document.querySelectorAll('.modal_wrap'), link = document.querySelectorAll('.link');
let linkLength = link.length;
const list = document.querySelectorAll('.info');
const btn = document.querySelectorAll('.modal_btn');
const body = document.querySelector('body');

for(var i = 0; i < linkLength; i++){

    link[i].addEventListener('click', function(event){
        event.preventDefault();
        var parent = event.target.parentNode.parentNode.parentNode.parentNode;
        var modalOn = parent.querySelector('.modal_wrap')
        // parent.classList.add("on");
        modalOn.classList.add("on");
        body.classList.add("scroll_off")
    })
    let close;
    btn[i].addEventListener('click', function(e){
        close = e.target.parentNode.parentNode;
        close.classList.remove("on");
        body.classList.remove("scroll_off");
    })
    modal[i].addEventListener('click', function(e){
        close = e.target;
        body.classList.remove("scroll_off");
        close.classList.remove("on");
    })
}
```
모달 부분은 선택자로 선택한 태그의 부모를 찾아서  
classList add, remove 를 통해 제어했습니다.

`이번 포트폴리오는 반응형으로 제작하진 않았습니다.`