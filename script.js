// [script.js]

// ===== 프로젝트 데이터 =====
let projects = [];
let blogPosts = [];

// ===== URL 기반 블로그 포스트 열기 =====
function checkBlogUrlAndOpenPost() {
    const hash = window.location.hash;
    const blogPostMatch = hash.match(/^#blog\/(\d+)$/);
    
    console.log('checkBlogUrlAndOpenPost called, hash:', hash, 'blogPosts.length:', blogPosts.length);
    
    if (blogPostMatch) {
        const postId = parseInt(blogPostMatch[1]);
        console.log('Trying to open post with ID:', postId);
        
        // blogPosts가 로드될 때까지 대기
        if (blogPosts.length > 0) {
            // Blog 뷰로 전환
            document.querySelectorAll('.content-view').forEach(view => view.classList.remove('active'));
            const blogView = document.getElementById('blogView');
            if (blogView) {
                blogView.classList.add('active');
                console.log('Blog view activated');
            }
            
            // 네비게이션 활성 상태 변경
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#blog') {
                    link.classList.add('active');
                }
            });
            
            // 포스트 열기
            setTimeout(() => {
                console.log('Calling openBlogPost with ID:', postId);
                openBlogPost(postId);
            }, 200);
        } else {
            // 데이터가 로드되지 않았다면 조금 후 재시도
            console.log('Blog posts not loaded yet, retrying...');
            setTimeout(checkBlogUrlAndOpenPost, 100);
        }
    } else if (hash === '#blog') {
        // 블로그 메인 페이지
        document.querySelectorAll('.content-view').forEach(view => view.classList.remove('active'));
        const blogView = document.getElementById('blogView');
        if (blogView) {
            blogView.classList.add('active');
        }
        
        // 네비게이션 활성 상태 변경
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#blog') {
                link.classList.add('active');
            }
        });
    }
}

// 브라우저 뒤로가기/앞으로가기 처리
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.postId) {
        openBlogPost(event.state.postId);
    } else {
        const hash = window.location.hash;
        if (hash === '#blog' || hash.startsWith('#blog/')) {
            closeBlogDetail();
        }
    }
});

// URL 해시 변경 감지 (브라우저 히스토리 네비게이션 용)
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    console.log('hashchange event, new hash:', hash);
    
    // 블로그 관련 URL 변경 처리
    if (hash.startsWith('#blog')) {
        checkBlogUrlAndOpenPost();
    }
});

// 로컬 스토리지에서 프로젝트 로드
function loadProjects() {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
        try {
            projects = JSON.parse(savedProjects);
            console.log('프로젝트 로드 완료 (localStorage):', projects.length, '개');
        } catch (error) {
            console.error('localStorage 데이터 로드 실패:', error);
            // localStorage 파싱 실패 시 JSON 파일에서 로드 시도
            loadProjectsFromJSON();
        }
    } else {
        // console.log('localStorage에 저장된 데이터가 없습니다. JSON 파일에서 로드를 시도합니다.');
        loadProjectsFromJSON();
    }
}

// JSON 파일에서 프로젝트 데이터 로드
function loadProjectsFromJSON() {
    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON 파일을 찾을 수 없습니다.');
            }
            return response.json();
        })
        .then(data => {
            projects = data;
           // console.log('프로젝트 로드 완료 (JSON 파일):', projects.length, '개');
            renderProjects();
            renderHeroSlider();
        })
        .catch(error => {
            console.error('JSON 파일 로드 실패:', error);
            console.log('하드코딩된 프로젝트 데이터를 사용합니다.');
            // JSON 파일 로드 실패 시 하드코딩된 데이터 유지
        });
}

// ===== DOM 요소 =====
const projectsGrid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const heroSlider = document.getElementById('heroSlider');
const sliderDots = document.getElementById('sliderDots');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const imageLightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('.lightbox-close');

// ===== 슬라이더 상태 =====
let currentSlide = 0;
let slideInterval;

// ===== 필터 상태 =====
let currentFilter = 'all';

// ===== 블로그 스크롤 위치 저장 =====
let savedScrollPosition = 0;

