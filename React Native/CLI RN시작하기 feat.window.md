- Chocolatey 설치
    
    cmd를 관리자 권한으로 실행후 아래 명령어를 실행
    
    ```css
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```
    
    ```css
    choco -version
    ```
    
- nodejs 설치
    
    똑같이 관리자 권한으로 실행후
    
    ```css
    choco install -y nodejs.install
    
    node -version
    
    npm -version
    ```
    
- python 설치
    
    똑같이 관리자 권한으로 실행
    
    ```css
    choco install -y python2
    
    python --version
    ```
    
- React-native CLI 설치
    
    cmd
    
    ```css
    npm install -g react-native-cli
    
    npx react-native --version
    ```
    
- JDK 설치
    
    관리자권한으로 실행
    
    ```css
    choco install -y jdk8
    <!-- 만약 안된다면 jdk8로 설치후 choco upgrade openjdk11을 실행시키면 된다 -->
    
    java -version
    
    javas -version
    ```
    
- ANDROID STUDIO설치
    
    [Android 스튜디오 및 앱 도구 다운로드 - Android 개발자  |  Android Studio  |  Android Developers](https://developer.android.com/studio?hl=ko)
    
    만약 이미 설치가 되어있다면
    
    안드로이드 스튜디오를 실행시킨후 help를 클릭
    
    그럼 Check for Updates가 있을것이다
    
    클릭하면 다음 버젼으로 업그래이드가 가능하다
    
    1. Next
    2. Choose Component 에서 Android Virtual Device를 선택한다
    3. 설치할 경로를 설정해준다
    4. 건들이지 말고 install
    5. Next
    6. Start Android Studio Check후 Finish
    7. Do not import settings를 클릭후 OK
    
    실행후에 
    
    ![스크린샷 2024-04-18 172725](https://github.com/taeyuuun/TIL/assets/103999904/43d1943b-a735-46ff-b190-f6e66ca6fc90)

    ![스크린샷 2024-04-18 172752](https://github.com/taeyuuun/TIL/assets/103999904/0ee571e3-948c-40ae-b2f1-3303f3223f14)
    
    이렇게 설정하면 끝이다
    

이제 설치할건 다 했으니 설정을 해보자

android studio를 실행시킨후에 search에 SDK Manger를 선택후 

- Android SDK Platform 29
- Intel x86 Atom System Image
- Google APIs Intel x86 Atom System Image
- Google APIs Intel x86 Atom_64 System Image

이것들을 install 해준후 Apply해준다

> 안드로이드 환경변수 설정
> 

우리가 코드에서 android simulater를 사용하기위해서 설정해주어야하는 가장 주요한 설정이다

1. 내 PC에서 우클릭후 속성을 들어가준다
2. 고급 시스템 설정을 클릭한다
3. 환경 변수를 클릭한다
4. 사용자 변수에 새로만들기를 클릭후 변수이름을 ANDROID_HOME으로 설정후 변수 값은 android스튜디오에 들어가서 SDK manger를 찾아서 위에 location를 복사 붙여넣기 해준다
5. 사용자 변수에 Path에 들어가서 새로만들기를 클릭후
C:\Users\[사용자 이름]\AppData\Local\Android\Sdk\platform-tools
이런식으로 써준다
    
    <aside>
    🚧 사용자 이름이 없다면 기본값인 user로 작성하면 된다
    
    </aside>
    
6. 설정이 됐다면 cmd실행후
    
    ```css
    adb
    ```
    
    에러가 난다면 환경변수를 다시 설정해주세요
    

## 이제 React Native에서 안드로이드 시뮬레이터를 
사용할수있다

```css
npx react-native init [project 이름]

cd [project 이름]

npm run android
```