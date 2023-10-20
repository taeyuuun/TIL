## ESLint란

- ESLint는 자바스크립트 코드에서 발견되는 문제 시 되는 패턴들을 식별하기 위한 정적 코드 분석 도구입니다
- ESLint의 규칙들은 구성이 가능하며, 사용자가 지정한 규칙들을 정의하고 로드할 수 있습니다
- 문법적 오류를 잡는것도 가능하며, 세미콜론(;)사용과 같은 전반적인 코딩 스타일을 정해둘 수도 있습니다

## ESLint 설정하는 방법

1. 패키지 설치

node이나 yarn이 깔려있다면 이런 명령어를 통해서 패키지 설치가 가능합니다

```jsx
npm install eslint --save-dev

or

yarn add eslint --dev
```

1. 설정 파일 세팅하기

init플래그를 사용한 다음 명령어를 이용한다면 쉽게 설정할 수 있습니다

```jsx
$ npx eslint --init

or

$ yarn run eslint --init
```

이런 식으로 하면 몇 가지 질문이 나오는데 각 질문에서 상황에 맞는 선택지를 고르면 됩니다

질문은 단계별로 나옵니다

```jsx
? How would you like to use ESLint? … 
To check syntax only
❯ To check syntax and find problems
To check syntax, find problems, and enforce code style

// ESLint의 사용 목적은 무엇인가요?

? What type of modules does your project use? … 
❯ JavaScript modules (import/export)
CommonJS (require/exports)
None of these

// 어떤 타입의 모듈을 사용하나요?

? Which framework does your project use? … 
React
Vue.js
❯None of these

// 어떤 프레임워크에서 사용할 것인가요?

? Does your project use TypeScript? › No / Yes

// 타입 스크립트를 사용하나요?

? Where does your code run? … (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

// 어떤 환경에서 코드가 동작하나요?

? What format do you want your config file to be in? … 
JavaScript
YAML
❯ JSON

// 어떤 포맷으로 ESLint 설정파일을 생성할까요?
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/228e8a8f-fdc0-4d4c-a71d-53ddc72d7316/ddc510fd-b88a-470e-993c-3448ab7ba406/Untitled.png)

질문을 다 고르면 .eslintrc.json라는 파일이 만들어지고 아래 보이는 code가 작성되어 있습니다

<aside>
⚠️ 아래 코드는 설정한 선택지에 따라 다를 수도 있습니다

</aside>

```jsx
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
```

<aside>
💡 env : eslint를 적용할 환경을 설정하는 부분으로, 쉽게 생각해서 프로젝트가 어떤 환경에서 실행되는 코드인지를 설정

</aside>

<aside>
💡 extends : 설정을 특정(specify)하는 문자열이거나, 이전 설정을 확장하는 추가적인 설정에 대한 문자열 리스트

</aside>

<aside>
💡 parser : 코드를 ESlint에 맞게 파싱하기 위해 사용하는 것으로, 값을 주지 않으면 기본적으로 ‘Espree’로 설정됨

</aside>

<aside>
💡 parserOptions : JavaScript 지원 옵션을 설정하기 위한 부분으로, 기본적으로 ECMAScript  5 syntax를 지원합니다

</aside>

<aside>
💡 plugins : ESLint는 다양한 설정을 위한 외부 플러그인을 지원하는데, 사용하기 전에 패키지 다운로드가 필요합니다

</aside>

<aside>
💡 rules : rules는 린트로 잡아낼 에러에 대한 규칙을 설정하는 부분으로, Eslint에는 duilt-in된 다양한 rules이 있고 직접 추가가 가능

</aside>

1. 확장 프로그램 설치

파일이 잘 생성되면 VSCode에서 ESLint 확장 프로그램을 설치합니다

ESLint를 설정하고 나서는 에디터를 재시작해야 작동합니다

## ESLint 명령어

모든 파일의 에러를 보여준다

```jsx
.\node_modules\.bin\eslint [파일명|디렉토리]
```

모든 파일을 fix해 준다

```jsx
.\node_modules\.bin\eslint ** --fix
```

지정된 확장자 파일만 fix해 준다

```jsx
.\node_modules\.bin\eslint **/*확장자(예: .js) --fix
```

> 그래서 이걸 왜 사용하는가
> 

ESLint를 사용하는 것은 필수사항은 아니지만 원할한 디버깅과, 좀 더 깨끗한 코드를 작성하기 위해 사용하는 것이기 때문에 취향에 따라 아님 회사에 따라 설정하시면 될것 같습니다