**React-Native expo로 프로젝트 시작하기**

### RN을 시작하는 방법

> RN을 시작하는 방법엔 두가지 가 있다 하는 React Native CLI을 사용하는 방법이고 다른 하나는 Expo이다
> 

이 둘의 차이점은 아주 많다 하지만 세팅이 쉬운 expo를 사용하도록 하자

먼저 폰에 Expo Go 앱을 깐다

후 cmd에 글로벌로 깔아준다

```json
npm i --g eas-lci
```

```json
나는 npm으로 안깔려서 pnpm썼다
```

프로젝트를 할 경로로 이동해서 npm create-xepo-app을 실행한다

이제 생성한 프로젝트를 열어주고 EAS를 초기화 해야한다

<aside>
💡 EAS란? EAS는 Expo의 클라우드 빌드 서비스인데 명령어 하나만으로 손쉽게 배포가 가능하도록 설계되어있다

</aside>

로그인하라고 하면 expo가입한 계정으로 로그인 해주면 된다

배포는 

```json
eas update
```

를 통해 할 수 있다

하면 URL하나가 뜨는데 들어가면 QR코드가 나오고 스토어 등록 없이도 간이적으로 배포가 가능하다

코드작성 방법은 웹과 비교해서 알려주겟다

<View> = <div>

<Text> = <p>

<Image> = <img>

- image의 로컬과 외부
    
    로컬 → <Image source={require(’./img/check.jpg’)} />
    
    외부 → <Image style={{ style넣음 }} source={(url:’image의 링크’)} />
    

<ScrollView> = Scroll가능 <div>

<TextInput> = <input type=”text”>

<TouchableOpacity> = <button>

> button의 onclick은 TouchableOpacity의 onPress 같은 기능을 한다
> 

더 알고 싶은것이 있다면 링크

https://reactnative.dev/