// ===== 히어로 슬라이더 렌더링 =====
function renderHeroSlider() {
    if (!heroSlider || projects.length === 0) return;

    // 슬라이드 생성
    heroSlider.innerHTML = projects.map(project => {
        const thumbnail = project.image || 
                         (project.media && project.media.length > 0 && project.media[0].type === 'image' ? project.media[0].src : null);
        
        return `
            <div class="hero-slide" data-project-id="${project.id}">
                ${thumbnail ? 
                    `<img src="${thumbnail}" alt="${project.title}" class="hero-slide-image">` :
                    `<div class="hero-slide-placeholder"></div>`
                }
            </div>
        `;
    }).join('');

    // 도트 생성
    if (sliderDots) {
        sliderDots.innerHTML = projects.map((_, index) => 
            `<div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
        ).join('');

        // 도트 클릭 이벤트
        document.querySelectorAll('.slider-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                goToSlide(parseInt(dot.dataset.index));
            });
        });
    }

    // 자동 슬라이드 시작
    startAutoSlide();
}

// ===== 슬라이드 이동 =====
function goToSlide(index) {
    currentSlide = index;
    if (currentSlide < 0) currentSlide = projects.length - 1;
    if (currentSlide >= projects.length) currentSlide = 0;

    const offset = -currentSlide * 100;
    heroSlider.style.transform = `translateX(${offset}%)`;

    // 도트 업데이트
    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// ===== 이전/다음 슬라이드 =====
if (prevSlide) {
    prevSlide.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetAutoSlide();
    });
}

if (nextSlide) {
    nextSlide.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetAutoSlide();
    });
}

// ===== 자동 슬라이드 =====
function startAutoSlide() {
    slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000); // 5초마다 자동 전환
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// 마우스 호버 시 자동 슬라이드 중지
if (heroSlider) {
    heroSlider.parentElement.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    heroSlider.parentElement.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}

// ===== 프로젝트 카드 렌더링 =====
function renderProjects() {
    const filteredProjects = currentFilter === 'all' 
        ? projects 
        : projects.filter(p => p.type === currentFilter);

    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p>해당 타입의 프로젝트가 없습니다.</p>
            </div>
        `;
        return;
    }

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : '프로젝트 이미지'}
            </div>
            <div class="project-info">
                <div class="project-info-header">
                    <span class="project-category">${project.category}</span>
                    ${project.type ? `<span class="project-type project-type-${project.type}">${project.type === 'professional' ? 'Professional' : 'Personal'}</span>` : ''}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // 프로젝트 카드 클릭 이벤트
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            openProjectModal(projectId);
        });
    });
}

