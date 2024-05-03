### SafeAreaView

- Iphone X 이상 기종에서 디스플레이의 보이지 않는 영역 및 최하단 영역에 내용이 보여지는 것을 방지함

### View

- 가장 기본적인 컴포넌트로 레아웃 및 스타일을 담당 = div

### Text

- 텍스트를 보여주는 역할

### Components

- 에뮬레이터가 켜져있어도 Metro가 실행되지 않으면 앱에 변경되지 않음.

[Metro](https://www.notion.so/Metro-d122eb6affaf4aaaa0160476a78774df?pvs=21)

- 화살표 함수 문법을 썼을 떄의 장점
    - 복잡한 로직 없이 바로 반환하는 코드라면 중괄호 코드 블록과 return 키워드를 바로 생략할 수 있음.

### Props

- properties를 줄인 말로, 컴포넌트의 속성을 의미
- props를 사용하면 컴포넌트를 사용할 임의의 값을 넣어줄 수 있음
    - JSX에서 자바스크립트 표현식을 보여줘야 할 때는 중괄호로 감싸서 작성해야 함.

### Default Props

- props를 지정하지 않았을 떄 사용할 기본값을 설정해주고 싶다면 defaultProps를 사용하면 됨.

```jsx
import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
	return (
		<View>
			<Text>안녕하세요 {props.name}</Text>
		</View>)
}

Greeting.defaultProps = {
	name : '리액트 네이티브'
};

export default Greeting;
```

### JSX 문법

- **태그를 열면 반드시 닫아주기** (+) 에러가 나서, 코드를 복구하고 저장해도 오류 화면이 계속 나타나면 하단의 Reload 버튼을 누르면 됨. 단축키를 사용해 바로 리로드할 수도 있음. 안드로이드에서는 R을 두 번 누르면 됨.
- **스스로 닫는 태그 사용하기**
- **반환할 땐 꼭 하나의 태그로 감싸기**
    - 상위 태그 하나 안에 태그들이 구성되어 있는 형태여야 함.
    - 빈 JSX Fragment, 즉 빈 태그를 사용해주면 됨.
- **JSX 안에서 자바스크립트 표현식을 보여줄 때는 중괄호로 감싸기**
- **주석 작성하기**
    - {/* */} 사이에 주석 넣기
    - // 문자를 사용해 주석 넣기

### Style Sheet로 컴포넌트에 스타일 입히기

- 리액트 네이티브에서는 별도의 CSS 파일에 스타일을 작성하지 않고, 자바스크립트 파일 안에 Style Sheet라는 것을 사용함.
- CSS와의 차이점
    - 셀렉터라는 개념이 없음
    - 모든 스타일 속성은 camelCase로
    - display 속성은 기본적으로 flex이며, 다른 값은 none 밖에 없음
    - flexDirection 속성의 기본 값은 웹에서는 row이지만, react native에서는 column임.
    - 리액트 네이티브에서 스타일링할 때 숫자 단위는 dp뿐임.
    - background 대신 backgroundColor를 사용해야 함.
    - border 대신 borderWidth, borderStyle, borderColor 등을 따로따로 설정해야 함.
- StyleSheet는 react-native 모듈에서 불러와 사용 가능
    - Props로 컴포넌트 스타일을 커스터마이징 가능
        
        ```jsx
        import React from 'react';
        import {View, StyleSheet} from 'react-native';
        
        function Box(props) {
        	return <View style={[styles.box, styles.rounded]} />;
        }
        
        const styles = StyleSheet.create({
        	box : {
        		width : 64,
        		height : 64,
        		backgroundColor: 'black'
        	},
        
        	rounded : {
        		borderRadius: 16
        	}
        
        });
        
        export default Box;
        ```
        

cf) 아래 코드는 props로 값이 전달될 때만 모서리가 둥글게 지정됨.

`return <View style={[styles.box, props.rounded ? styles.rounded : null]}`

(+) Boolean 타입의 Props를 설정할 때에는 코드를 아래와 같이 간소화할 수도 있음

`<Box rounded />`

### Props 객체 구조 분해 할당

- 구조 분해 할당 = 비구조화 할당
- 예시
- Before

```jsx
        funtion print(params){
        	console.log(params.name)
        	console.log(params.description)
        }
```

- After

```jsx
        function print({name, description}){
        	console.log(name);
        	console.log(description);
        }
```

- After

```jsx
        function Box({rounded, size, color}) {
        	return (
        		<View style={[
        					styles.box,
        					rounded && styles.rounded,
        					sizes[size],
        					{
        						backgroundColor : color
        					}
        					]}/>);
        }
```

### UseState Hook으로 상태 관리하기

- usestate

```jsx
            import React, {useState} from 'react';
            									.
            									.
            									.
            const [visible, setVisible] = useState(true);
```

- 상태를 관리하는 가장 기본적인 방법
- hook 종류 중 하나로, 이를 사용하여 상태 관리 / 최적화 / 컴포넌트 작동 흐름 관리 등 다양한 기능을 구현할 수 있음.→ 상태 값을 관리하는 함수
- Hook의 규칙컴포넌트의 최상위 레벨에서만 사용 가능조건문이나 반복문 또는 중첩 함수에서 사용하면 안 됨.함수 흐름 중간에 리턴한다면 리턴되기 전에 사용되어야 함.
- Hook을 사용하여 직접 Hook을 만들 수 있음. 커스텀 훅으로 패키지 외에서 불러오는 Hook은 모두 커스텀 Hook임.
- Hook은 커스텀 Hook 또는 함수 컴포넌트에서만 사용 가능함.

### 조건부 렌더링

- 특정 조건에 따라 다른 결과물을 보여주는 것삼항연산자 사용

```jsx
 {
    visible ? <Box rounded = {true} size = "large" /> : null
 }
```

- &&연산자 사용

```jsx
{
	visible && <Box rounded = {true} size = "large" />
}
```

### 테스트 코드 작성법

React와 동일하다