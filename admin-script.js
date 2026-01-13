// ===== 데이터 저장소 =====
let projects = [];
let currentEditingId = null;

// ===== DOM 요소 =====
const projectsList = document.getElementById('projectsList');
const editModal = document.getElementById('editModal');
const codeModal = document.getElementById('codeModal');
const projectForm = document.getElementById('projectForm');
const addProjectBtn = document.getElementById('addProjectBtn');
const closeModal = document.getElementById('closeModal');
const closeCodeModal = document.getElementById('closeCodeModal');
const cancelBtn = document.getElementById('cancelBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');

// ===== 초기화 =====
function init() {
    // 로컬 스토리지에서 데이터 로드
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
        projects = JSON.parse(savedProjects);
    }
    renderProjects();
}

// ===== 프로젝트 렌더링 =====
function renderProjects() {
    if (projects.length === 0) {
        projectsList.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h3>📋 프로젝트가 없습니다</h3>
                <p>새 프로젝트를 추가하여 시작하세요.</p>
            </div>
        `;
        return;
    }

    projectsList.innerHTML = projects.map((project, index) => `
        <div class="project-card">
            <div class="project-card-header">
                <div>
                    <h3 class="project-card-title">${project.title}</h3>
                    ${project.company ? `<p class="project-card-company">🏢 ${project.company}</p>` : ''}
                    ${project.type ? `<span class="project-type project-type-${project.type}">${project.type === 'professional' ? '🏢 Professional' : '👤 Personal'}</span>` : ''}
                    <span class="project-card-category">${project.category}</span>
                </div>
                <div class="order-controls">
                    <button class="btn-icon" onclick="moveProject(${index}, -1)" ${index === 0 ? 'disabled' : ''} title="위로 이동">⬆️</button>
                    <button class="btn-icon" onclick="moveProject(${index}, 1)" ${index === projects.length - 1 ? 'disabled' : ''} title="아래로 이동">⬇️</button>
                </div>
            </div>
            <p class="project-card-description">${project.description}</p>
            <div class="project-card-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="project-card-actions">
                <button class="btn btn-secondary" onclick="editProject(${project.id})">✏️ 편집</button>
                <button class="btn btn-danger" onclick="deleteProject(${project.id})">🗑️ 삭제</button>
            </div>
        </div>
    `).join('');
}

// ===== 프로젝트 순서 이동 =====
function moveProject(index, direction) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= projects.length) return;
    
    // 배열에서 위치 교환
    [projects[index], projects[newIndex]] = [projects[newIndex], projects[index]];
    
    saveProjects();
    renderProjects();
}

// ===== 프로젝트 추가 =====
addProjectBtn.addEventListener('click', () => {
    currentEditingId = null;
    document.getElementById('modalTitle').textContent = '새 프로젝트 추가';
    resetForm();
    editModal.classList.add('active');
});

// ===== 프로젝트 편집 =====
function editProject(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    currentEditingId = id;
    document.getElementById('modalTitle').textContent = '프로젝트 편집';
    
    // 기본 정보
    document.getElementById('projectId').value = project.id;
    document.getElementById('projectTitle').value = project.title;
    document.getElementById('projectCompany').value = project.company || '';
    document.getElementById('projectType').value = project.type || '';
    document.getElementById('projectDate').value = project.date || '';
    document.getElementById('projectCategory').value = project.category;
    document.getElementById('projectDescription').value = project.description;
    document.getElementById('projectTags').value = project.tags.join(', ');
    document.getElementById('projectImage').value = project.image || '';

    // 미디어
    renderMediaList(project.media || []);

    // 상세 정보
    document.getElementById('projectOverview').value = project.details.overview;
    renderResponsibilities(project.details.responsibilities);
    document.getElementById('projectTechnologies').value = project.details.technologies;
    document.getElementById('projectResults').value = project.details.results;

    editModal.classList.add('active');
}

// ===== 프로젝트 삭제 =====
function deleteProject(id) {
    if (confirm('정말 이 프로젝트를 삭제하시겠습니까?')) {
        projects = projects.filter(p => p.id !== id);
        saveProjects();
        renderProjects();
    }
}

// ===== 폼 리셋 =====
function resetForm() {
    projectForm.reset();
    renderMediaList([]);
    renderResponsibilities(['']);
}

// ===== 미디어 리스트 렌더링 =====
function renderMediaList(mediaItems) {
    const mediaList = document.getElementById('mediaList');
    if (mediaItems.length === 0) {
        mediaItems = [];
    }

    mediaList.innerHTML = mediaItems.map((item, index) => `
        <div class="media-item">
            <div class="media-item-header">
                <span class="media-item-type">
                    ${item.type === 'image' ? '🖼️ 이미지' : 
                      item.type === 'video' ? '🎥 영상' : '📚 갤러리'}
                </span>
                <div class="media-controls">
                    <button type="button" class="btn-icon-small" onclick="moveMedia(${index}, -1)" ${index === 0 ? 'disabled' : ''} title="위로">⬆️</button>
                    <button type="button" class="btn-icon-small" onclick="moveMedia(${index}, 1)" ${index === mediaItems.length - 1 ? 'disabled' : ''} title="아래로">⬇️</button>
                    <button type="button" class="btn btn-danger btn-small" onclick="removeMedia(${index})">삭제</button>
                </div>
            </div>
            <div class="form-group">
                <label>타입</label>
                <select class="media-type" data-index="${index}">
                    <option value="image" ${item.type === 'image' ? 'selected' : ''}>이미지 (단일)</option>
                    <option value="gallery" ${item.type === 'gallery' ? 'selected' : ''}>갤러리 (여러장)</option>
                    <option value="video" ${item.type === 'video' ? 'selected' : ''}>영상</option>
                </select>
            </div>
            <div class="form-group">
                <label>URL (갤러리는 쉼표로 구분)</label>
                <div class="file-input-group">
                    <input type="text" class="media-src" data-index="${index}" value="${item.src || ''}" placeholder="예: src/images/a.jpg, src/images/b.jpg">
                    <button type="button" class="btn btn-small" onclick="handleMediaFileSelect(${index})">📁 파일</button>
                </div>
            </div>
            <div class="form-group">
                <label>캡션 (선택사항)</label>
                <textarea class="media-caption" data-index="${index}" rows="2" placeholder="캡션 (줄바꿈 가능)">${item.caption || ''}</textarea>
            </div>
            <div class="form-group">
                <label>설명 (선택사항)</label>
                <textarea class="media-description" data-index="${index}" rows="2" placeholder="자세한 설명">${item.description || ''}</textarea>
            </div>
        </div>
    `).join('');
}

// ===== 미디어 순서 이동 =====
function moveMedia(index, direction) {
    const currentMedia = getMediaFromForm();
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= currentMedia.length) return;
    
    // 배열에서 위치 교환
    [currentMedia[index], currentMedia[newIndex]] = [currentMedia[newIndex], currentMedia[index]];
    
    renderMediaList(currentMedia);
}

// ===== 미디어 추가 =====
document.getElementById('addMediaBtn').addEventListener('click', () => {
    const mediaList = document.getElementById('mediaList');
    const currentMedia = getMediaFromForm();
    currentMedia.push({ type: 'image', src: '', caption: '', description: '' });
    renderMediaList(currentMedia);
});

// ===== 미디어 제거 =====
function removeMedia(index) {
    const currentMedia = getMediaFromForm();
    currentMedia.splice(index, 1);
    renderMediaList(currentMedia);
}

// ===== 폼에서 미디어 데이터 가져오기 =====
function getMediaFromForm() {
    const types = document.querySelectorAll('.media-type');
    const srcs = document.querySelectorAll('.media-src');
    const captions = document.querySelectorAll('.media-caption');
    const descriptions = document.querySelectorAll('.media-description');

    const media = [];
    for (let i = 0; i < types.length; i++) {
        media.push({
            type: types[i].value,
            src: srcs[i].value,
            caption: captions[i].value,
            description: descriptions[i].value
        });
    }
    return media;
}

// ===== 주요 업무 렌더링 =====
function renderResponsibilities(responsibilities) {
    const list = document.getElementById('responsibilitiesList');
    list.innerHTML = responsibilities.map((item, index) => `
        <div class="list-item">
            <input type="text" class="responsibility-item" data-index="${index}" value="${item}" placeholder="업무 내용">
            <button type="button" class="btn btn-danger btn-small" onclick="removeResponsibility(${index})">삭제</button>
        </div>
    `).join('');
}

// ===== 업무 추가 =====
document.getElementById('addResponsibilityBtn').addEventListener('click', () => {
    const current = getResponsibilitiesFromForm();
    current.push('');
    renderResponsibilities(current);
});

// ===== 업무 제거 =====
function removeResponsibility(index) {
    const current = getResponsibilitiesFromForm();
    current.splice(index, 1);
    renderResponsibilities(current);
}

// ===== 폼에서 업무 데이터 가져오기 =====
function getResponsibilitiesFromForm() {
    const items = document.querySelectorAll('.responsibility-item');
    return Array.from(items).map(item => item.value).filter(v => v.trim());
}

// ===== 폼 제출 =====
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const projectData = {
        id: currentEditingId || Date.now(),
        title: document.getElementById('projectTitle').value,
        company: document.getElementById('projectCompany').value,
        type: document.getElementById('projectType').value,
        date: document.getElementById('projectDate').value,
        category: document.getElementById('projectCategory').value,
        description: document.getElementById('projectDescription').value,
        tags: document.getElementById('projectTags').value.split(',').map(t => t.trim()).filter(t => t),
        image: document.getElementById('projectImage').value || null,
        media: getMediaFromForm().filter(m => m.src),
        details: {
            overview: document.getElementById('projectOverview').value,
            responsibilities: getResponsibilitiesFromForm(),
            technologies: document.getElementById('projectTechnologies').value,
            results: document.getElementById('projectResults').value
        }
    };

    if (currentEditingId) {
        const index = projects.findIndex(p => p.id === currentEditingId);
        projects[index] = projectData;
    } else {
        projects.push(projectData);
    }

    saveProjects();
    renderProjects();
    editModal.classList.remove('active');
});

// ===== 데이터 저장 =====
function saveProjects() {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
}

// ===== 모달 닫기 =====
closeModal.addEventListener('click', () => {
    editModal.classList.remove('active');
});

cancelBtn.addEventListener('click', () => {
    editModal.classList.remove('active');
});

closeCodeModal.addEventListener('click', () => {
    codeModal.classList.remove('active');
});

// ===== 메인 페이지 열기 =====
const refreshMainBtn = document.getElementById('refreshMainBtn');
if (refreshMainBtn) {
    refreshMainBtn.addEventListener('click', () => {
        window.open('index.html', '_blank');
    });
}

// ===== JSON 내보내기 =====
const exportJsonBtn = document.getElementById('exportJsonBtn');
if (exportJsonBtn) {
    exportJsonBtn.addEventListener('click', () => {
        const dataStr = JSON.stringify(projects, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `portfolio-projects-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
}

// ===== JSON 가져오기 =====
importBtn.addEventListener('click', () => {
    importFile.click();
});

importFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            if (Array.isArray(data)) {
                projects = data;
            } else if (data.projects) {
                projects = data.projects;
            }
            saveProjects();
            renderProjects();
            alert('프로젝트를 성공적으로 가져왔습니다!');
        } catch (error) {
            alert('JSON 파일을 읽는 중 오류가 발생했습니다.');
        }
    };
    reader.readAsText(file);
    importFile.value = '';
});

