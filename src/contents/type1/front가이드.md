**webpack**

- vue 프로젝트를 설정할 때 webpack 설정 가능 - composer.json 에 자동으로 설정됨



**vue-cli란**

- 기본 vue 개발 환경을 설정해주는 도구

- 기본적인 프로젝트 세팅을 해줌

  

**moment** 

- setTimeout은 일정 시간 간격 이후에 함수가 한번 실행됨
- setInterval은 일정 시간 간격으로 함수가 주기적으로 실행됨
- setInerval은 정확한 간격마다 실행되지 않을 수 있음 반면에 재귀적인 setTimeout은 거의 정확한 함수 호출간 딜레이 시간 보장



**polyfill**

- 브라우저에서 지원하지 않는 코드를 사용가능한 코드 조각이나 플러그인(추가기능)을 의미
- babel은 지원하지 않는 문법을 변환해주지만, 애초에 존재하지 않는 기능은 번역할 수 없음 -> 이러한 문제를 해결하기 위해 polyfill 사용
- node-ployfill-webpack-plugin



**javascript Array.prototype 내장함수**

- indexOf
- findIndex
- includes
- 등등



**css 정리하기**

- vw / vh 단위는 브라우저 창 크기에 따른 비율을 설정한다 - 100vh == 브라우저 전체 크기



**esLint 사용시 정의되지 않은 변수 에러**

- api 사용하기 위해서는 esLint의 정해지지 않는 변수를 사용하지 x

```
esLintConfig : {
	"rules" : {
		"no-unused-vars" : "off"
	}
}
```



**API 키 숨기기 / 빌드 관련 대화**



![image-20210616200605276](C:\Users\cloudstone\Desktop\hyesu\guide\TIL\TIL\image\front가이드\image-20210616200605276.png)

firebase / kakao 와 같은 api key 제공자의 경우 -> 제공하는 key를 다른 도메인 / 사용자가 사용할 수 없도록 보안 구성을 해 놓고 관리하고 있음



**세션과 쿠키**

- HTTP 프로토콜의 비상태, 비연결의 특성들을 보완한 기술
- 쿠키
  - 서버를 대신해서 로그인에 필요한 정보들을 웹 브라우저에 저장하고 사용자가 요청을 할 때 그 정보를 함께 보내서 서버가 사용자를 식별할 수 있게 함
  - 세션 관리 / 개인화 / 트래킹
- 세션
  - 비밀번호와 같은 인증 정보를 쿠키에 저장하지 않고 대신에 사용자의 식별자인 session id를 저장
  - 인증 정보와 더불어 이 ID에 해당하는 로그인 상태, 마지막 로긍니 시간, 닉네임, 만료기간 등의 정보 저장
  - 로그인을 할때마다 새로운 session id
  - 브라우저 단위로 저장, 브라우저 단위로 소멸



**async / await 정리**

https://studyingych.tistory.com/63

- Promise
  - 자바스크립트에서 비동기 처리에 사용되는 객체
  - 내용은 실행되었지만 결과를 아직 반환하지 않은 객체
- async / awatie
  - Promise 객체를 반환
  - async 는 함수를 Promise 로 return 하는 함수로 만들어줌 / promise 와 다르게 async await 에서는 return 값으로 응답 전달
  - await 는 '기다리다'
  - async 안에서 await 가 붙은 함수가 호출되면 -> 실행이 완료 되기를 기다렸다가 완료가 되면 다음 순서 실행
    - 즉, async 안에서만 사용 / 비동기 함수를 call 할 때 앞에 붙임

