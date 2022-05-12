# 원티드 프리온보딩 그립컴퍼니 과제

검색, 즐겨찾기를 등록 할 수 있는 영화 앱

<br>

## 기술 스택

> TypeScript, React, Sass, Recoil

<br>

## 구현 기능 목록

### 영화 앱 구성

- [x] 하단 탭바
- [x] 검색 탭
  - [x] 상단 검색 폼
  - [x] 검색 결과 영역: 한 줄에 하나의 영화를 노출하는 리스트 형 목록
  - [x] 처음 검색 결과 영역 '검색 결과가 없습니다' 노출
- [x] 즐겨찾기 탭
  - [x] '내 즐겨찾기' Title
  - [x] 즐겨찾기한 영화 목록 노출

<br>

### 검색 결과 영역

- [x] 검색 기능
  - [x] 검색 결과가 없는 경우 '검색 결과가 없습니다' 노출
  - [x] 포스터 이미지 예외 처리: default
- [x] 검색어 입력 박스 상단 고정
- [x] 최하단으로 내렸을 때 다음페이지를 불러와 노출
  - [x] 전부 다 불러온 경우 disable

<br>

### 검색 영화 클릭

- [x] 즐겨찾기 / 취소 선택 창
- [ ] 즐겨찾기 선택 시 해당 정보를 즐겨찾기 탭에서 조회
- [ ] 즐겨찾기 데이터 로컬에 저장
- [ ] 이미 즐겨찾기 된 경우 '즐겨찾기' 대신 '즐겨찾기 제거' 노출
- [ ] 검색 목록에서 즐겨찾기 된 목록 표시

<br>

### 즐겨찾기 영화 클릭

- [ ] 즐겨찾기 제거 / 취소 선택 창
- [ ] 즐겨찾기 제거 선택 시 해당 영화 목록에서 제거
