# JS 상호작용과 이벤트 기반 애니메이션의 요소의 종류와 기능

## 이벤트 리스너 (Event Listeners)

> 이벤트가 발생했을 때 특정 동작을 수행할 수 있도록 이벤트 리스너를 등록합니다. 예를 들어, click 이벤트에 대한 이벤트 리스너를 등록하면 사용자가 요소를 클릭할 때 애니메이션을 시작할 수 있습니다.
> 
- 여러가지 이벤트
    
    **`클릭 이벤트 (click)`**: 요소를 클릭했을 때 발생하는 이벤트
    
    **`마우스 오버 이벤트 (mouseover)`**: 요소 위로 마우스 커서를 올렸을 때 발생하는 이벤트
    
    **`마우스 아웃 이벤트 (mouseout)`**: 요소에서 마우스 커서가 벗어났을 때 발생하는 이벤트
    
    **`키보드 이벤트 (keydown, keyup)`**: 키보드의 키를 누르거나 뗄 때 발생하는 이벤트
    
    **`폼 제출 이벤트 (submit)`**: 폼을 제출했을 때 발생하는 이벤트
    
    **`스크롤 이벤트 (scroll)`**: 요소나 페이지가 스크롤되었을 때 발생하는 이벤트
    
    **`창 크기 변경 이벤트 (resize)`**: 브라우저 창의 크기가 변경되었을 때 발생하는 이벤트
    
    **`이미지 로드 이벤트 (load)`**: 이미지가 로드되었을 때 발생하는 이벤트
    

이벤트 리스너 (Event Listeners)예시코드

```jsx
const button = document.querySelector('.button');

function handleClick() {
  console.log('Button clicked!');
}

button.addEventListener('click', handleClick);

```

<aside>
🤔  `.button` 요소를 클릭했을 때 `handleClick` 함수가 실행되도록 이벤트 리스너를 등록하는 예시입니다. 클릭 이벤트가 발생하면 `handleClick` 함수가 실행되고 콘솔에 'Button clicked!' 메시지가 출력됩니다.

</aside>

## 이벤트 객체 (Event Object)

> 이벤트가 발생하면 해당 이벤트에 대한 정보를 담은 이벤트 객체가 생성됩니다. 이벤트 객체를 활용하여 이벤트의 세부 정보 (마우스 좌표, 키보드 입력 등)를  알아내고 이를 기반으로 애니메이션 동작을 제어할 수 있습니다. 보통 헨들러 함수 내에서 사용됩니다.
> 

이벤트 객체 (Event Object)예시코드

```jsx
const button = document.querySelector('.button');

function handleClick(event) {
  console.log('Button clicked at:', event.clientX, event.clientY);
}

button.addEventListener('click', handleClick);

```

<aside>
🤔  `.button` 요소를 클릭했을 때 `handleClick` 함수가 실행되고, 클릭 이벤트 객체를 매개변수로 받아 마우스 클릭 위치를 출력하는 코드입니다.  `event.clientX`와 `event.clientY`를 사용하여 마우스 클릭 위치의 x좌표와 y좌표를 확인할 수 있습니다.

</aside>

## 타이머 함수 (Timer Functions)

> JavaScript에서 제공하는 타이머 함수인 **`setTimeout`**과 **`setInterval`**을 사용하여 일정 시간이 지난 후에 애니메이션을 시작하거나 반복적으로 애니메이션을 실행할 수 있습니다.
> 

타이머 함수 (Timer Functions)예시코드

```jsx
function animate() {
  console.log('Animating...');
}

setTimeout(animate, 2000);
console.log('a');
```

<aside>
🤔  `animate` 함수를 2초 후에 실행하는 예시입니다. `setTimeout` 함수를 사용하여 2초 지연 후에 `animate` 함수가 실행되며, 콘솔에 'Animating...' 메시지가 출력됩니다.

</aside>

## 요소의 스타일 변경 (Style Manipulation)

> JavaScript를 사용하여 요소의 스타일 속성 (예: **`element.style.property`**)을 변경하면 애니메이션 효과를 줄 수 있습니다. 예를 들어, 위치, 크기, 색상 등을 조정하여 요소를 애니메이션화할 수 있습니다.
> 

1. 요소의 스타일 변경 (Style Manipulation):

```jsx
const box = document.querySelector('.box');

box.style.width = '200px';
box.style.height = '200px';
box.style.backgroundColor = 'blue';

```

<aside>
🤔  `.box` 요소의 스타일을 변경하는 예시입니다. `style` 속성을 사용하여 `width`, `height`, `backgroundColor` 등의 CSS 속성을 변경하고, `.box` 요소의 너비, 높이, 배경색을 변경합니다.

</aside>

## CSS 클래스 토글 (Class Toggling)

> JavaScript를 사용하여 요소의 CSS 클래스를 동적으로 추가하거나 제거함으로써 애니메이션을 구현할 수 있습니다. 예를 들어, 특정 클래스를 토글하여 요소의 스타일이 변하도록 할 수 있습니다.
> 

CSS 클래스 토글 (Class Toggling)예시코드

```jsx
const box = document.querySelector('.box');

function toggleAnimation() {
  box.classList.toggle('animate');
}

box.addEventListener('click', toggleAnimation);

```

<aside>
🤔  `.box` 요소를 클릭할 때마다 `animate` 클래스를 토글하는 예시입니다. `classList.toggle`을 사용하여 `animate` 클래스를 추가하거나 제거하여 애니메이션을 시작하거나 멈출 수 있습니다.

</aside>

## Easing 함수

> Easing 함수는 애니메이션의 속도와 움직임을 조절하는 함수입니다. JavaScript에서는 다양한 Easing 함수를 사용할 수 있으며, 이를 적용하여 애니메이션의 부드러운 움직임을 구현할 수 있습니다.
> 

## 애니메이션 라이브러리

> JavaScript 애니메이션 라이브러리 (예:GreenSock, Anime.js)를 활용하면 더욱 풍부하고 복잡한 상호작용과 애니메이션을 구현할 수 있습니다. 이러한 라이브러리는 다양한 기능과 효과를 제공하여 개발자가 애니메이션을 쉽게 만들 수 있도록 도와줍니다.
>