// ===== 텍스트 포맷팅 헬퍼 함수 =====
function formatText(str) {
    if (!str) return '';
    return str
        .split('\n')
        .map(line => {
            // YouTube 동영상: @[youtube](video_id 또는 youtube_url)
            if (line.trim().match(/^@\[youtube\]\(.*?\)$/)) {
                const match = line.trim().match(/^@\[youtube\]\((.*?)\)/);
                if (match) {
                    let videoId = match[1];
                    // YouTube URL에서 video ID 추출
                    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
                    const urlMatch = videoId.match(youtubeRegex);
                    if (urlMatch) {
                        videoId = urlMatch[1];
                    }
                    return `<div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 1.5rem 0; border-radius: 8px; overflow: hidden;">
                        <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                    </div>`;
                }
            }
            
            // 비디오 파일: @[video](video_url)
            if (line.trim().match(/^@\[video\]\(.*?\)$/)) {
                const match = line.trim().match(/^@\[video\]\((.*?)\)/);
                if (match) {
                    const url = match[1];
                    return `<div style="margin: 1.5rem 0;">
                        <video controls style="max-width: 100%; height: auto; display: block; border-radius: 8px;">
                            <source src="${url}" type="video/mp4">
                            브라우저가 비디오를 지원하지 않습니다.
                        </video>
                    </div>`;
                }
            }
            
            // 갤러리: ![alt1](url1) ![alt2](url2) 또는 ![alt1](url1) ![alt2](url2) ![alt3](url3)
            const galleryMatch = line.trim().match(/^(!\[.*?\]\(.*?\)\s*){2,3}$/);
            if (galleryMatch) {
                const images = [...line.matchAll(/!\[(.*?)\]\((.*?)\)/g)];
                const imageCount = images.length;
                const gridCols = imageCount === 2 ? '1fr 1fr' : '1fr 1fr 1fr';
                
                return `<div style="display: grid; grid-template-columns: ${gridCols}; gap: 1rem; margin: 1.5rem 0;">
                    ${images.map(match => {
                        const alt = match[1] || '';
                        const url = match[2];
                        return `<div>
                            <img src="${url}" alt="${alt}" onclick="openLightbox('${url}', '${alt}')" class="blog-content-image" style="width: 100%; height: auto; border-radius: 8px; cursor: pointer;">
                            ${alt && alt.trim() ? `<p style="text-align: center; font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">${alt}</p>` : ''}
                        </div>`;
                    }).join('')}
                </div>`;
            }
            
            // 단일 이미지: ![alt text](image_url)
            if (line.trim().match(/^!\[.*?\]\(.*?\)$/)) {
                const match = line.trim().match(/^!\[(.*?)\]\((.*?)\)/);
                if (match) {
                    const alt = match[1] || '';
                    const url = match[2];
                    return `<div style="margin: 1.5rem 0;">
                        <img src="${url}" alt="${alt}" onclick="openLightbox('${url}', '${alt}')" class="blog-content-image" style="max-width: 100%; height: auto; display: block; border-radius: 8px; cursor: pointer;">
                        ${alt && alt.trim() ? `<p style="text-align: center; font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.5rem;">${alt}</p>` : ''}
                    </div>`;
                }
            }
            // ### text → <h5>text</h5> (소분류)
            if (line.trim().startsWith('### ')) {
                return `<h5 style="font-size: 1rem; font-weight: 600; margin: 0.5rem 0 0.25rem 0; color: var(--text-primary);">${line.trim().substring(4)}</h5>`;
            }
            // ## text → <h4>text</h4> (중분류)
            if (line.trim().startsWith('## ')) {
                return `<h4 style="font-size: 1.2rem; font-weight: 600; margin: 0.6rem 0 0.3rem 0; color: var(--text-primary);">${line.trim().substring(3)}</h4>`;
            }
            // # text → <h3>text</h3> (대분류)
            if (line.trim().startsWith('# ')) {
                return `<h3 style="font-size: 1.4rem; font-weight: 700; margin: 0.8rem 0 0.4rem 0; color: white;">${line.trim().substring(2)}</h3>`;
            }
            // **text** → <strong>text</strong> (볼드)
            return line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        })
        .join('<br>');
}

