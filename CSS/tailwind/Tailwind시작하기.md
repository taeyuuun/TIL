<aside>
🚧 Tailwind를 프로젝트에서 직접적으로 사용해본적은 없지만 자주 봐온사람으로써의 첫 느낌은 인라인 스타일을 쉽게 줄수있게 만들어 놓은것같다

</aside>

## 설치

```css
npm install --save tailwindcss@latest postcss@latest autoprefixer@latest

또는

yarn add tailwindcss@latest postcss@latest autoprefixer@latest
```

### postcss 플러그인에 tailwindCss 추가하기

```json
// 루트경로의 postcss.config.js 등 postcss의 설정파일입니다
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### TailwindCss 초기화파일 생성

```json
npx tailwind init -p
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/76b2ab41-d987-4a6a-aa2e-4443fe3e03a7/97cfbc3b-82ff-4590-a04b-a4fddcd91cda/image.png)

## 기본 설정 커스텀

`content` 설정에 대한 정보는 [여기](https://tailwindcss.com/docs/content-configuration)서 자세히 확인 가능합니다.

설정 커스텀에 대해서는 뒤에서 조금 더 다루어 보겠습니다.

```json
module.exports = {
	// Tailwind의 class이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가합니다.
	// src경로 내부에 자바스크립트, 타입스크립트, jsx를 리턴하는 파일들을 모두 작성 해줍니다.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Tailwind 지시어 CSS파일에 추가하기

프로젝트 css초기화파일에 테일윈드 지시어를 추가해줍니다.

CRA로 생성된 프로젝트 이므로 `src/index.css`에 추가 해줍시다.

!https://velog.velcdn.com/images/dmk-jongwho/post/2e3946f7-a4d7-4b1b-9150-4bb7275f2eb2/image.png

### IntelliSense 설치 (vscode)

!https://velog.velcdn.com/images/dmk-jongwho/post/cc63795e-9b08-4e97-9c0c-4f10a776344b/image.png

> Intellisence for VScode
> 

VS Code Extention인 [IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)를 설치하면 훨씬 빠르고 쉽게 스타일을 적용 가능하다.

자동완성, 오류, 버그를 강조해주고 클래스 이름에 마우스를 hover시 해당 클래스가 가지는 스타일을 보여주는 편리한 Extention이니 Tailwind를 쓴다면 같이 사용해주자.

### 사용하기

!https://velog.velcdn.com/images/dmk-jongwho/post/6a55ae91-5799-4bb8-b1e1-99ff6b67119f/image.png

```css
<button className="py-2 px-4 fon-semibold rounded-lg shadow-md text-white bg-gree-500 hover:bg-green-700">
	Hello Tailwind!
</button>
```

위와 같이 클래스명 입력만으로 스타일링이 가능하게 됩니다 !

각 클래스명이 가지는 스타일은은 [여기](https://tailwindcss.com/docs/installation)서 자세히 확인이 가능합니다.

### Tailwind config 커스텀하기

위에서 말했듯 tailwind.config.js를 통해 기본 스타일 값을 쉽게 커스텀할 수 있습니다.

!https://velog.velcdn.com/images/dmk-jongwho/post/300dbe03-524f-4ad7-9ac8-aa3f63741cc8/image.png

위와 같이 커스텀 컬러를 정의해둔 후 아까 작성했던 버튼의 클래스명을 아래와 같이 바꿔볼까요?

!https://velog.velcdn.com/images/dmk-jongwho/post/f7772111-0cd8-4166-aae2-a7b51ca1aa09/image.png

!https://velog.velcdn.com/images/dmk-jongwho/post/5bcbf9df-9d6a-423d-815a-c4c0ad80b177/image.png

tailwind.config.js파일에 작성 한 커스텀 컬러가 잘 적용이 됐습니다.

커스텀 컬러 작성 시 주의할 점은 기존 tailwind에 정의된 클래스 네임과 겹치는 컬러 값을 재정의 할 경우

`extend` 객체 안에 넣어주지 않으면 tailwind의 기본 스타일이 덮어써지므로 extend객체를 잘 활용해야 합니다.