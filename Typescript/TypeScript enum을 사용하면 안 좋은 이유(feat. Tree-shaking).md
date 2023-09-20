### **Tree-shaking이란?**

Tree-shaking이란 간단하게 말해 사용하지 않는 코드를 삭제하는 기능을 말합니다. 

나무를 흔들면 죽은 잎사귀들이 떨어지는 모습에 착안해 Tree-shaking이라고 부릅니다. 

Tree-shaking을 통해 export했지만 아무 데서도 import하지 않은 모듈이나 사용하지 않는 코드를 삭제해서 번들 크기를 줄여 페이지가 표시되는 시간을 단축할 수 있습니다.

### **enum이란?**

`enum`은 열거형 변수로 정수를 하나로 합칠 때 편리한 기능입니다. 임의의 숫자나 문자열을 할당할 수 있으며 하나의 유형으로 사용해서 버그를 줄일 수 있습니다.

```tsx
// 아무것도 지정하지 않은 경우에는 0부터 숫자를 매깁니다.
enum MOBILE_OS {
  IOS, // 0
  ANDROID // 1
}

// 임의의 숫자나 문자열을 할당할 수도 있습니다
enum MOBILE_OS {
  IOS = 'iOS',
  ANDROID = 'Android'
}

// 아래와 같이 유형으로 사용할 수도 있습니다
const os: MOBILE_OS = MOBILE_OS.IOS
function detectOSType(userAgent: string): MOBILE_OS {
    // 생략
}
```

`enum`은 TypeScript가 자체적으로 구현하는 기능입니다. JavaScript에서는 사용할 수 없기 때문에 아래와 같이 객체를 사용하는 코드를 자주 작성하게 됩니다.

```jsx
const MOBILE_OS = {
    IOS: 'iOS',
    ANDROID: 'Android'
}
console.log(MOBILE_OS.IOS) // iOS
```

# **TypeScript에서 enum을 사용하면 Tree-shaking이 되지 않습니다**

앞서 말했듯이 `enum`은 편리한 기능이지만 TypeScript가 자체적으로 구현했기 때문에 발생하는 문제가 있습니다. 아래와 같이 TypeScript 코드를 작성한 경우를 생각해 보겠습니다.

```tsx
export **enum** MOBILE_OS {
  IOS,
  ANDROID
}

// 문자열을 할당한 경우
export enum MOBILE_OS {
  IOS = 'iOS',
  ANDROID = 'Android'
}
```

위 코드를 트랜스파일하면 아래와 같은 JavaScript 코드가 됩니다.

```jsx
export var MOBILE_OS;
(function (MOBILE_OS) {
    MOBILE_OS[MOBILE_OS["IOS"] = 0] = "IOS";
    MOBILE_OS[MOBILE_OS["ANDROID"] = 1] = "ANDROID";
})(MOBILE_OS || (MOBILE_OS = {}));

// 문자열을 할당한 경우
export var MOBILE_OS;
(function (MOBILE_OS) {
    MOBILE_OS["IOS"] = "iOS";
    MOBILE_OS["ANDROID"] = "Android";
})(MOBILE_OS || (MOBILE_OS = {}));

```

JavaScript에 존재하지 않는 것을 구현하기 위해 TypeScript 컴파일러는 IIFE(즉시 실행 함수)를 포함한 코드를 생성합니다. 그런데 [Rollup](https://rollupjs.org/guide/en/)과 같은 번들러는 IIFE를 '사용하지 않는 코드'라고 판단할 수 없어서 Tree-shaking이 되지 않습니다. 결국 `MOBILE_OS`를 import하고 실제로는 사용하지 않더라도 최종 번들에는 포함되는 것입니다.

!https://engineering.linecorp.com/wp-content/uploads/2020/07/9fba7580-ba18-11ea-9c22-9344d1208a74-1024x512.png

# **그렇다면 enum 말고 어떤 것을 사용하면 좋을까요?**

Union Types를 사용. 아래는 TypeScript 예시 코드입니다

```tsx
const MOBILE_OS = {
  IOS: 'iOS',
  Android: 'Android'
} as const;
type MOBILE_OS = typeof MOBILE_OS[keyof typeof MOBILE_OS]; // 'iOS' | 'Android'
```

위 코드는 아래와 같은 JavaScript 코드로 트랜스파일됩니다.

```jsx
const MOBILE_OS = {
    IOS: 'iOS',
    Android: 'Android'
};
```

TypeScript 코드에서는 `MOBILE_OS` 타입을 정의한 이점을 그대로 누리면서, JavaScript로 트랜스파일해도 IIFE가 생성되지 않으므로 Tree-shaking을 할 수 있습니다. 지금까지 JavaScript 객체로 `enum` 같은 것을 표현한 경우, 트랜스파일된 JavaScript에서도 별다른 차이 없이 유형으로 사용하는 이점을 누릴 수 있는 것도 좋은 점입니다.

### **const enum은 어떤가요?**

TypeScript에서 `const enum`을 사용해 보면 `enum`과 거의 같다고 느껴지지만, `enum`의 내용이 트랜스파일할 때 인라인으로 확장된다는 점이 다릅니다. 아래 TypeScript 예시 코드를 보겠습니다.

```tsx
const enum MOBILE_OS {
    IOS = 'iOS',
    ANDROID = 'Android',
}
const ios = MOBILE_OS.IOS
```

위 코드는 아래와 같은 JavaScript 코드로 트랜스파일됩니다.

```jsx
const ios = "iOS" /* IOS */;
```

Tree-shaking이라는 관점에서는 Union Types와 같습니다. 사용하지 않는다면 번들에 포함되지 않습니다. 하지만 긴 문자열을 할당하는 경우에는 Union types와 비교해 다소 불리한 점이 있다고 생각합니다. 조금 극단적인 예시를 들어보겠습니다.

```tsx
// TypeScript
const enum NAME {
  SEUNGMIN = 'スンミンは部屋に入るスンミンは部屋に入るスンミンは部屋に入るスンミンは部屋に入るスンミンは部屋に入る', //승민이가 방에 들어간다 승민이가 방에 들어간다 승민이가 방에 들어간다 승민이가 방에 들어간다 승민이가 방에 들어간다 
TARO = '다로',
JIRO = '지로',
}
const isSEUNGMIN = name === NAME.SEUNGMIN

// JavaScript 트랜스파일 후
const isSEUNGMIN = name === "u5BFFu9650u7121u5BFFu9650u7121u4E94u52ABu306Eu64E6u308Au5207u308Cu6D77u7802u5229u6C34u9B5Au306Eu2026" /* SEUNGMIN */;
```

한 `const enum`은 Babel로 트랜스파일할 수 없고, TypeScript의 `--isolatedModules`가 활성화된 환경에서는 큰 의미가 없다는 점을 주의해야 합니다.