## 1. **CSS의 길이 단위**

[참고 링크](https://aneok.tistory.com/56)

스타일링을 할 때 px, vh, rem 등 여러 길이 단위를 사용할 수 있는데요, 용도에 맞는 길이 단위를 사용하면 간략한 컴포넌트 구조를 짜는 데에도 도움이 됩니다.

### 절대 단위

| Unit | Description |
| --- | --- |
| cm | 센티미터 |
| mm | 밀리미터 |
| in | 인치 (1in = 96px = 2.54cm) |
| px | 픽셀 (1px = 1/96th of 1in) |
| pt | 포인트 (1pt = 1/72 of 1in) |
| pc | 파이카 (1pc = 12 pt) |

px

**절대 단위의 단위 중에 많이들 사용하는 단위**로는 'px'로 해상도와 밀접합니다.

pt

포인트(pt)는 고정 크기 단위이며 크기를 조정할 수 없다는 점에서 픽셀(px)과 매우 유사하지만 그 값은 실제 잉크 용지 인쇄술에 사용되는 측정 단위(글꼴의 높이)입니다. 72pts = 1 인치

### 상대 단위

em

em은 상대적인 단위로, 부모요소의 폰트 사이즈에 대한 상대값을 나타냅니다. 부모요소의 폰트 크기가 정해져 있지 않다면 1em = 16px입니다.

rem

rem(root em)은 em과 같은 성질을 가지지만 부모요소가 기준이 아니라 항상 루트(최상위 **root**, **html**)를 기준으로 합니다 . (기본 16px)

### Viewport 단위

![img1.daumcdn.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e8411665-af36-414c-9b8e-727f455c754f/img1.daumcdn.png)

vh

vh(viewport height) 이 단위는 뷰포트 높이값의 100분의 1을 의미하는 값입니다.

vw

vw(viewport width)는 vh 와 마찬가지로 뷰포트 너비값의 100분의 1을 의미하는 값입니다.

vmin

vmin (viewport minimum)은 웹브라우저 너비와 높이 중에 더 작은 값을 기준으로 하여 100분의 1 한 값입니다.

vmax

vmax (viewport maximum)는 웹브라우저 너비와 높이 중에 더 큰 값을 기준으로 하여 100분의 1한 값입니다.

## 2. 구조적인 import 순서 유지하기

react로 코드를 짜다보면 방대해진 import문을 볼 수 있다

여기 예시가 있다

```jsx
import React, { useState, useEffect, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import DialogActions from "@material-ui/core/DialogActions"
import { getServiceURL } from '../../utils/getServiceURL";
import Grid from "@material-ui/core/Grid";
import Paragraph from "../components/Paragprah";
import { sectionTitleEnum } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import axios from 'axios';
import { DatePicker } from "@material-ui/pickers";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";
```

이 예시를 보자면 뭐가 서드파티고 뭐가 내부import문인지 알기 어렵다

위의 예시를 개선해보자면

```
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from "@material-ui/pickers";

import { getServiceURL } from '../../utils/getServiceURL";
import { sectionTitleEnum } from "../../constants";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
```

내부 및 외부 import문을 분리하여 정리해볼 수 있다

다른 정리 방법에는 내장 → 외부 → 내부 순으로 3파트를 나누어 정리할 수 있다.

## 3. React props 간편하게 전달하기

react의 components를 생성한 뒤 props를 전달하다 보면 반복된 내용을 쓰게 되는 경우가 많다.

```jsx
const {title, name, contants} = data;
const onOtherNameFunc = () => alert('Click');

//안좋은 예시
<Component title={title} name={name} contents={contents} onClick={onOtherFunc} />
//졸은 예시
<Component {...{title, name, contents}} onClick={onOtherFunc} />
```

반복되는 경우엔 간편하게 합쳐서 전달하는 것이 효율적이다.

## 4. 적절한 태그  사용

용도에 맞는 적절한 태그를 사용하면 검색 엔진 최적화에 큰 도움이 된다

```jsx
// bad : 모두 div를 사용
const Name = styled.div``;
const Title = styled.div``;
const GNB = styled.div``;

// good : 용도에 맞는 태그를 사용
const Name = styled.p``;
const Title = styled.h1``;
const GNB = styled.nav``;
```

## 5. 자바스크립트 코딩 명명 규칙 준수

일관된 코딩 컨벤션은 가독성에 큰 도움이 된다

```jsx
// bad
const Name - '최수민';
const namelist = () => {
	return ['수민', '병훈'];
};
const ProfileImg = styled.img``;

// good : 변수, 함수명은 camelCase로. 함수명은 동사로 시작, 배열은 복수형 명사로, 축약어는 되도록 X
const name = '최수민';
const getNames = () => ['수민', '병훈'];
const ProfileImage = styled.img``;
```

## 6. 가능하면 최대한 const를 사용

let을 사용해야 하는 상황은 흔치 않기 때문에 되도록이면 const를 사용한다

let을 무조건 사용해야할 것 같으면, const로 바꿀 수 없을지 좀 더 고민해보시길

```jsx
// bad1
let List = profiles.map((prop) => (

// good1 : const로 변경, camelCase로 변경, 화살표 함수 parameter 1개일 때 괄호 생략, 변수 이름 변경
const list = profiles.map(profile => (

// bad2
const list = [1, 2, 4, 3, 5];
let sum = 0;
for(let i = 0;i < 5;i++) {
	sum += list[i];
}

// good2 : Array.prototype.reduce 사용
const sum = [1, 2, 4, 3, 5].reduce((acc, curr) => acc + curr, 0);
```

## 7. 커밋할때 주석은 최대한 제거

주석 없이도 이해 된느 코드가 좋응ㄴ 코드 입니다. 정말 불가피한 상황이 아니라면, 주석을 작성하기 보단 코드 구조 및 네이밍을 이해하기 쉽게 개선에 보면 좋습니다.