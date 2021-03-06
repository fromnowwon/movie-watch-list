# Movie Watch List

π [Demo](https://nemo-movie-watch-list.herokuapp.com/)

<br/>

![](./public/images/movie-watch-list-16_9.gif)

<br />

## Introduce
- μμλ¦¬μ€νΈμ²λΌ μνμ μμΉλ¦¬μ€νΈλ₯Ό λ§λ€μ΄ κ΄λ¦¬ν  μ μλ μ νλ¦¬μΌμ΄μμλλ€.
- λ³Ό μν λ¦¬μ€νΈ(Watch list), λ³Έ μν λ¦¬μ€νΈ(Watched list)λ₯Ό μ λ¦¬ν  μ μμ΅λλ€.
- Contextλ₯Ό μ¬μ©νμ¬ μ μ­ λ°μ΄ν°λ₯Ό κ΄λ¦¬νμμ΅λλ€.
- Watch list, Watched list μ λ³΄λ Local storageμ μ μ₯λ©λλ€.
- API: [TMDB](https://www.themoviedb.org/?language=ko)

<br/>

## Development Environment
- Client: React, TypeScript, CSS

<br/>

## μ΅μ ν
- Context
- Lodash λΌμ΄λΈλ¬λ¦¬
	- debounce λ©μλλ‘ κ²μ νΌ μ΅μ ν

<br />

### Before

![](./public/images/lodash-debounce-opt-watch-list-1.gif)

<br />

### After

![](./public/images/lodash-debounce-opt-watch-list-2.gif)

<br />

## Reference
π [Create a Movie Watchlist with React Hooks, Context API and localStorage](https://youtu.be/1eO_hNYzaSc)

<br/>


### λ νΌλ°μ€λ³΄λ€ κ°μ λ μ¬ν­
- useMemoλ₯Ό μ¬μ©νμ¬ Context APIλ‘ μΈν λΆνμν λ¦¬λ λλ§μ λ°©μ§νμμ΅λλ€. (μ΅μ ν)
- debounce λ©μλλ₯Ό μ¬μ©νμ¬ λΆνμν API νΈμΆμ λ°©μ§νμμ΅λλ€. (μ΅μ ν)
- TypeScript νκ²½μμ μμνμμ΅λλ€.
- νκΈλ‘ κ²μμ΄ κ°λ₯ν©λλ€.
- λͺ¨λ°μΌμμ λ μ΄μμμ΄ νμ΄μ§μ§ μλλ‘ μμ νμμ΅λλ€.
- κ·Έ μΈ μΌλΆ CSSλ₯Ό μμ νμμ΅λλ€.

<br/>


## Tree
```
movie-watchlist
βββ public (μ μ  μμ κ΄λ¦¬)
β   βββ images
β   βββ index.html
β   βββ robots.txt
βββ src
β   βββ App.css
β   βββ App.tsx
β   βββ index.tsx
β   βββ Config.js
β   βββ components (μ»΄ν¬λνΈ κ΄λ¦¬)
β   β   βββ Header.tsx (ν€λ)
β   β   βββ Add.tsx (μν μΆκ° νμ΄μ§)
β   β   βββ Main.tsx (λ©μΈ νμ΄μ§)
β   β   βββ Search.tsx (κ²μμ°½ + κ²°κ³Ό)
β   β   βββ ResultCard.tsx (κ²μ κ²°κ³Ό)
β   β   βββ Watchlist.tsx (μμΉλ¦¬μ€νΈ νμ΄μ§)
β   β   βββ Watched.tsx (κ΄λ μλ£ νμ΄μ§)
β   β   βββ MovieCard.tsx (μμΉλ¦¬μ€νΈ, κ΄λμλ£ νμ΄μ§ μν λ¦¬μ€νΈ)
β   β   βββ MovieControls.tsx (μν λ¦¬μ€νΈ μ­μ /μ΄λ λ²νΌ)
β   β   βββ NotFound.tsx (404 νμ΄μ§)
β   βββ context (Context κ΄λ¦¬)
β   β   βββ AppReducer.tsx (μ μ­ μνμ λν λ¦¬λμ)
β   β   βββ GlobalState.tsx (μ μ­ μν κ΄λ¦¬)
β   βββ lib (λΌμ΄λΈλ¬λ¦¬ κ΄λ¦¬)
β       βββ font-awesome
βββ README.md
βββ package.json
βββ package-lock.json
βββ tsconfig.json
```

