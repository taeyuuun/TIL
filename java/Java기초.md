## 변수를 선언하는 방식

1. **변수를 선언(생성) 후 값을 저장(초기화) 하는 방식**

```java
int a; //변수 선언

a = 10;  //변수 초기화

System.out.println("a = " + a);//a = 10
```

1. **변수(생성)과 값(초기화)을 동시에 진행하는 방식**

```java
int a = 10; //변수 선언&초기화

System.out.println("a = " + a);//a = 10
```

**3. 변수에 저장된 데이터는 언제든지 변경 가능**

```java
int a; //변수 선언

a = 10; // 변수 초기화

System.out.println("a = " + a);//10

a = 100 ; //변수 초기화

System.out.println("a = " + a);//100

a = 99 ; //변수 초기화

System.out.println("a = " + a);//99
```

## 정수 자료형

### byte (1byte)

- 1byte = 8bit
- 바이트 단위의 정보를 저장하거나 통신할때 사용
- 127 ~ +128

### short (2byte)

- 2byte = 16bit
- 32,768 ~ + 32,767

### int (4byte)

- 4byte = 16bit
- 정수를 표현할 때 가장 많이 사용
- 정수로 연산을 할때 4byte 단위로 처리하는 게 가장 효율적
- 2,147,483,648 ~ +2,147,483,647

### long (8byte)

- 8byte = 64bit
- 자바에서 정수를 표현하는 가장 큰 단위
- int 형을 초과할때 사용
- int를 넘어서는 정수를 끝에 'L'을 붙여줘서 long 식별하도록 해야합니다.

---

## 문자 자료형

### char

- 2byte
- 영문자는 대문자,소문자,특수 문자, 기호를 포함해도 1바이트(2^8 = 256)로 표현가능해서 1바이트만 사용
- 영어 이외 한글은 1byte로 표현이 힘듬 (유니 코드 사용)
    
    > 유니코드란 딱히 정해진 자체는 없고 숫자와 글자, 즉 키와 값이 1:1 매핑된 형태의 코드
    > 
- 컴퓨터에서 문자를 표현할때는 아스키 코드 사용
    
    > 아스키(ASCII) 코드란 숫자로 문자를 표현하기 위한 일종의 약속
    > 

---

## 실수 자료형

### float

- 4byte
- 단정도(sigle precision) 실수형
- 소수점 이하 6 자리
- IEEE에서 지정한 부동 소수점 표현방식(Floating Point Representation)이 보편적으로 사용

### double

- 8byte
- 배정도(double precision) 실수형
- 소수점 이후 15자리
- IEEE에서 지정한 부동 소수점 표현방식(Floating Point Representation)이 보편적으로 사용

---

## 논리 자료형

### boolean

- 1byte
- 1byte로 값을 저장(true, false)
- 참, 거짓의 값을 나타내는데 사용(true, false)

---

## 상수

### final

- final로 선언된 변수는 상수가 된다.
- 변수를 지정하면 변수를 변경할 수 없다.
- 메소드를 지정하면 오버라이드(다형성)를 할 수 없는 메소드가 된다.
- 클래스를 지정하면 확장 할 수 없는 클래스 가 된다.(하위 클래스 생성 불가)
- final 외 Math 메소드에 다양한 상수가 있다.

## 특수문자

```java
System.out.println("Good Moning");  
System.out.println("Good \t Moning"); // 탭
System.out.println("Good \n Moning"); // 줄 바꿈
System.out.println("Good \'Moning\'"); // 작은 따옴표
System.out.println("Good \"Moning\""); // 큰 따옴표
System.out.println("Good \\Moning"); // 역슬래쉬 
```

## 서식문자

%d = 10진수

%o = 8진수

%x = 16진수

%c = 문자

%s = 문자열

%f = 실수

<aside>
💡 %.nf에서 앞에 정수를 쓰면 소수점 제한 기능입니다. 그리고 서식 문자에 앞에 n을 추가하면 정렬 기능 사용가능하다.

</aside>

%5d : 앞에 다섯칸을 공백

소수점 제한 기능

%.0f : 소수 점 없음

%.1f : 소수 첫째자리

%.2f : 소수 두째자리