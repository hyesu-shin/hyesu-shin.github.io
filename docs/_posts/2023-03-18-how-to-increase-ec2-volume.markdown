---
layout: post
title: "EC2 볼륨을 늘리는 방법"
date: 2023-03-18 19:20:00 +0900
tags: AWS Linux
---

<br />

### AWS 접속 후 스토리지 볼륨 수정하기

AWS -> EC2 -> 스토리지로 접근해서 늘리고 싶은 볼륨 선택 후 수정한다

<br />

### 볼륨 파티션 확장하기

인스턴스 접속 후, 다음 과정에 따라 볼륨 파티션을 확장해준다

<span style='font-weight:bold'>1) 인스턴스 스토리지 디바이스 정보 확인</span>
```
$ lsblk
```
<img width="377" alt="image" src="https://user-images.githubusercontent.com/64633169/226101166-10534cc8-63bb-49e0-a6ca-4660febc684f.png">

xvda 는 물리적인 디스크이며, xvda1 은 사용하고 있는 파티션 영역이다

<span style='font-weight:bold'>2) 리눅스 파티션 확장</span>
```
// sudo growpart 디스크명 1

$ sudo growpart /dev/xvda 1
```
<img width="773" alt="image" src="https://user-images.githubusercontent.com/64633169/226101137-5ec06ee7-50ca-4296-8cc3-04dc632e1005.png">

<span style='font-weight:bold'>3) 파티션 확장 되었는지 확인</span>
```
$ lsblk
```
<img width="414" alt="image" src="https://user-images.githubusercontent.com/64633169/226100561-dce0d845-0e1d-42b6-bcea-ed255e67b0e0.png">

파티션이 16G 로 확장 된 것을 확인 할 수 있다

<br />

### 디스크 공간 확장하기

<span style='font-weight:bold'>1) 파일 시스템 정보 확인</span>
```
$ df -hT
```
<img width="529" alt="image" src="https://user-images.githubusercontent.com/64633169/226101490-a6f1b5c9-cded-4967-ab2e-956824ad6481.png">

해당 파일 시스템의 type 이 ext4 인지 xfs 인지 확인한다

<span style='font-weight:bold'>2) 파일 시스템 디스크 용량 변경</span>
```
// ext4
$ sudo resize2fs /dev/xvda1

// xfs
$ sudo xfs_growfs /dev/xvda1
```

<br />