// ===== 초기화 실행 =====
init();

// ===== 이미지 파일 선택 =====
const projectImageFile = document.getElementById('projectImageFile');
if (projectImageFile) {
    projectImageFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileName = file.name;
            document.getElementById('projectImage').value = `src/images/${fileName}`;
        }
        e.target.value = '';
    });
}

// ===== 미디어 파일 선택 (수정됨: 다중 파일 및 갤러리 지원) =====
function handleMediaFileSelect(index) {
    const typeSelect = document.querySelector(`.media-type[data-index="${index}"]`);
    const isGallery = typeSelect && typeSelect.value === 'gallery';

    const input = document.createElement('input');
    input.type = 'file';
    
    // 갤러리 타입이면 다중 선택 허용
    if (isGallery) input.multiple = true;
    input.accept = 'image/*,video/*';

    input.onchange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const paths = [];
            
            // 모든 선택된 파일 처리
            for(let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileName = file.name;
                const isVideo = file.type.startsWith('video/');
                const path = isVideo ? `src/videos/${fileName}` : `src/images/${fileName}`;
                paths.push(path);
                
                // 단일 선택 모드에서 비디오면 타입 자동 변경
                if (!isGallery && i === 0 && isVideo && typeSelect) {
                    typeSelect.value = 'video';
                }
            }
            
            const srcInput = document.querySelector(`.media-src[data-index="${index}"]`);
            if (srcInput) {
                // 갤러리 모드이고 기존 값이 있다면 뒤에 추가
                if (isGallery && srcInput.value) {
                    srcInput.value = srcInput.value + ', ' + paths.join(', ');
                } else {
                    srcInput.value = paths.join(', ');
                }
            }
        }
    };
    input.click();
}