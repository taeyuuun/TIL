타입스크립트에서는 type transformation을 유연하게 도와 주는 여러 유틸리티 타입을 제공하고 있습니다.

어떤 것을 제외한다는 성격은 유사하지만, 쓰임새가 다소 다른 두 타입인 Exclude과 Omit을 알아보고, 추가로 Pick 에 대해서도 알아보겠습니다.

---

타입스크립트에서는 제네릭 타입을 사용하여 유틸리티 타입(utility types)을 정의할 수 있습니다. 유틸리티 타입은 기존 타입을 기반으로 새로운 타입을 만들 때 도움이 되는 내장 타입입니다. 여기서는 Exclude, Omit, Pick 세 가지 유용한 유틸리티 타입을 설명하겠습니다.

1. Exclude<T, U>:
이 유틸리티 타입은 타입 T에서 타입 U에 해당하는 모든 멤버를 제외한 새로운 타입을 생성합니다. 일반적으로 T는 유니온 타입이고, U는 그 유니온 타입에서 제외하려는 특정 타입입니다.
    
    예를 들어, 다음과 같이 사용할 수 있습니다:
    
    ```tsx
    type A = 'A' | 'B' | 'C';
    type B = 'A' | 'B';
    
    type ExcludedTypes = Exclude<A, B>; // 'C'
    ```
    
    위의 코드에서 Exclude를 사용하면 'C'라는 문자열 리터럴 타입이 생성되고, 'A'와 'B'는 제외됩니다.
    
2. Omit<T, K>:
이 유틸리티 타입은 타입 T에서 특정 프로퍼티를 제외한 새로운 타입을 생성합니다. K는 제외하려는 프로퍼티의 이름을 나타냅니다.
    
    예를 들어, 다음과 같이 사용할 수 있습니다:
    
    ```tsx
    type Person = {
      name: string;
      age: number;
      address: string;
    };
    
    type PersonWithoutAge = Omit<Person, 'age'>;
    ```
    
    위의 코드에서 PersonWithoutAge는 Person 타입에서 'age' 프로퍼티를 제외한 타입입니다.
    
3. Pick<T, K>:
이 유틸리티 타입은 타입 T에서 특정 프로퍼티만 선택한 새로운 타입을 생성합니다. K는 선택하려는 프로퍼티의 이름을 나타냅니다.
    
    예를 들어, 다음과 같이 사용할 수 있습니다:
    
    ```tsx
    type Person = {
      name: string;
      age: number;
      address: string;
    };
    
    type PersonNameAndAge = Pick<Person, 'name' | 'age'>;
    ```
    
    위의 코드에서 PersonNameAndAge는 Person 타입에서 'name'과 'age' 프로퍼티만 선택한 타입입니다.
    

이러한 유틸리티 타입들은 코드를 더 간결하게 작성하고 타입 안정성을 유지하기 위해 매우 유용합니다.

---

간단하게 오늘 알아본 유틸리티 타입들을 정리하면

- Omit : 정의된 객체 유형의 타입에서 **특정 프로퍼티를 제외**한 타입을 정의하고 싶을 때
- Exclude : 어떤 타입(보통 유니온)에서 **특정한 타입들을 제외**시켜 정의하고 싶을 때
- Pick : 정의된 객체 유형의 타입에서 **특정 프로퍼티를 선택**한 새로운 타입을 정의하고 싶을 때

사용하게 됩니다.

참고로, 사실 Omit의 경우 정의할 때 Exclude도 활용하고 있습니다.

이처럼, 타입들을 사용하고 정의함에 있어서 좀 더 유연하게 도움을 주는 역할임을 분명하게 확인할 수 있습니다.
