## 파이썬의 자료형

### 숫자

- `int` 정수
- `float` 실수
- `complex` 복소수 ( j )

### 시퀀스

- `str` 문자열: 연속되어 있어야 함
- `list` 리스트: 불연속 이여도 됨
- `tuple` 튜플

리스트와 튜플은 비슷하지만 차이가 있다. 

```python
type("Love your Enemies, for they tell you your Faults.")
<class 'str'>
type(['love', 'enemy', 'fault'])
<class 'list'>
type(('love', 'enemy', 'fault'))
<class 'tuple'>
```

### 매핑

- `dict`

```python
>>> type({'one': 1, 'two': 2, 'three': 3})
<class 'dict'>
```

- 매핑 사용방법
    
    ```python
    var dicObject = {}
    dicObject['cat'] = '고양이';
    dicObject['dog'] = '개';
    dicObject['monkey'] = '원숭이';
    console.log(dicObject) // Object {cat: "고양이", dog: "개", monkey: "원숭이"}
    
    // Dictionary 출력
    for (var key in dicObject) {
      console.log("key : " + key +", value : " + dicObject[key]);
    }
    
    // Dictionary 추가, 제거
    dicObject['tiger'] = '호랑이'; // 추가
    delete dicObject['tiger']; // 삭제 (제대로 삭제 되면 true, 아니면 false)
    
    // 모든 key를 가져오는 방법
    Object.keys(dicObject); // ["cat", "dog", "monkey"]
    
    // Dictionary 길이 구하는 방법
    Object.keys(dicObject).length; // 3
    
    // key를 체크하는 방법
    "moneky" in dicObject // true
    "elephant" in dicObject // false
    
    // key의 마지막 값 가져오는 방법
    var lstKey = Object.keys(dicObject)[Object.keys(dicObject).length - 1]
    console.log("last key = " + lstKey);
    // monkey
    ```
    

### 불(boolean)

- `bool` True or False

```python
>>> type(False)
<class 'bool'>
>>> type(3 >= 1)
<class 'bool'>
>>> type(True == 'True')
<class 'bool'>
```

### 세트

- `set` 집합: list와는 다르게 중복된 자료를 허용하지 않는ㄷㅏ

```python
>>> fruits = {'apple', 'banana', 'orange'}
```

- `function` 함수
- `NoneType` 변수가 비어있음

+-*/,**,//,%와 같이 여러 연산들을 실행할 수 있습니다

3*”hi”

실행하면 js는 당연히 숫자에 문자를 연산하였으니 NaN(Not a Number)가 나오지만 

python은 문자열을 곱한 만큼 출력을 해준다. 3.5를 곱하면 기대한 것과는 달리 “hihihih”이 나오지 않고 Traceback이 뜨며 실행이 되지 않는다 이를 통해 문자열과 실수 연산이 불가 하다는 것을 알 수 있다.  

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/228e8a8f-fdc0-4d4c-a71d-53ddc72d7316/10650866-c36b-4b8c-b923-35845d398840/Untitled.png)

그리고 마지막으로 “될줄 알았던 것” 이다 진짜 될줄알았다 근데 생각해보니 문자열을 문자열을 빼는것이니까 안되는게 당연했다 그렇습니다 python이라 기대했습니다

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/228e8a8f-fdc0-4d4c-a71d-53ddc72d7316/a6e0d123-604f-4ea3-baff-c82664451a1a/Untitled.png)

이거 이후 부터는 딱히 다른 언어와 다를 바가 없어서 마치도록 하겠습니다