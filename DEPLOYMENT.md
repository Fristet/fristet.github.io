# 🚀 배포 가이드

GitHub Pages에 React 포트폴리오를 배포하는 단계별 가이드입니다.

## 1️⃣ GitHub 저장소 준비

### 저장소 이름 확인
반드시 다음 형식이어야 합니다:
```
username.github.io
```

예: `fristet.github.io`

### 저장소 설정 확인

1. GitHub에서 저장소로 이동
2. **Settings** → **Pages** 클릭
3. **Build and deployment** 섹션에서:
   - Source: "GitHub Actions" 선택
   - Branch: "main" (또는 사용 중인 브랜치)

## 2️⃣ 로컬 설정

### Git 설정
```bash
cd i:\Projects\fristet.github.io

# 원격 저장소 확인
git remote -v

# 만약 origin이 없다면 추가
git remote add origin https://github.com/fristet/fristet.github.io.git

# 기본 브랜치 확인 (main이어야 함)
git branch -a
```

### 로컬 테스트 (선택사항)
```bash
# 개발 서버 실행 (테스트용)
npm run dev

# 프로덕션 빌드 테스트
npm run build
npm run preview
```

## 3️⃣ GitHub에 푸시

### 초기 커밋 및 푸시
```bash
# 모든 파일 스테이지
git add .

# 커밋 메시지 작성
git commit -m "Initial portfolio setup with React and Vite"

# main 브랜치로 푸시
git push origin main
```

### 이후 업데이트
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

## 4️⃣ 배포 확인

### GitHub Actions 확인
1. GitHub 저장소로 이동
2. **Actions** 탭 클릭
3. "Deploy to GitHub Pages" 워크플로우 확인
4. ✅ 녹색 체크마크 = 배포 성공

### 웹사이트 접속
배포 완료 후 (약 5-10분):
```
https://fristet.github.io
```

## 🔄 콘텐츠 수정 및 재배포

### 블로그나 프로젝트 수정 후

1. **JSON 파일 수정**
   - `src/data/blog.json` (블로그)
   - `src/data/projects.json` (프로젝트)

2. **로컬 테스트** (선택)
   ```bash
   npm run dev
   # 브라우저에서 확인
   ```

3. **Git에 커밋하고 푸시**
   ```bash
   git add .
   git commit -m "Add new blog post"
   git push origin main
   ```

4. **자동 배포 완료**
   - GitHub Actions가 자동으로 빌드 및 배포
   - 몇 분 후 변경사항이 웹사이트에 반영됨

## 📸 이미지/영상 추가

### 이미지 추가
```bash
1. 이미지를 public/images/ 폴더에 복사
2. src/data/blog.json 또는 src/data/projects.json에서 경로 참조
3. 예: "/images/my-image.jpg"
```

### 영상 추가
```bash
1. 영상을 public/videos/ 폴더에 복사
2. App.jsx나 컴포넌트에서 <video> 태그로 참조
3. 예: <video src="/videos/my-video.mp4" controls></video>
```

## 🎨 개인화 (필수!)

배포하기 전에 다음 항목들을 수정하세요:

### 1. 개인정보 수정
**파일**: [src/App.jsx](../src/App.jsx)

```jsx
// 홈 섹션의 텍스트 수정
<h1>안녕하세요! 👋</h1>
<p>나는 [당신의 직업]이고 [당신의 설명]입니다.</p>

// 연락처 수정
<a href="mailto:your-email@example.com">Email</a>
<a href="https://github.com/your-username">GitHub</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
```

### 2. 색상 테마 변경
**파일**: [src/App.css](../src/App.css)

```css
:root {
  --primary-color: #667eea;      /* 주 색상 */
  --secondary-color: #764ba2;    /* 보조 색상 */
  --text-color: #333;
  --light-bg: #f8f9fa;
}
```

### 3. 헤더 메뉴 수정
**파일**: [src/components/Header.jsx](../src/components/Header.jsx)

### 4. 프로젝트 & 블로그 추가
**파일들**:
- [src/data/projects.json](../src/data/projects.json)
- [src/data/blog.json](../src/data/blog.json)

## 🐛 문제 해결

### ❌ GitHub Actions 실패
```
해결 방법:
1. GitHub Actions 로그 확인
   - Settings → Actions → 워크플로우 클릭
   - 오류 메시지 확인
2. 로컬에서 빌드 테스트
   npm run build
3. Node 버전 확인 (18.x 이상)
```

### ❌ 배포됨이 접속이 안 됨
```
해결 방법:
1. 저장소 이름 확인
   - github.io 형식이어야 함
2. GitHub Pages 설정 확인
   - Settings → Pages
   - Source: GitHub Actions
3. 5-10분 대기 (첫 배포는 시간 소요)
```

### ❌ 이미지가 안 보임
```
해결 방법:
1. 파일이 public/images/에 있는지 확인
2. JSON에 경로가 정확한지 확인
   - 올바름: "/images/photo.jpg"
   - 잘못됨: "images/photo.jpg" 또는 "./images/photo.jpg"
3. 파일명에 공백 제거
4. 대소문자 확인 (Linux는 대소문자 구분)
```

## 📚 추가 참고

- [GitHub Pages 공식 문서](https://pages.github.com/)
- [GitHub Actions 문서](https://docs.github.com/en/actions)
- [Vite 배포 가이드](https://vite.dev/guide/static-deploy#github-pages)

---

**주의**: 처음 배포 후 웹사이트가 보이는 데 5-10분 정도 걸릴 수 있습니다. 인내심을 가져주세요! 🎉