// ===== 프로젝트 모달 열기 =====
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // YouTube URL 변환
    function convertToEmbedUrl(url) {
        // YouTube 일반 링크 패턴
        const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
        const match = url.match(youtubeRegex);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}?rel=0`;
        }
        // 이미 embed 형식이면 그대로 반환
        if (url.includes('youtube.com/embed/')) {
            return url;
        }
        return url;
    }

    let mediaGalleryHTML = '';
    if (project.media && project.media.length > 0) {
        mediaGalleryHTML = `
            <div class="media-gallery">
                ${project.media.map((item, index) => {
                    // 캡션과 설명에 줄바꿈 적용
                    const captionHtml = item.caption ? `<p class="media-caption">${formatText(item.caption)}</p>` : '';
                    const descHtml = item.description ? `<p class="media-description">${formatText(item.description)}</p>` : '';

                    if (item.type === 'gallery') {
                        // 갤러리: 콤마로 구분된 이미지를 그리드로 표시
                        const images = item.src.split(',').map(s => s.trim()).filter(s => s);
                        return `
                            <div class="media-item media-gallery-group">
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 0.5rem;">
                                    ${images.map(imgSrc => `
                                        <div style="position: relative; padding-bottom: 75%; overflow: hidden; border-radius: 4px;">
                                            <img src="${imgSrc}" alt="${item.caption || project.title}" loading="lazy" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; cursor: zoom-in;">
                                        </div>
                                    `).join('')}
                                </div>
                                ${captionHtml}
                                ${descHtml}
                            </div>
                        `;
                    } else if (item.type === 'image') {
                        return `
                            <div class="media-item">
                                <img src="${item.src}" alt="${item.caption || project.title}" loading="lazy">
                                ${captionHtml}
                                ${descHtml}
                            </div>
                        `;
                    } else if (item.type === 'video') {
                        const embedUrl = convertToEmbedUrl(item.src);
                        return `
                            <div class="media-item media-video">
                                <div class="video-container">
                                    <iframe src="${embedUrl}" title="${item.caption || project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                ${captionHtml}
                                ${descHtml}
                            </div>
                        `;
                    } else if (item.type === 'text') {
                        return `
                            <div class="media-item media-text">
                                ${captionHtml}
                                ${descHtml}
                            </div>
                        `;
                    }
                    return '';
                }).join('')}
            </div>
        `;
    } else {
        mediaGalleryHTML = `
            <div class="modal-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : '프로젝트 이미지'}
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <div class="project-meta-info">
                ${project.company ? `<p class="project-company">${project.company}</p>` : ''}
                ${project.date ? `<p class="project-date">${project.date}</p>` : ''}
            </div>
            <div class="modal-meta">
                <span class="project-category">${project.category}</span>
                ${project.type ? `<span class="project-type project-type-${project.type}">${project.type === 'professional' ? 'Professional' : 'Personal'}</span>` : ''}
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>프로젝트 개요</h3>
            <p>${formatText(project.details.overview)}</p>
        </div>

        ${project.details.responsibilities && project.details.responsibilities.length > 0 ? `
        <div class="modal-section">
            <h3>주요 업무</h3>
            <ul>
                ${project.details.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        ` : ''}

        ${project.details.technologies && project.details.technologies.trim() ? `
        <div class="modal-section">
            <h3>사용 기술</h3>
            <p>${project.details.technologies}</p>
        </div>
        ` : ''}

        ${mediaGalleryHTML}

        ${project.details.results && project.details.results.trim() ? `
        <div class="modal-section">
            <h3>성과</h3>
            <p>${formatText(project.details.results)}</p>
        </div>
        ` : ''}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 모달 스크롤을 최상단으로 이동
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;
    if (modalBody) modalBody.scrollTop = 0;

    // 이미지 클릭 시 라이트박스 열기
    setTimeout(() => {
        const modalImages = modalBody.querySelectorAll('img');
        modalImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                const mediaItem = img.closest('.media-item');
                // innerText를 가져오면 줄바꿈이 보존됨
                const caption = mediaItem?.querySelector('.media-caption')?.innerText || '';
                const description = mediaItem?.querySelector('.media-description')?.innerText || '';
                openLightbox(img.src, img.alt, caption, description);
            });
        });
    }, 100);
}

// ===== 모달 닫기 =====
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    // 모달 스크롤을 최상단으로 초기화
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;
    if (modalBody) modalBody.scrollTop = 0;
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ===== 이미지 라이트박스 =====
function openLightbox(src, alt, caption = '', description = '') {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxInfo = document.getElementById('lightboxInfo');
    
    // 라이트박스에서도 줄바꿈 적용 (<br> 변환)
    if (caption) {
        lightboxCaption.innerHTML = caption.replace(/\n/g, '<br>');
        lightboxCaption.style.display = 'block';
    } else {
        lightboxCaption.style.display = 'none';
    }
    
    if (description) {
        lightboxDescription.innerHTML = description.replace(/\n/g, '<br>');
        lightboxDescription.style.display = 'block';
    } else {
        lightboxDescription.style.display = 'none';
    }
    
    if (!caption && !description) {
        lightboxInfo.style.display = 'none';
    } else {
        lightboxInfo.style.display = 'block';
    }
    
    imageLightbox.classList.add('active');
}

