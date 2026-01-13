// [script.js]

// ===== 프로젝트 데이터 =====
let projects = [];

// 로컬 스토리지에서 프로젝트 로드
function loadProjects() {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
        try {
            projects = JSON.parse(savedProjects);
            console.log('프로젝트 로드 완료:', projects.length, '개');
        } catch (error) {
            console.error('프로젝트 데이터 로드 실패:', error);
            projects = [];
        }
    } else {
        console.log('저장된 프로젝트가 없습니다. 관리자 페이지에서 프로젝트를 추가하세요.');
        projects = [];
    }
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

// ===== 프로젝트 모달 열기 =====
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // 헬퍼: 줄바꿈을 <br>로 변환
    const nl2br = (str) => str ? str.replace(/\n/g, '<br>') : '';

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
                    const captionHtml = item.caption ? `<p class="media-caption">${nl2br(item.caption)}</p>` : '';
                    const descHtml = item.description ? `<p class="media-description">${nl2br(item.description)}</p>` : '';

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
                ${project.company ? `<p class="project-company">🏢 ${project.company}</p>` : ''}
                ${project.date ? `<p class="project-date">📅 ${project.date}</p>` : ''}
            </div>
            <div class="modal-meta">
                <span class="project-category">${project.category}</span>
                ${project.type ? `<span class="project-type project-type-${project.type}">${project.type === 'professional' ? 'Professional' : 'Personal'}</span>` : ''}
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>프로젝트 개요</h3>
            <p>${nl2br(project.details.overview)}</p>
        </div>

        ${project.details.responsibilities && project.details.responsibilities.length > 0 ? `
        <div class="modal-section">
            <h3>주요 업무</h3>
            <ul>
                ${project.details.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        ` : ''}

        <div class="modal-section">
            <h3>사용 기술</h3>
            <p>${project.details.technologies}</p>
        </div>

        ${mediaGalleryHTML}

        ${project.details.results && project.details.results.trim() ? `
        <div class="modal-section">
            <h3>성과</h3>
            <p>${nl2br(project.details.results)}</p>
        </div>
        ` : ''}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

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

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    renderHeroSlider();
    renderProjects();
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProjects();
        });
    });
});