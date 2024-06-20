```tsx
public class Main {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = "Java";
        String s3 = new String("Java");

        System.out.println(s1 == s2); // true
        System.out.println(s1 == s3); // false
    }
}
```
문자열 리터럴 방식으로 객체를 생성하면 문자열 풀에 이미 존재하는 지 확인하므로, s1과 s2는 문자열 풀에서 같은 객체를 가르킨다. 

하지만 new 키워드를 사용하면 항상 새로운 객체를 생성한다.

'==' 연산자는 두 개의 참조가 동일한 값을 갖는지가 아니라 힙 메모리 내의 동일한 객체를 가리키는지 확인한다.