function closeLightbox() {
    imageLightbox.classList.remove('active');
    lightboxImage.src = '';
}

if (lightboxClose) {
    lightboxClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });
}

if (imageLightbox) {
    imageLightbox.addEventListener('click', closeLightbox);
    lightboxImage.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== 모바일 메뉴 토글 =====
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// ===== 네비게이션 링크 클릭 시 =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const href = link.getAttribute('href');
        
        // URL 해시 업데이트
        if (href && href.startsWith('#')) {
            window.location.hash = href;
        }
        
        // Blog 탭 클릭 시에만 특별 처리
        if (href === '#blog') {
            // 열려있는 포스트 닫기
            const listView = document.getElementById('blogListView');
            const detailView = document.getElementById('blogDetailView');
            
            if (listView && detailView && detailView.style.display === 'block') {
                listView.style.display = 'block';
                detailView.style.display = 'none';
            }
            
            // 스크롤을 최상단으로 이동
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    });
});

// ===== 스크롤 시 네비게이션 active 상태 변경 =====
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===== 우클릭 방지 =====
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// ===========================
// 블로그 관리
// ===========================

let currentBlogFilter = 'all';
let currentBlogPage = 1;
const postsPerPage = 3;

// 블로그 포스트 로드
function loadBlogPosts() {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
        try {
            blogPosts = JSON.parse(savedPosts);
            console.log('블로그 포스트 로드 완료 (localStorage):', blogPosts.length, '개');
            // URL 확인
            checkBlogUrlAndOpenPost();
        } catch (error) {
            console.error('localStorage 블로그 데이터 로드 실패:', error);
            loadBlogPostsFromJSON();
        }
    } else {
        console.log('localStorage에 저장된 블로그 데이터가 없습니다. JSON 파일에서 로드를 시도합니다.');
        loadBlogPostsFromJSON();
    }
}

// JSON 파일에서 블로그 포스트 로드
function loadBlogPostsFromJSON() {
    fetch('blog.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('blog.json 파일을 찾을 수 없습니다.');
            }
            return response.json();
        })
        .then(data => {
            blogPosts = data;
            console.log('블로그 포스트 로드 완료 (JSON 파일):', blogPosts.length, '개');
            renderBlogPosts();
            // URL 기반 포스트 열기 확인
            checkBlogUrlAndOpenPost();
        })
        .catch(error => {
            console.error('blog.json 파일 로드 실패:', error);
            console.log('블로그 포스트가 없습니다.');
        });
}

// 블로그 포스트 렌더링
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    // 공개된 포스트만 필터링
    const publishedPosts = blogPosts.filter(post => post.published !== false);
    
    // 날짜순으로 정렬 (최신순)
    const sortedBlogPosts = [...publishedPosts].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    const filteredPosts = currentBlogFilter === 'all' 
        ? sortedBlogPosts 
        : sortedBlogPosts.filter(post => post.category === currentBlogFilter);

    if (filteredPosts.length === 0) {
        blogGrid.innerHTML = '<p class="empty-message">포스트가 없습니다.</p>';
        document.getElementById('blogPagination').innerHTML = '';
        return;
    }
    
    // 페이지네이션 계산
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentBlogPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    blogGrid.innerHTML = paginatedPosts.map(post => {
        const dateFormatted = formatBlogDate(post.date);
        return `
        <article class="blog-card" onclick="openBlogPost(${post.id})">
            <div class="blog-card-image ${!post.thumbnail ? 'no-image' : ''}">
                ${post.thumbnail ? `<img src="${post.thumbnail}" alt="${post.title}" loading="lazy">` : ''}
                <div class="blog-date-overlay">
                    <span class="day">${dateFormatted.day}</span>
                    <span class="month">${dateFormatted.month}</span>
                </div>
            </div>
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span class="blog-category">${post.category}</span>
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                ${post.tags && post.tags.length > 0 ? `
                    <div class="blog-card-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        </article>
    `;
    }).join('');
    
    // 사이드바 위젯 렌더링
    renderFeaturedPosts();
    renderCategories();
    renderTags();
    renderPagination(totalPages);
}

// 페이지네이션 렌더링
function renderPagination(totalPages) {
    const paginationContainer = document.getElementById('blogPagination');
    if (!paginationContainer || totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // 이전 버튼
    paginationHTML += `<button onclick="changePage(${currentBlogPage - 1})" ${currentBlogPage === 1 ? 'disabled' : ''}>‹</button>`;
    
    // 페이지 번호
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button onclick="changePage(${i})" class="${i === currentBlogPage ? 'active' : ''}">${i}</button>`;
    }
    
    // 다음 버튼
    paginationHTML += `<button onclick="changePage(${currentBlogPage + 1})" ${currentBlogPage === totalPages ? 'disabled' : ''}>›</button>`;
    
    paginationContainer.innerHTML = paginationHTML;
}

