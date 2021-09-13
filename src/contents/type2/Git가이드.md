- commit 남아있는 상태에서 checkout 하면 이동한 branch로 변경 내용 따라감



- push
  
  - commit -> push (origin/내브런치) -> local master로 checkout -> 내 브런치를 마스터에 rebase ->  origin/master에 push 
  
  
  
- pull
  
- origin/master 를 update 할 때는 local의 master branch에서 --> local의 작업 branch에 local master branch를 rebase
  
  
  
- 내 브런치에서 git reset -> soft



- squash -> merge 했을 때 깃 로그

![image-20210323100709200](C:\Users\cloudstone\Desktop\hyesu\guide\TIL\TIL\image\Git가이드\image-20210323100709200.png)

​	찌그리1, 2, 3을 '찌그리들' 로 squash 하고 origin/test에 merge



- 중간에 다른 브런치에서 작업 변화가 있는 경우 -> rebase 하지 말기 (어차피 마스터에 올라가잇음)
  - 추후 내 커밋을 모아서 정리할 때 문제가 생길 수 있음
  - 내 브런치의 작업을 완료한 후 -> 커밋 정리 -> rebase