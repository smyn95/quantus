# quauntus

# 퀀터스 과제

## 전략배분 (정적자산배분)

![qauntusMain.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/382e7f00-4118-4642-9af2-b88e60e7fa3d/qauntusMain.png)

- ***전략 이름을 입력하세요***
    - input에 onChange를 이용해 빈값이면 false(disabled) 값이 있으면 true(click이벤트 활성화)를 
    체크하여 버튼에 불이 들어옵니다.
    - position:fixed로 스크롤을 내려도 전략 이름을 입력할수 있게 따라 내려옵니다.
    
- ***자산배분 알고리즘***
    - option들을 각 클릭했을때 state가 id를 받아오며 그 탭에 데이터를 
    삼항연산자로 분기하여 뿌려주었습니다.
    
- ***자산배분 알고리즘, 주기 리밸런싱***
    - option을 클릭하여 state에 저장된 id를 props로 styled-component에 넘겨주어
    background를 주었습니다.
    - 자산배분 알고리즘, 주기 리밸런싱 select는 ul.li로 구현하였습니다.
    - 공통 컴포넌트로 안에 option 값들은 배열에서 map으로 데이터가 뿌려집니다.
    
- ***자산군 추가***
    - new Array를 생성하여 매개변수가 minus,plus를 확인해서 추가되고 삭제됩니다.
    - 비중의 input defaultValue는 100입니다.
    - 삼항연산자로 분기하여 추가하기 버튼은 마지막에만 출력됩니다.
    
- ***날짜***
    - Antd 컴포넌트를 사용하여 스타일 수정하였습니다.
    
- ***백테스트 버튼***
    - setTimeout안에 대기중,게이지,생성중을 state를 활용하여 true, false를 체크하며 분기를 주었습니다.
    

---

## 듀얼모멘텀, VAA, DAA

![듀얼모멘텀.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/58451951-bf81-4f71-a72c-70afbe616528/%E1%84%83%E1%85%B2%E1%84%8B%E1%85%A5%E1%86%AF%E1%84%86%E1%85%A9%E1%84%86%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A5%E1%86%B7.png)

- ***공격자산, 방어자산, 카나리아 자산***
    - 공통 컴포넌트로 제작
    - 갯수가 늘어나도 display:flex로 자연스럽게 떨어지게끔 제작하였습니다.
    - option값은 배열생성하였고 해당탭의 갯수만큼 map으로 뿌려주었습니다.
    - option값안에 데이터가 select 초기값은 random으로 보여집니다.
    - select 클릭시 영역 외를 클릭하면 해당 select가 닫히고, 다른 select를 클릭해도 닫힙니다.(1개만 열림)
    
- ***모멘텀 기간***
    - 공통 컴포넌트로 안에 option 값들은 배열에서 map으로 데이터가 뿌려집니다.