// 페이지 변경
function changePage(page) {
    // 날짜순으로 정렬 (최신순)
    const sortedBlogPosts = [...blogPosts].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    const filteredPosts = currentBlogFilter === 'all' 
        ? sortedBlogPosts 
        : sortedBlogPosts.filter(post => post.category === currentBlogFilter);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentBlogPage = page;
    renderBlogPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 블로그 포스트 상세 모달 열기
function openBlogPost(id) {
    console.log('openBlogPost called with id:', id);
    console.log('blogPosts:', blogPosts);
    
    const post = blogPosts.find(p => p.id === id);
    if (!post) {
        console.error('Post not found with id:', id);
        return;
    }

    const listView = document.getElementById('blogListView');
    const detailView = document.getElementById('blogDetailView');
    const detailContent = document.getElementById('blogDetailContent');

    if (!listView || !detailView || !detailContent) {
        console.error('Blog view elements not found');
        return;
    }

    // 현재 스크롤 위치 저장
    savedScrollPosition = window.pageYOffset;

    // 날짜 포맷 (Saturday, June 06, 2020)
    const date = new Date(post.date);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${days[date.getDay()]}, ${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;

    detailContent.innerHTML = `
        <h1 class="blog-post-title">${post.title}</h1>
        <div class="blog-post-meta">
            <span class="post-date">${formattedDate}</span>
        </div>
        ${post.thumbnail ? `
            <div class="blog-post-image">
                <img src="${post.thumbnail}" alt="${post.title}">
            </div>
        ` : ''}
        <div class="blog-post-content">
            ${formatText(post.content)}
        </div>
        ${post.tags && post.tags.length > 0 ? `
            <div class="blog-post-tags-section">
                <h3>Tags</h3>
                <div class="blog-post-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        ` : ''}
    `;

    // 목록 숨기고 상세 보이기
    listView.style.display = 'none';
    detailView.style.display = 'block';
    
    // URL 변경 (history API 사용)
    const newUrl = `#blog/${id}`;
    if (window.location.hash !== newUrl) {
        history.pushState({ postId: id }, '', newUrl);
    }
    
    // 뒤로가기 버튼 위치로 스크롤
    setTimeout(() => {
        const backButton = document.querySelector('.back-to-list-btn');
        if (backButton) {
            const offset = 100; // 헤더 높이 고려
            const elementPosition = backButton.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
    }, 50);
}

// 블로그 상세에서 목록으로 돌아가기
function closeBlogDetail() {
    const listView = document.getElementById('blogListView');
    const detailView = document.getElementById('blogDetailView');
    
    if (listView && detailView) {
        listView.style.display = 'block';
        detailView.style.display = 'none';
        
        // URL을 블로그 메인으로 복원
        if (window.location.hash !== '#blog') {
            history.pushState(null, '', '#blog');
        }
        
        // 저장된 스크롤 위치로 복원
        setTimeout(() => {
            window.scrollTo({ top: savedScrollPosition, behavior: 'smooth' });
        }, 50);
    }
}

// 블로그 필터 설정
function setupBlogFilters() {
    const blogFilters = document.querySelector('.blog-filters');
    if (!blogFilters) return;
    
    blogFilters.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            blogFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentBlogFilter = btn.dataset.filter;
            renderBlogPosts();
        });
    });
}

