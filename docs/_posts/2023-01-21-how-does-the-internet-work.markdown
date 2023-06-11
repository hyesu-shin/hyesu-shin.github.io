---
layout: post
title:  "네트워크의 기본 계층 구조"
date:   2023-01-21 14:00:00 +0900
tags: CS Network
---

<br />


<img width="585" alt="image" src="https://github.com/hyesu-shin/hyesu-shin.github.io/assets/64633169/f5290cff-8daa-4197-b2f4-3c9997062ea4">


### OSI 7계층

- 국제표준화기구(ISO)에서 개발한 모델
- 네트워크 프로토콜 디자인과 데이터 통신을 계층으로 나눠 표준화한 것
- 각 계층별 구성

    1계층 - 물리 계층(Physical Layer)
    * 통신 케이블을 통해 전기적 신호를 주고받는 계층
    * 단지 데이터 전달 역할만을 함
    
    2계층 - 데이터 링크 계층(DataLink Layer)
    * 물리 계층을 통해 송수신되는 정보의 오류와 흐름을 관리하는 계층
    
    3계층 - 네트워크 계층(Network Layer)
    * 데이터의 라우팅을 담당하는 계층
    * 주소(IP)를 정하고, 경로(Route)를 선택해서 데이터를 전달하는 계층
    
    4계층 - 전송 계층(Transport Layer)
    * 종단 간(End-to-End)간의 신뢰성 있는 데이터 전송을 담당하는 계층
    * TCP/UDP 프로토콜이 적용되는 계층
    * TCP: 신뢰성 있는 통신 보장, 데이터 전송을 보장하는 연결성 프로토콜
    * UDP: 비연결성 프로토콜, 데이터를 빠르게 전달하는데 초점을 둠
    
    5계층 - 세션 계층(Session Layer)
    * 네트워크상의 논리적인 연결을 관리하는 계층
    * 통신장치 간의 상호작용을 위한 세션을 만들고 유지, 종료, 재시작 등의 기능 수행
    
    6계층 - 표현 계층(Presentation Layer)
    * 데이터 표현을 위한 변환 작업을 하는 계층
    * 응용 계층 데이터 변환, 인코딩, 디코딩, 암호화 등을 수행
    
    7계층 - 응용 계층(Application Layer)
    * 유저 인터페이스를 제공하는 계층
    * 구글 크롬, 파이어폭스, 사파리 등의 웹 브라우저와 스카이프, 아웃룩 등의 응용 프로그램
    

### TCP/IP 4계층

- OSI 7계층 모델을 적용한 인터넷 표준
- 각 계층별 구성

    1계층 - 네트워크 엑세스 계층(Network Access Layer)
    * OSI 7계층에서 물리, 데이터 링크 계층에 해당
    * TCP/IP 패킷을 네트워크 매체로 송수신 하는 과정을 담당
    * 물리적인 주소로 MAC을 사용 
    * 하드웨어적인 요소와 관련되는 모든 것을 지원
    * 프로토콜: Ehternet(이더넷), Token Ring, PPP 등
    
    2계층 - 인터넷 계층(Internet Layer)
    * OSI 7계층의 네트워크 계층에 해당
    * 논리적 주소인 IP를 이용한 노드간 전송과 라우팅 기능 처리
    * 프로토콜: IP, ARP, ICMP, IGMP 등
    
    3계층 - 전송 계층(Transport Layer)
    * OSI 7계층의 네트워크, 전송 계층에 해당
    * 연결 제어, 자료 송수신 담당
    * 프로토콜: TCP, UDP
    
    4계층 - 응용 계층(Application Layer)
    * OSI 7계층의 세션, 프레젠테이션, 애플리케이션 계층에 해당
    * 다른 계층의 서비스에 접근할 수 있는 응용 프로그램 서비스 제공
    * 프로토콜: HTTP, FTP, Telnet, DNS, SMTP 등
    


<br />
