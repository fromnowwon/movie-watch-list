# Movie Watch List

📎 [Demo](https://nemo-movie-watch-list.herokuapp.com/)

<br/>

![](./public/images/movie-watch-list-16_9.gif)

<br />

## Introduce
- 볼 영화 리스트(Watch list), 본 영화 리스트(Watched list)를 정리할 수 있는 애플리케이션입니다.
- Context를 사용하여 전역 데이터를 관리하였습니다.
- Watch list, Watched list 정보는 Local storage에 저장됩니다.
- API: [TMDB](https://www.themoviedb.org/?language=ko)

<br/>

## Reference
📎 [Create a Movie Watchlist with React Hooks, Context API and localStorage](https://youtu.be/1eO_hNYzaSc)

<br/>

## 레퍼런스보다 개선된 사항
- TypeScript 환경에서 작업하였습니다.
- 한글로 검색이 가능합니다.
- 모바일에서 레이아웃이 틀어지지 않도록 수정하였습니다.
- 그 외 일부 CSS를 수정하였습니다.

<br/>

## Tech stack
- Client: React, TypeScript
- Backend: -
- DB: -

<br/>

## Tree
```
movie-watchlist
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── images
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── Config.js
│   ├── components
│   │   ├── Add.tsx
│   │   ├── Header.tsx
│   │   ├── Main.tsx
│   │   ├── MovieCard.tsx
│   │   ├── MovieControls.tsx
│   │   ├── NotFound.tsx
│   │   ├── ResultCard.tsx
│   │   ├── Search.tsx
│   │   ├── Watched.tsx
│   │   └── Watchlist.tsx
│   ├── context
│   │   ├── AppReducer.tsx
│   │   └── GlobalState.tsx
│   ├── index.tsx
│   ├── lib
│   │   └── font-awesome
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   └── reportWebVitals.ts
└── tsconfig.json
```