// Featured Posts 렌더링
function renderFeaturedPosts() {
    const featuredPostsContainer = document.getElementById('featuredPosts');
    if (!featuredPostsContainer || blogPosts.length === 0) return;
    
    // 공개된 포스트만 필터링하고 날짜순으로 정렬 (최신순) 후 최신 3개 포스트를 Featured로 표시
    const publishedPosts = blogPosts.filter(post => post.published !== false);
    const sortedPosts = [...publishedPosts].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    const featured = sortedPosts.slice(0, 3);
    
    featuredPostsContainer.innerHTML = featured.map(post => `
        <div class="featured-post-item" onclick="openBlogPost(${post.id})">
            <h4>${post.title}</h4>
            <span class="post-date">${post.date}</span>
        </div>
    `).join('');
}

// 날짜 포맷 변환 함수 (2026-06-14 → {day: 14, month: Jun})
function formatBlogDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    return { day, month };
}

// Categories 렌더링
function renderCategories() {
    const categoriesContainer = document.getElementById('categoriesWidget');
    if (!categoriesContainer) return;
    
    // 공개된 포스트에서 모든 카테고리 수집
    const publishedPosts = blogPosts.filter(post => post.published !== false);
    const categories = new Set();
    publishedPosts.forEach(post => {
        if (post.category) {
            categories.add(post.category);
        }
    });
    
    // All 버튼 + 각 카테고리 버튼 생성
    const sortedCategories = ['All', ...Array.from(categories).sort()];
    
    categoriesContainer.innerHTML = sortedCategories.map(category => {
        const filterValue = category === 'All' ? 'all' : category;
        const activeClass = category === 'All' ? 'active' : '';
        return `<button class="filter-btn ${activeClass}" data-filter="${filterValue}">${category}</button>`;
    }).join('');
    
    // 카테고리 클릭 이벤트 추가
    categoriesContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            categoriesContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentBlogFilter = btn.dataset.filter;
            currentBlogPage = 1;
            renderBlogPosts();
        });
    });
}

// Tags 렌더링
function renderTags() {
    const tagsContainer = document.getElementById('tagsWidget');
    if (!tagsContainer || blogPosts.length === 0) return;
    
    // 공개된 포스트에서 모든 태그 수집 및 카운트
    const publishedPosts = blogPosts.filter(post => post.published !== false);
    const tagCounts = {};
    publishedPosts.forEach(post => {
        if (post.tags) {
            post.tags.forEach(tag => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        }
    });
    
    // 태그를 카운트 순으로 정렬
    const sortedTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 15); // 최대 15개만 표시
    
    tagsContainer.innerHTML = sortedTags.map(([tag, count]) => `
        <span class="tag" onclick="filterByTag('${tag}')" style="cursor: pointer;">${tag} <small style="opacity: 0.7;">${count}</small></span>
    `).join('');
}

