# 🎨 React 포트폴리오 블로그

이것은 GitHub Pages에서 호스팅되는 React 기반의 포트폴리오/블로그 사이트입니다.

## ✨ 기능

- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🎨 현대적이고 깔끔한 UI
- 📝 블로그 포스팅 기능
- 🖼️ 프로젝트 포트폴리오 섹션
- 🎥 영상 및 이미지 지원
- ⚡ Vite를 이용한 빠른 개발 및 빌드
- 🚀 GitHub Actions를 통한 자동 배포

## 📂 프로젝트 구조

```
fristet.github.io/
├── src/
│   ├── components/          # React 컴포넌트들
│   │   ├── Header.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── BlogCard.jsx
│   │   └── *.css
│   ├── pages/               # 페이지 컴포넌트 (향후 확장)
│   ├── data/                # JSON 데이터 파일
│   │   ├── projects.json    # 프로젝트 정보
│   │   └── blog.json        # 블로그 포스트
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
│   ├── images/              # 프로젝트 & 블로그 이미지
│   └── videos/              # 영상 파일
├── package.json
├── vite.config.js
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Actions 배포 설정
```

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173`으로 접속하세요.

### 3. 프로덕션 빌드
```bash
npm run build
```

### 4. GitHub에 배포
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

GitHub Actions가 자동으로 빌드하고 배포합니다.
(몇 분 후 `https://fristet.github.io`에서 확인할 수 있습니다)

## ✏️ 컨텐츠 커스터마이징

### 프로젝트 추가

[src/data/projects.json](src/data/projects.json) 파일을 수정하세요:

```json
{
  "id": 3,
  "title": "프로젝트 제목",
  "description": "프로젝트 설명",
  "image": "/images/project3.jpg",
  "tags": ["React", "Node.js"],
  "link": "https://github.com/...",
  "date": "2026-01-15"
}
```

### 블로그 포스트 추가

[src/data/blog.json](src/data/blog.json) 파일을 수정하세요:

```json
{
  "id": 3,
  "title": "블로그 제목",
  "slug": "blog-slug",
  "excerpt": "블로그 요약",
  "content": "# 마크다운으로 작성된 본문",
  "date": "2026-01-15",
  "author": "작성자 이름",
  "tags": ["JavaScript", "Web"],
  "thumbnail": "/images/blog3.jpg"
}
```

### 이미지 및 영상 추가

1. 이미지: `public/images/` 폴더에 업로드
2. 영상: `public/videos/` 폴더에 업로드
3. JSON 파일에서 경로를 참조하세요

### 개인정보 수정

[src/App.jsx](src/App.jsx)의 다음 부분을 수정하세요:

```jsx
// 홈 섹션
<h1>안녕하세요! 👋</h1>
<p>나는 웹 개발자이자 창의적인 문제 해결사입니다.</p>

// 연락처 섹션
<a href="mailto:your@email.com" className="contact-link">Email</a>
<a href="https://github.com/yourprofile" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
```

### 헤더 메뉴 수정

[src/components/Header.jsx](src/components/Header.jsx)를 편집하세요.

## 🎨 스타일 커스터마이징

각 컴포넌트의 CSS 파일을 수정하여 색상, 폰트 등을 변경할 수 있습니다:

- [src/App.css](src/App.css) - 전역 스타일 (색상 변수 포함)
- [src/components/Header.css](src/components/Header.css)
- [src/components/ProjectCard.css](src/components/ProjectCard.css)
- [src/components/BlogCard.css](src/components/BlogCard.css)

## 📱 반응형 디자인

사이트는 모든 화면 크기에서 자동으로 조정됩니다:
- 📱 모바일: 320px 이상
- 📱 태블릿: 768px 이상
- 🖥️ 데스크톱: 1024px 이상

## 🔧 고급 커스터마이징

### 새로운 섹션 추가

1. `src/components/`에 새 컴포넌트 생성
2. `src/App.jsx`에 임포트 및 추가
3. 필요한 CSS 파일 생성

### 마크다운 지원 추가

블로그에 완전한 마크다운 지원을 원한다면:

```bash
npm install react-markdown remark-gfm
```

### 댓글 기능 추가

Disqus, Giscus 등의 서비스를 통합할 수 있습니다.

## 🚨 GitHub Pages 설정

GitHub Pages가 제대로 작동하려면:

1. **저장소 이름**: `username.github.io` 형식이어야 합니다
2. **브랜치**: `main` (또는 설정된 브랜치)
3. **소스**: GitHub Actions (자동)
4. Settings → Pages에서 확인

## 📊 성능 최적화

- Vite의 번들 분석: `npm run build -- --analyze`
- 이미지 최적화: WebP 형식 권장
- 코드 분할: 대용량 컴포넌트는 동적 import 권장

## 🐛 문제 해결

### 배포가 안 될 때
1. GitHub Actions 로그 확인: Settings → Actions
2. `npm run build` 로컬에서 실행해보기
3. Node 버전 확인 (18.x 이상 권장)

### 이미지가 안 보일 때
- `public/` 폴더에 이미지가 있는지 확인
- 경로가 올바른지 확인 (대소문자 구분)
- 파일명에 공백이 있으면 제거

## 📚 추가 자료

- [Vite 공식 문서](https://vite.dev/)
- [React 공식 문서](https://react.dev/)
- [GitHub Pages 공식 문서](https://pages.github.com/)

## 📄 라이선스

MIT License - 자유롭게 사용하고 수정할 수 있습니다.

---

**Happy coding! 🎉**


The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