// 태그로 필터링
function filterByTag(tag) {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    // 공개된 포스트만 필터링하고 날짜순으로 정렬 (최신순)
    const publishedPosts = blogPosts.filter(post => post.published !== false);
    const sortedBlogPosts = [...publishedPosts].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    const filteredPosts = sortedBlogPosts.filter(post => 
        post.tags && post.tags.includes(tag)
    );
    
    if (filteredPosts.length === 0) {
        blogGrid.innerHTML = `<p class="empty-message">'${tag}' 태그를 포함한 포스트가 없습니다.</p>`;
        document.getElementById('blogPagination').innerHTML = '';
        return;
    }
    
    // 페이지네이션 계산
    currentBlogPage = 1;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice(0, postsPerPage);
    
    blogGrid.innerHTML = paginatedPosts.map(post => {
        const dateFormatted = formatBlogDate(post.date);
        return `
        <article class="blog-card" onclick="openBlogPost(${post.id})">
            <div class="blog-card-image ${!post.thumbnail ? 'no-image' : ''}">
                ${post.thumbnail ? `<img src="${post.thumbnail}" alt="${post.title}" loading="lazy">` : ''}
                <div class="blog-date-overlay">
                    <span class="day">${dateFormatted.day}</span>
                    <span class="month">${dateFormatted.month}</span>
                </div>
            </div>
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span class="blog-category">${post.category}</span>
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                ${post.tags && post.tags.length > 0 ? `
                    <div class="blog-card-tags">
                        ${post.tags.map(t => `<span class="tag" onclick="event.stopPropagation(); filterByTag('${t}');" style="cursor: pointer;">${t}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        </article>
    `;
    }).join('');
    
    // 임시 필터로 태그 설정 (페이지네이션을 위해)
    const tempFilter = currentBlogFilter;
    currentBlogFilter = 'tag:' + tag;
    
    // 카테고리 필터 All로 리셋
    document.querySelectorAll('.blog-filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 페이지네이션 렌더링 (태그 필터용 특별 처리)
    renderTagPagination(totalPages, tag);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 태그 필터용 페이지네이션
function renderTagPagination(totalPages, tag) {
    const paginationContainer = document.getElementById('blogPagination');
    if (!paginationContainer || totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // 이전 버튼
    paginationHTML += `<button onclick="changeTagPage(${currentBlogPage - 1}, '${tag}')" ${currentBlogPage === 1 ? 'disabled' : ''}>‹</button>`;
    
    // 페이지 번호
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button onclick="changeTagPage(${i}, '${tag}')" class="${i === currentBlogPage ? 'active' : ''}">${i}</button>`;
    }
    
    // 다음 버튼
    paginationHTML += `<button onclick="changeTagPage(${currentBlogPage + 1}, '${tag}')" ${currentBlogPage === totalPages ? 'disabled' : ''}>›</button>`;
    
    paginationContainer.innerHTML = paginationHTML;
}

// 태그 페이지 변경
function changeTagPage(page, tag) {
    // 날짜순으로 정렬 (최신순)
    const sortedBlogPosts = [...blogPosts].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    const filteredPosts = sortedBlogPosts.filter(post => 
        post.tags && post.tags.includes(tag)
    );
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentBlogPage = page;
    filterByTag(tag);
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadBlogPosts();
    renderHeroSlider();
    renderProjects();
    renderBlogPosts();
    setupBlogFilters();
    setupViewSwitching();
    
    // 초기 로드 시 URL 확인
    setTimeout(checkBlogUrlAndOpenPost, 200);
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.project-filters');
            if (parent) {
                parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                renderProjects();
            }
        });
    });
    
    // 블로그 모달 닫기
    const blogModal = document.getElementById('blogModal');
    if (blogModal) {
        blogModal.querySelector('.modal-close').addEventListener('click', () => {
            blogModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        blogModal.addEventListener('click', (e) => {
            if (e.target === blogModal) {
                blogModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// ===== 뷰 전환 (메인 <-> 블로그) =====
function setupViewSwitching() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mainView = document.getElementById('mainView');
    const blogView = document.getElementById('blogView');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // 네비게이션 활성화 상태 업데이트
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // 뷰 전환
            if (href === '#blog') {
                e.preventDefault();
                mainView.classList.remove('active');
                blogView.classList.add('active');
                
                // 블로그 상세페이지가 열려있으면 닫기
                const listView = document.getElementById('blogListView');
                const detailView = document.getElementById('blogDetailView');
                if (listView && detailView && detailView.style.display === 'block') {
                    listView.style.display = 'block';
                    detailView.style.display = 'none';
                }
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (href.startsWith('#')) {
                // 메인 뷰의 섹션으로 이동
                mainView.classList.add('active');
                blogView.classList.remove('active');
                
                // Home 메뉴 클릭 시 맨 위로 스크롤
                if (href === '#home') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    });
    
    // 초기 로드 시 URL 해시 확인하여 뷰 설정
    const hash = window.location.hash;
    if (hash === '#blog' || hash.startsWith('#blog/')) {
        mainView.classList.remove('active');
        blogView.classList.add('active');
        
        // 네비게이션 활성화
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#blog') {
                link.classList.add('active');
            }
        });
    }
}