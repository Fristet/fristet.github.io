// [script.js]

// ===== 프로젝트 데이터 =====
let projects = [
  {
    "id": 1768290589577,
    "title": "CINEV",
    "company": "Cinamon",
    "type": "professional",
    "date": "2022.06 - Current",
    "category": "PC / WEB",
    "description": "NPR과 PBR을 동시 대응하는 3D 시네마틱 생성 툴 프로젝트인 CineV에서 시니어 테크니컬 아티스트로 기여하며, PC와 Web 플랫폼을 대응하는 UE5 프로젝트에 참여했습니다.",
    "tags": [
      "UE5",
      "C++",
      "Python",
      "Shell",
      "HLSL",
      "Blueprint",
      "Git",
      "Perforce",
      "GitLab",
      "RenderDoc",
      "Intel GPA"
    ],
    "image": "src/images/cinev/cinev_01.png",
    "media": [
      {
        "type": "video",
        "src": "https://www.youtube.com/watch?v=tIe2-KhdiFM",
        "caption": "CINEV | Short Animation, Petals Long For the Wind",
        "description": ""
      },
      {
        "type": "video",
        "src": "src/videos/cinev/FrustumObjectLoader_video_01.mp4",
        "caption": "Frustum Level/Object Loader",
        "description": "Frustum Level/Object Loader는 Frustum Cull, Distance Cull 등이 Nanite에 대응이 되지 않는 이슈로 인해 발생 할 퍼포먼스 저하에 대응하기 위해 별도로 구현 된 렌더링 최적화 피쳐입니다."
      },
      {
        "type": "gallery",
        "src": "src/images/cinev/FrustumObjectLoader_02.png, src/images/cinev/FrustumObjectLoader_03.png",
        "caption": "Frustum Level/Object Loader",
        "description": "Frustum Level/Object Loader는 **'Frustum Level/Object Loader Section'**과 **'Frustum Level/Object Loader Manager'** 두가지의 컴포넌트로 구성이 되어 있습니다.\n\n**'Frustum Level/Object Loader Section'**은 해당 기능을 적용 할 대상의 영역을 지정하는 역할을 하고, **'Frustum Level/Object Loader Manager'**는 **'Frustum Level/Object Loader Section'** 가 적용된 대상들에 대해 기능을 적용하며 관련된 파라미터를 조절하는 역할을 합니다.\n\n**Frustum Level/Object Loader**는 Frustum 연산을 베이스로 구현하였으며,\n**'Frustum Level/Object Loader Section'**이 적용 된 객체들을 Manager에서 로드 한 뒤 Frustum 내에 오브젝트가 검출 된다면 해당 객체를 렌더 하고 아닌 경우 렌더를 하지 않는 Frustum Cull과 동일한 기능을 하고있습니다.\n\n이 과정에서 Nanite는 Distance Cull 역시 동작 하지 않는 이슈로 인해, Distance Cull 기능 역시 구현하였습니다."
      },
      {
        "type": "video",
        "src": "src/videos/cinev/TexelDensityChecker_01.mp4",
        "caption": "Texel Density Checker (Validator)",
        "description": "**'Texel Density Checker'**는 레벨상에 사용하는 객체에서 사용하는 Material과 연결되어 있는 Texture를 검출하여,\n현재 적용 되어 있는 객체의 스케일과 기준이 되는 Texel을 대조해 현재 Texture의 해상도가 객체의 스케일이 비해 크게 사용되는 경우, 적절하게 사용되는 경우, 작게 사용되는 경우에 대해 로그를 표기하여 검증을 할 수 있는 툴입니다."
      },
      {
        "type": "gallery",
        "src": "src/images/cinev/TexelDensityChecker_01.png, src/images/cinev/TexelDensityChecker_02.png",
        "caption": "Texel Density Checker (Validator)",
        "description": "툴을 사용하게 되면 현재 검출 Texture의 수량과 적용 된 Texture의 평균 해상도에 대한 Notify를 보내며, 동시에 Log를 출력합니다.\n이를 통해 사용자는 현재 어떤 Texture가 과한 해상도를 사용하거나 적절한지, 부족한지 알 수 있습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/cinev/TexelDensityAutomation_01.png, src/images/cinev/TexelDensityAutomation_02.png",
        "caption": "Texel Density Automation",
        "description": "**Texel Density Automation**는 레벨에서 사용중인 텍스쳐가 객체의 스케일보다 과도한 해상도를 사용하는 경우, 자동적으로 적절한 해상도를 사용할 수 있게 Resize 해주는 툴이며, 이 과정에서 Texture가 점유하는 Memory 사용량을 효율적으로 관리할 수 있게 됩니다.\n\n이를 통해 과도한 해상도를 사용하던 레벨의 Texture Memory 사용률을 20% - 30% 정도 감소 시킬 수 있게되었습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/cinev/stencil_intersection_01.png, src/images/cinev/stencil_intersection_02.png",
        "caption": "Stencil Intersection for NPR Character Eyeline, Eyebrow",
        "description": "NPR 캐릭터를 만들면서 머리카락에 가려진 Eyeline과 Eyebrow에 대한 렌더 처리를 위해 구현 한 Stencil Intersection Shader입니다.\n\nAnime에서의 머리카락 위에 눈과 눈썹등이 그려지는 표현을 하기 위해 Stencil을 통해 구현하였습니다.\n\n이를 위해 캐릭터의 얼굴에서 머리카락, 머리, 눈썹을 별도의 객체로 분리하였고 각각의 Stencil Number를 할당하고 Shader내에서 Stencil Value를 기반으로 Intersection을 계산하였으며, GBuffer에서 Basecolor pass를 받아온 뒤 그려주는 형식으로 구현하였습니다.\n\nStencil Value만으로 구현을 하면 Depth가 반영되지 않아 sort에 따라 우선적으로 그려질 수 있음으로 Depth Buffer를 받아와 카메라와 Depth를 계산해 적절한 위치에서만 보일 수 있도록 하였습니다."
      },
      {
        "type": "video",
        "src": "src/videos/cinev/stencil_intersection_01.mp4",
        "caption": "Stencil Intersection for NPR Character Eyeline, Eyebrow",
        "description": "Demo Video"
      },
      {
        "type": "image",
        "src": "src/images/cinev/FakeSpec_01.gif",
        "caption": "Fake Anisotropic Specular for NPR Character Clothes",
        "description": "NPR 캐릭터를 만들면서 의상의 더 나은 재질감을 표현하기 위해 구현 한 Anisotropic Specular Shader입니다.\n\n카메라와 빛 그리고 캐릭터의 노멀에 따라 동적으로 변환되는 비등방성 스펙큘러를 구현하였습니다.\n\n이를 통해 밋밋할 수 있는 캐릭터의 의상에 디테일과 깊이감을 줄 수 있는 표현을 하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/cinev/FakeSpec_01.png, src/images/cinev/FakeSpec_02.gif",
        "caption": "Fake Anisotropic Specular for NPR Character Clothes",
        "description": "Left: 미적용 | Right: 파라미터 적용 (0.0, 0.5, 1.0)"
      },
      {
        "type": "gallery",
        "src": "src/images/cinev/FakeSpec_02.png, src/images/cinev/FakeSpec_03.gif",
        "caption": "Fake Anisotropic Specular for NPR Character Clothes",
        "description": "Left: 미적용 | Right: 파라미터 적용 (0.0, 0.5, 1.0)"
      },
      {
        "type": "image",
        "src": "src/images/cinev/RimLight_01.gif",
        "caption": "Rim Light for NPR Character Hair",
        "description": "NPR 캐릭터를 만들면서 헤어의 자연스러운 Rim Light를 위해 구현 한 Shader입니다.\n카메라와 Light Vector 그리고 Depth 기반으로 구현하여, 카메라의 방향과 빛의 방향에 따라 Rim Light를 좀 더 자연스럽게 구현하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/cinev/RimLight_01.png, src/images/cinev/RimLight_02.png, src/images/cinev/RimLight_05.png",
        "caption": "Rim Light for NPR Character Hair",
        "description": "캐릭터의 헤어의 외곽 부분에만 적용을 하기 위해 Hair를 기준으로 Bound를 계산하여 SDF를 생성해 마스킹 처리하였습니다."
      }
    ],
    "details": {
      "overview": "NPR과 PBR을 동시 대응하는 3D 시네마틱 생성 툴 프로젝트인 CineV에서 시니어 테크니컬 아티스트로 기여하며, PC와 Web 플랫폼을 대응하는 UE5 프로젝트에 참여했습니다.",
      "responsibilities": [
        "기술 R&D",
        "배경 기술 지원",
        "UI 기술 지원",
        "CI/CD 자동화 파이프라인 설계",
        "클라이언트 기능 구현",
        "플러그인 제작 및 포팅/컨버팅",
        "프로젝트 최적화",
        "쉐이더 기술 지원",
        "외부 커뮤니케이션 기술 지원",
        "가이드라인 제공 및 교육",
        "에디터 툴 기술 지원",
        "엔진 커스터마이징 기술 지원"
      ],
      "technologies": "C++, Python, Shell, HLSL, Blueprint, Git, Perforce, GitLab, RenderDoc, Intel GPA",
      "results": " **• 프로젝트 리소스 최적화 및 자동화 파이프라인을 구축하였습니다.**\n    o 장기 개발로 인한 에디터 퍼포먼스 저하를 해결하기 위해 리소스 Validator 툴을 제작하였습니다.\n    o 중복 및 미사용 리소스를 전수 검사·제거하여 프로젝트 용량을 약 75% 경량화 (1TB → 260GB) 하였습니다.\n    o Git Hook과 Shell Script를 활용하여, 리소스 검증 및 정리 과정을 자동화 파이프 라인에 통합하였습니다.\n\n**• 프로젝트 퍼포먼스 최적화를 통해 목표 프레임을 달성하였습니다.**\n    o 렌더링 병목 구간 분석 및 최적화를 진행하여, 평균 20fps에서 60fps 이상으로 성능을 향상시켰습니다.\n    o [메모리] Texture Asset Validator 툴을 제작하여 객체의 Texel/Pixel Density를 조정하는 과정을 자동화하였고, 이를 통해 메모리 오버헤드 및 크래시 이슈를 사전에 차단하였습니다.\n    o [GPU] Nanite(Mesh Shader) 환경에서의 과도한 오버드로우를 방지하기 위해 엔진 레벨에서 별도의 Pre-pass Frustum/Occlusion Culling 로직을 구현하여 렌더링 효율을 극대화하였습니다. 또한 Pixel Shader에 거리 기반 LOD를 적용하여 연산 부하를 제어하였습니다.\n    o [CPU] Frustum/Occlusion Culling 적용으로 DrawCall을 최적화하였고, UI 구조 설계의 병목 지점을 파악하고 코드를 수정하여 보완하였습니다.\n\n**• R&D 및 개발 환경 효율화를 위한 파이프라인을 설계하였습니다.**\n    o 프로젝트에서 요구하는 비주얼 완성도를 위해 UE5 엔진 소스를 수정하여 독자적인 쉐이더 모델을 구현하였습니다.\n    o 컨셉 아트 제작 효율 증대를 위해 ComfyUI를 도입하고, 관련 파이프라인 설계 및 가이드라인 문서를 제공하였습니다.\n    o GitLab 기반의 CI/CD 파이프라인을 구축하여 커스텀 쉐이더 컴파일, 엔진 통합 테스트 및 배포 과정을 전면 자동화하였습니다.\n    o 3D 배경 및 캐릭터용 쉐이더를 설계하고, 아티스트를 위한 인하우스 툴 및 기술 가이드라인을 작성하여 배포하였습니다.\n    o Gaussian Splatting 도입을 위해 여러 시스템을 테스트하여 검증한 뒤, Volinga와의 협업을 진행하기 위해 커뮤니케이션을 담당하였습니다.\n    o UI에서의 기술적 구현이 필요한 기능과 Shader들의 제작하였습니다."
    }
  },
  {
    "id": 1768291639178,
    "title": "Project Blood",
    "company": "LINE Games",
    "type": "professional",
    "date": "2022.12 - 2023.06",
    "category": "PC",
    "description": "Stylized 횡스크롤 액션 프로젝트인 프로젝트 블러드에서 리드 테크니컬 아티스트로 기여\n하며, PC 플랫폼을 대응하는 UE5 프로젝트에 참여했습니다.",
    "tags": [
      "UE5",
      "C++",
      "Python",
      "Shell",
      "HLSL",
      "MaxScript",
      "Blueprint",
      "Perforce",
      "Jenkins"
    ],
    "image": "src/images/pb_01.jpg",
    "media": [],
    "details": {
      "overview": "Stylized 횡스크롤 액션 프로젝트인 프로젝트 블러드에서 리드 테크니컬 아티스트로 기여하며, PC 플랫폼을 대응하는 UE5 프로젝트에 참여했습니다.",
      "responsibilities": [
        "기술 R&D",
        "쉐이더 기술 지원",
        "CI/CD 자동화 파이프라인 설계",
        "가이드라인 제공 및 교육",
        "에디터 툴 기술 지원",
        "엔진 커스터마이징 기술 지원"
      ],
      "technologies": "C++, Python, Shell, HLSL, MaxScript, Blueprint, Perforce, Jenkins",
      "results": "**•\t아트 비주얼 퀄리티 향상을 위한 툴 개발 및 엔진 R&D를 수행하였습니다.**\n    o\tSigned Distance Fields(SDF) 기반의 Face Shadow 구현을 위해, OpenCV 라이브러리와 Python을 활용하여 SDF 리소스 생성 자동화 툴을 제작 및 제공하였습니다.\n    o\t프로젝트에서 요구하는 Stylized 아트의 비주얼 완성도를 극대화하기 위해, UE5 엔진 소스 코드를 수정하고 커스터마이징하여 독자적인 쉐이더 모델을 구축하였습니다.\n    o\t3D 배경 및 캐릭터 제작에 필요한 전반적인 쉐이더를 설계하고, 아티스트가 효율적으로 사용할 수 있도록 최적화하여 제공하였습니다.\n\n**•\t개발 파이프라인 효율화 및 협업 환경을 조성하였습니다.**\n    o\tJenkins를 이용하여 커스텀 엔진 빌드 CI/CD 파이프라인을 설계하였으며, 쉐이더 컴파일·엔진 통합 테스트·배포 과정을 자동화하여 개발 생산성을 높였습니다.\n    o\t아트 작업자의 업무 효율을 높이기 위해 인하우스 툴을 개발하고, 상세한 기술 가이드라인 문서를 작성하여 배포하였습니다."
    }
  },
  {
    "id": 1768290825617,
    "title": "Stellar Blade",
    "company": "SHIFT UP",
    "type": "professional",
    "date": "2020.04 - 2023.02",
    "category": "PC / PS5",
    "description": "스타일리시 액션 프로젝트인 스텔라 블레이드에서 테크니컬 아티스트로 기여하며, PS5와\nPC 플랫폼을 대응하는 UE4 프로젝트에 참여했습니다.",
    "tags": [
      "UE4",
      "C++",
      "Python",
      "Shell",
      "HLSL",
      "MaxScript",
      "Blueprint",
      "Perforce",
      "Jenkins",
      "RenderDoc",
      "AMD GPU Profiler"
    ],
    "image": "src/images/sb/sb_02.webp",
    "media": [
      {
        "type": "video",
        "src": "https://www.youtube.com/watch?v=ayek3ZzWb1E",
        "caption": "Stellar Blade Trailer",
        "description": "트레일러 내에 나오는 배경의 모든 쉐이더와 최적화, 애니메이션 로직 개선 등을 담당하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/sb/relief_decal_01.png, src/images/sb/relief_decal_02.png, src/images/sb/relief_decal_03.png, src/images/sb/relief_surface_01.png, src/images/sb/relief_surface_02.png, src/images/sb/relief_cloud_02.png",
        "caption": "Relief Mapping",
        "description": "기존에 밋밋한 배경의 바닥의 디테일을 올리기 위해 만든 Relief Mapping Method의 Decal과 Surface Shader입니다.\nMesh로 처리하기 부담스럽거나 일반적인 Decal의 퀄리티로는 부족한 경우 사용하기 위해 제작되었습니다.\n\nRelief Mapping을 구현하면서 카메라의 시야 각도와 객체와의 거리 등을 고려하여 샘플링 단계를 조절해 다수의 객체를 사용하더라도 효과적으로 퍼포먼스를 유지할 수 있게 설계하였습니다."
      },
      {
        "type": "video",
        "src": "src/videos/sb/bayer_dither_01.mp4",
        "caption": "Bayer Dithering",
        "description": "오브젝트와 카메라가 오버랩 될 때 자연스럽게 페이드를 줄 수 있는 Bayer Dithering을 작업하였습니다."
      },
      {
        "type": "video",
        "src": "src/videos/sb/interaction_animation_shader_01.mp4",
        "caption": "Interactive Object Shader",
        "description": "플레이어가 오브젝트와 인터렉션을 했을 때 발생하는 연출에 대하여 Animation 로직 셋업과  디스플레이 Shader 연출 구현하여 적용했습니다."
      },
      {
        "type": "video",
        "src": "src/videos/sb/ui_location_01.mp4",
        "caption": "UI - Location Display",
        "description": "플레이어가 지역에 진입할 때 디스플레이 되는 UI에 연출과 쉐이더를 작업하였습니다."
      },
      {
        "type": "video",
        "src": "src/videos/sb/ui_action_01.mp4",
        "caption": "UI - Action Notify",
        "description": "튜토리얼 시 디스플레이 되는 UI의 연출과 쉐이더를 작업하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/sb/Location_01.png, src/images/sb/Location_02.png, src/images/sb/Location_03.png, src/images/sb/matrix_01.jpg, src/images/sb/matrix_02.jpg, src/images/sb/matrix_03.jpg",
        "caption": "",
        "description": "기재 되어있는 이미지의 배경 이외에도 90% 이상의 배경에서 쉐이더 작업과 최적화 및 기술 지원의 업무를 전담하였습니다."
      }
    ],
    "details": {
      "overview": "스타일리시 액션 프로젝트인 스텔라 블레이드에서 테크니컬 아티스트로 기여하며, PS5와 PC 플랫폼을 대응하는 UE4 프로젝트에 참여했습니다.",
      "responsibilities": [
        "기술 R&D",
        "배경 기술 지원",
        "UI 기술 지원",
        "CI/CD 자동화 파이프라인 설계",
        "프로젝트 최적화",
        "쉐이더 기술 지원",
        "외부 커뮤니케이션 기술 지원",
        "가이드라인 제공 및 교육",
        "에디터 툴 기술 지원",
        "DCC 툴 기술 지원",
        "엔진 기술 지원"
      ],
      "technologies": "C++, Python, Shell, HLSL, MaxScript, Blueprint, Perforce, Jenkins, RenderDoc, AMD GPU Profiler",
      "results": "**•\tPS5 플랫폼에 대한 대응을 진행했습니다.**\no\tPS5와 PC 간의 상이한 칩셋의 쉐이더 컴파일 환경을 파악하고, PS5의 AMD 칩셋의 특성에 맞게 쉐이더를 수정하여 렌더링 안정성을 확보했습니다.\n\n**•\t프로젝트의 세미 오픈월드 환경에 맞는 최적화를 통해 목표 프레임을 달성하였습니다.**\no\t원경 디테일 유지와 퍼포먼스 확보를 위해 Imposter Baker 및 MassiveLOD Billboard 시스템 등을 활용 및 구현하여 적용했습니다.\no\t효율적인 렌더링과 CPU및 GPU 부하를 줄이기 위해 적극적으로 Section Instancing 시스템을 구현하여 적용하였습니다.\no\t일부 실시간 Light를 사용함에 있어 Shadow의 CPU및 GPU 부하를 줄이기 위해 Fake Shadow를 구현하여 적용했습니다.\no\t대량의 Foliage를 사용하는 환경에서 Foliage 리소스 제작 및 퀄리티 컨트롤, 최적화, Shader 최적화를 진행하였습니다.\no\tRenderDoc과 AMD GPU Profiler를 이용하여, PC와 PS5 플레이 환경에서의 GPU 병목을 파악하고 해결하였습니다.\no\tShader들의 Pixel 및 Vertex Shader에 Screen Size와 거리 기반의 LOD를 적용하여 연산 부하를 제어하였습니다.\n\n**•\t프로젝트에서 요구하는 완성도를 위해 여러 기술적 지원을 하였습니다.**\no\t카메라와 오브젝트 간의 간섭을 자연스럽게 처리하는 Dither Actor Component를 구현하여 카메라 전환 시의 시각적 이질감과 불편함을 최소화했습니다.\no\tUI 컴포넌트의 비주얼 적 완성도를 위해 UI 쉐이더들을 구현하여 적용했습니다.\no\t프로젝트에서 요구하는 비주얼 적 배경의 완성도를 위해 대부분의 배경 재질 쉐이더들을 구현하여 적용했습니다.\no\tRelief Mapping을 구현하여 Parallax Occlusion Mapping 불완전한 부분을 대체하고 퍼포먼스와 비주얼 적 완성도를 높였습니다.\no\t각종 특수한 효과들에 대한 쉐이더를 구현하여 환경에 맞는 효과적으로 완성도를 높였습니다.\no 캐릭터들의 엔진 내 애니메이션 로직 구현과 시스템 구현을 하였습니다.\n\n**•\tJenkins 기반의 빌드 자동화로 개발 효율을 높였습니다.**\no\tJenkins와 Shell Script를 활용한 Lightbuild Automation Tool을 개발하여, 라이팅 빌드 과정을 자동화하고 CI/CD 파이프라인에 통합하여 아티스트의 불필요한 대기 시간을 단축했습니다.\n\n**•\t모션 캡쳐와 시네마틱 제작 환경을 구축하였습니다.**\no\tCinematic 제작 시 Virtual Camera 등의 장비를 모션캡쳐 등에 활용할 수 있도록 관련 하드웨어 장비를 제작하고 환경을 구성하여 제공하였습니다.\n\n**•\t애니메이션의 캐릭터와 환경 오브젝트 간의 인터렉션 애니메이션 로직을 구현하였습니다.**\no\tAnimation의 인게임 환경 오브젝트 간의 인터렉션 애니메이션 로직을 구현하고, 이 과정에서 Shader를 연동하여 보다 효과적인 시각적 효과를 완성하였습니다.\n\n**•\t작업자의 에디터 사용 편의성을 높이기 위해 인하우스 툴을 제작하여 반복 작업을 줄이고 생산성을 향상시켰습니다.**\no\t3ds Max에서 사용하기 위한 MaxScript 들과, 에디터 내에서 사용하는 여러 편의성 툴들을 개발하여 제공하였습니다.\n\n**•\t협업 가이드 및 품질 표준을 수립했습니다.**\no\tSony XDEV 팀과의 원활한 기술 협업을 위해 전용 가이드라인을 제작하고, 이슈 대응 및 기술 커뮤니케이션을 진행했습니다.\no\t외부의 아웃소싱 업체와의 원활한 기술 협업을 위해 가이드라인을 제작을 하고, 커뮤니케이션을 진행하였습니다.\no\tTexel Density 규약 수립 및 UVDensityVisualize 툴 개발을 통해 대규모 리소스 품질을 표준화하고, 외주 및 내부 배경팀의 워크플로우를 정립했습니다."
    }
  },
  {
    "id": 1768291983909,
    "title": "CrowZ",
    "company": "Royalcrow .Inc",
    "type": "professional",
    "date": "2019.09 - 2020.03",
    "category": "PC",
    "description": "대규모 FPS/TPS 프로젝트인 CrowZ에서 테크니컬 아티스트로 기여하며, PC 플랫폼을 대응하는 UE4 프로젝트에 참여했습니다.",
    "tags": [
      "UE4",
      "C++",
      "HLSL",
      "MaxScript",
      "Blueprint",
      "Git",
      "Jenkins",
      "RenderDoc"
    ],
    "image": "src/images/crowz/corwz_02.jpg",
    "media": [
      {
        "type": "video",
        "src": "https://www.youtube.com/watch?v=VXmOXHo7KfU",
        "caption": "",
        "description": ""
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/CustomDecal_01.PNG, src/images/crowz/CustomDecal_02.PNG, src/images/crowz/CustomDecal_03.PNG",
        "caption": "Decal  for Translucent Material",
        "description": "Translucent ( 반투명 ) 머테리얼에 사용하기 위한 목적으로 제작된 셰이더입니다.\n기존의 디퍼드 데칼은 SceneDepth 를 통해 프로젝션 박스와 겹치는 오브젝트의 뎁스를 가져와 그 사이의 픽셀에 텍스쳐를 렌더하는 방식입니다.\n하지만 반투명 머테리얼은 기본적으로 SceneDepth에 그릴 수 없음으로 자연스럽게 디퍼드 데칼을 사용 할 수 없습니다.\n그로 인해 탄흔이 남은 유리 등을 표현하기 위해서 스크린 스페이스 데칼의 구현 방식을 통해 기존의 SceneDepth 가 아닌 CustomDepth 를 통해 데칼을 샘플링 해주는 방식의 셰이더를 구현 하게 되었습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/CustomDecal_04.PNG, src/images/crowz/CustomDecal_05.PNG, src/images/crowz/CustomDecal_06.PNG",
        "caption": "Decal  for Translucent Material",
        "description": "반투명 머테리얼이 적용된 컴포넌트는 SceneDepth 에 렌더가 되지 않음으로 단일 메쉬로는 데칼을 표현 할 수 없습니다.\n그러므로 일부의 한정된 대상 ( 부숴지지 않는 ) 유리 등에 사용을 할 목적으로만 반투명 머테리얼이 적용 메쉬와 동일한 메쉬를 같은 좌표에 추가 한 후 Mainpass 에서 Render를 비활성화 한 후 CustomDepth 를 활성화 해 CustomDepth 상에만 렌더 되게 하였습니다.\n이를 통해 반투명 머테리얼에도 CustomDepth 를 통한 Screen Space Decal 을 렌더할 수 있게 하였습니다"
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/DecalEmissiveFade.gif, src/images/crowz/DecalEmissiveFade_05.PNG",
        "caption": "Impact Decal With Emissive Fade",
        "description": "런타임 중에 피격 데칼이 생성 된 후 잔열을 표현하기 위해 구현한 기능입니다.\n런타임 중에 생성 된 데칼 컴포넌트의 Scalar 파라미터를 현재의 Deltatime 에 따른 Curve Float 값으로 업데이트를 해주는 방식으로 구현을 하였습니다.\n단순한 기능이지만 해당 구현을 진행하면서 C++ 에서의 클래스 활용과 함수 호출 등을 숙지 할 수 있었습니다"
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/DecalEmissiveFade_01.PNG, src/images/crowz/DecalEmissiveFade_02.PNG, src/images/crowz/DecalEmissiveFade_03.PNG, src/images/crowz/DecalEmissiveFade_04.PNG",
        "caption": "Impact Decal With Emissive Fade",
        "description": "DataTable의 Structure 에 CurveFloat 를 추가 한 후 C++ 내에서 해당 변수를 참조하여 CurveFloat의 값을 갱신 및 초기화 후 런타임 중에 생성된 Decal Component 에서 Dynamic Material Instance 의 Scalar 파라미터의 값을 현재 DeltaTime 의 갱신 및 누적을 통해 CurveFloat 내의 값을 받아 업데이트를 해주는 구현입니다."
      },
      {
        "type": "video",
        "src": "src/videos/crowz/FakeWind.mp4",
        "caption": "Fake Wind",
        "description": "Grass 나 Tree 등의 폴리지에 사용을 할 목적으로 구현을 하게 된 Wind 셰이더입니다.\n메쉬의 VertexColor 데이터를 기반으로 Rotate 할 축을 결정하며 Wind Actor 의 Forward Vector 의 방향에 따라 Wind 의 방향 등이 제어 되도록 하였습니다.\nMaterial Parameter Collection 을 통해 다수의 파라미터들을 블루프린트 내에서 제어를 하는 방식으로 구현하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/FakeWind_01.PNG, src/images/crowz/FakeWind_02.PNG, src/images/crowz/FakeWind_03.PNG",
        "caption": "Fake Wind",
        "description": "Actor 블루프린트의 함수를 추가해 보다 쉽게 관리가 가능하게 하였으며, Actor 의 Forward Vector 와 각종 변수 등을 통해 Material 내의 파라미터를 제어 할 수 있게 하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/crowz_optic.gif, src/images/crowz/OpticShader_01.PNG",
        "caption": "Optic Shader",
        "description": "플레이어의 몰입감을 증가 시켜줄 수 있는 Optic Shader 입니다.\n일반적인 FPS에서는 여러 이유로 인하여 많은 디테일들을 포기하곤 합니다.\n도트 사이트와 스코프 등의 사실적인 느낌을 표현하기 위해 시야와 경통간의 시차와 배율 등을 구현했습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/OpticShader_04.PNG, src/images/crowz/OpticShader_05.PNG",
        "caption": "Optic Shader | Magnification",
        "description": "렌즈를 통해 투과 된 사물을 표현하기 위한 Magnification 기능입니다.\n부분적으로 배율이 적용된 표현을 하기 위해 ScreenUV를 활용하여 구현하였습니다.\nRenderTarget 을 사용을 하지 않음으로써 기존의 RenderTarget 을 사용한 방식보다 성능이 빠르고 효율적입니다."
      },
      {
        "type": "image",
        "src": "src/images/crowz/OpticShader_03.PNG",
        "caption": "Optic Shader | Magnification",
        "description": "사용된 노드는 위와 같습니다.\nSceneColor를 통해 현재 Render 되고있는 Scene을 Buffer로 통해 접근하여 SceneColor의 UV를 현재 ScreenUV 를 기준으로 계산해 가산 해주었습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/crowz_optic_06.png, src/images/crowz/crowz_optic_07.png",
        "caption": "Optic Shader | Parallax",
        "description": "스코프 등의 렌즈를 통해 보이는 시차 보정을 표현하기 위한 Parallax 기능입니다.\n스크린 정 중앙의 기준으로 Mask 를 그려주는 방식을 사용하였으며 그로 인해 ScreenSize 와 ScreenUV 등을 활용하여 구현하였습니다.\n추가적으로 반동 등의 표현을 더욱 극대화 하기 위한 기능을 추가하였습니다."
      },
      {
        "type": "image",
        "src": "src/images/crowz/OpticShader_02.PNG",
        "caption": "Optic Shader | Parallax",
        "description": "사용된 노드는 위와 같습니다.\n현재의 ViewSize 를 통해 ScreenUV의 좌표를 계산해 준 뒤 ScreenUV 와 계산된 좌표를 기준으로 SphereMask 를 생성해주었습니다.\n이를 통해 Screen의 해상도에 영향을 받지 않는 마스크를 스크린 중앙에 생성해 주었으며 추가적으로 총기의 반동 등의 느낌을 더하기 위해\nCameraPos 와 Material 이 적용되는 Object 의 거리를 계산해 보간해 주고 곱 연산을 통해 마스크의 사이즈를 조정하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/Shader.PNG, src/images/crowz/WeaponClipping.gif",
        "caption": "Weapon Clipping",
        "description": "플레이 도중 플레이어의 총기 메쉬 등이 벽 등을 뚫고 반대편에 노출되는 현상을 막기 위해 구현을 진행하였습니다.\nWeapon의 Component 에서 BoundBox WorldPos 를 가져와 BoundBox 의 크기를 기준으로 Clipping을 하였으며 If 대신 Step 함수를 사용하여서 불필요한 연산을 감소하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/crowz/SettingWeaponMAT.PNG, src/images/crowz/SettingWeaponParam.PNG",
        "caption": "Weapon Clipping",
        "description": "무기의 Component 의 경우 Parts 별로 구분이 되어있어 ( Barrel, Recever, Body, Stock 등 ) 각 Parts 의 머테리얼 들을 Array 대입해\nDynamicMaterialInstnace(DMI) 를 생성해주고 해당 DMI 를 메쉬에 적용해주며 동시에 머테리얼의 파라미터를 초기화 하며 생성된 BoundBox의 Pos를 대입해줍니다."
      },
      {
        "type": "image",
        "src": "src/images/crowz/SettingApprox.PNG",
        "caption": "Weapon Clipping",
        "description": "BoundBox의 Extend 를 기준으로 Mesh 의 ApproxSize 를 추출한 뒤 바운드 박스의 월드 좌표와 ApproxSize를 통해 총기의 BoundBox의 끝과 시작점을 알아내 SphereTrace를 생성해준 뒤\nSphereTrace의 HitResult 를 기반으로 Location 을 “ClippingOffset” 머테리얼 파라미터에 대입해주는 방식입니다."
      },
      {
        "type": "video",
        "src": "src/videos/crowz/NightVision.mp4",
        "caption": "Night Vision",
        "description": "FPS에서 중요한 플레이어의 몰입감과 현실성을 위해 야간전을 위한 Night Vision PostProcess 쉐이더를 구현 하였습니다.\n주변 환경과 빛에 따라 밝기를 조절할 수 있게 구현하였습니다."
      }
    ],
    "details": {
      "overview": "대규모 FPS/TPS 프로젝트인 CrowZ에서 테크니컬 아티스트로 기여하며, PC 플랫폼을 대응하는 UE4 프로젝트에 참여했습니다.",
      "responsibilities": [
        "기술 R&D",
        "배경 기술 지원",
        "클라이언트 기능 구현",
        "프로젝트 최적화",
        "쉐이더 기술 지원",
        "가이드라인 제공 및 교육",
        "에디터 툴 기술 지원",
        "DCC 툴 기술 지원"
      ],
      "technologies": "C++, HLSL, MaxScript, Blueprint, Git, Jenkins, RenderDoc",
      "results": "**•\t배경 및 리얼리즘 FPS 구현을 위한 핵심 쉐이더를 제작하고 관리했습니다.**\no\t프로젝트에 요구되는 대부분의 배경(Environment) 쉐이더를 설계 및 제작하여, 대규모 전장의 비주얼 퀄리티를 통일감 있게 끌어올렸습니다.\no\t사실적인 조준경 표현을 위해 Optic Shader를 제작했습니다. 고비용의 RenderTarget 대신 ScreenUV 연산을 활용하여 배율(Magnification)과 시차 보정(Parallax) 기능을 구현해 렌더링 성능을 최적화했습니다.\no\t반투명 재질(유리 등) 위에도 탄흔이 표시되도록 CustomDepth 기반의 Translucent Decal 시스템을 구현하여 디퍼드 데칼의 한계를 극복했습니다.\no\t탄흔 생성 시 잔열이 서서히 식는 표현을 위해, C++와 Curve Float를 연동하여 런타임에 Emissive 값이 자연스럽게 제어되는 Dynamic Impact Decal을 구축했습니다.\no\tFoliage의 자연스러운 움직임을 위해 Vertex Color와 파라미터 컬렉션을 활용한 Fake Wind 쉐이더를 제작하여 환경의 디테일을 높였습니다.\n\n**•\t프로파일링을 통한 리소스 최적화 및 기술 이슈를 해결했습니다.**\no\t프로파일링을 통해 병목 구간을 분석하고 리소스를 최적화했으며, 개발 중 발생하는 기술적 이슈를 검증하고 처리하여 안정적인 빌드 상태를 유지했습니다.\no\t광활한 오픈 필드 맵에서의 렌더링 성능 확보를 위해 HLOD(Hierarchical Level of Detail) 시스템을 적용하고 최적화하여, 원경 퀄리티를 유지하면서도 드로우 콜(Draw Call)을 효과적으로 제어했습니다.\no\t1인칭 시점에서 총기가 벽을 뚫고 보이는 현상을 방지하기 위해 Weapon Clipping 기능을 개발했습니다. BoundBox 정보를 기반으로 픽셀을 마스킹 처리하고, 불필요한 쉐이더 연산 비용을 절감했습니다.\no\t특수 전술 상황을 위한 Night Vision Post Process를 구현하고, 플레이어 컨트롤러(PlayerController) 입력과 머티리얼 파라미터를 연동하여 실시간 제어 환경을 마련했습니다.\n\n**•\t아트 리소스 관리 파이프라인 설계 및 유틸리티 툴을 제공했습니다.**\no\t아트 리소스 관리 및 업무 파이프라인을 설계하고, 아티스트를 대상으로 GIT 형상 관리 도구 기술 지원을 수행하여 협업 효율과 데이터 안정성을 확보했습니다.\no\t작업자들의 업무 효율 및 편의를 위해 Material Parameter Controller 등 에디터 툴을 제작하여, 다수의 머티리얼 인스턴스 파라미터나 텍스처를 일괄 변경할 수 있는 기능을 제공해 반복 작업을 획기적으로 줄였습니다.\no\t레벨 디자인 생산성을 높이기 위해 Spline 기반의 전봇대 자동 배치 툴(Electric Pole Tool)을 구현했습니다. 스플라인 경로에 따라 액터를 배치하고, 케이블(Cable) 컴포넌트가 소켓에 자동으로 연결되도록 자동화했습니다."
    }
  },
  {
    "id": 1768292108384,
    "title": "Little Devil Insdie",
    "company": "Neostream Interactive",
    "type": "professional",
    "date": "2018.02 - 2019.02",
    "category": "PC / PS4",
    "description": "Stylized 액션 어드벤처 프로젝트인 리틀 데빌 인사이드에서 테크니컬 아티스트로 기여하며, PS4와 PC 플랫폼을 대응하는 UE4 프로젝트에 참여했습니다.",
    "tags": [
      "UE4",
      "HLSL",
      "Blueprint",
      "Perforce",
      "Jenkins",
      "RenderDoc"
    ],
    "image": "src/images/ldi/ldi_02.jpg",
    "media": [
      {
        "type": "video",
        "src": "https://www.youtube.com/watch?v=_FqsyNSYSKc",
        "caption": "Little Devil Inside",
        "description": ""
      },
      {
        "type": "gallery",
        "src": "src/images/ldi/BillboardGenerator_01.png, src/images/ldi/BillboardGenerator_02.png",
        "caption": "Bilboard Generator for Foliage",
        "description": "폴리지의 LOD 중 일부인 빌보드를 엔진 내에서 생성하기 위한 프로세스를 블루 프린트를 활용하여 설계 하였습니다.\n최적화의 기본이 되는 폴리지 최적화를 숙지 하였습니다."
      },
      {
        "type": "image",
        "src": "src/images/ldi/BillboardGenerator_03.png",
        "caption": "Bilboard Generator for Foliage",
        "description": "나무와 풀 등의 식생을 의미하는 폴리지는 일반적으로 나뭇잎이나 풀잎 부분을 Polygon Mesh 혹은 Alpha Mask 를 활용하여 제작을 합니다.\n그 중에서 Alpha Mask 를 활용하여 제작한 Plane 형태의 나뭇잎은 Alpha 들이 겹쳐지기 때문에 Overdraw 라는 Alpha 에 의한 GPU 부하 현상이 발생합니다.\n이 현상을 최소화 하기 위해서는 주로 메쉬의 형태를 Mask 에 맞추어 Cut off 하는 Alpha Cut 과정이 있습니다.\n근거리에서는 어느정도의 효율이 있지만 먼 거리에 있어서는 불필요한 Alpha 들이 여전히 존재하기 때문에 빌보드 라는 LOD 메쉬를 필요로 하게됩니다"
      },
      {
        "type": "gallery",
        "src": "src/images/ldi/BillboardGenerator_04.png, src/images/ldi/BillboardGenerator_05.png",
        "caption": "Bilboard Generator for Foliage",
        "description": "기존의 빌보드 메쉬를 생성하기 위한 프로세스를 간소화 하기위해,\n엔진에서 임포트가 되어있는 메쉬를 활용 하여 빌보드를 생성하는 프로세스를 블루프린트로\n설계 및 RenderTarget 을 활용하여 개발하였습니다.\nSceneCaptureComponent 가 현재의 Mesh 를 캡쳐해 RenderTarget Texture 로 TextureSample 을 전달해주며\n전달 된 TextureSample 은 생성된 Dynamic Instance Material 내부의 Texture 파라미터로 들어가게됩니다."
      },
      {
        "type": "image",
        "src": "src/images/ldi/BillboardGenerator_06.png",
        "caption": "Bilboard Generator for Foliage",
        "description": "전달된 TextureSample 은 Alpha 를 가지고있으며 Material의 Opacity Mask 에 사용하게 되며, 생성된 머테리얼은 빌보드 메쉬에 적용됩니다.\nMaterial 의 Blend Mode은 Opaque, Masked, Translucent, Additive 가 있으며\nOpaque, Masked, Additive, Translucent 순으로 GPU에 부하되는 쉐이더 비용이 저렴합니다.\n여기서 Masked 를 사용하였으며 추가적으로 Shading Model 에서 Unlit 을 사용 함 으로써 라이트에 의한 DrawCall 을 절약하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/ldi/BillboardGenerator_07.png, src/images/ldi/BillboardGenerator_08.png",
        "caption": "Bilboard Generator for Foliage",
        "description": "여기서 라이트의 영향을 받지 못하는 Unlit Shading Model 을 사용함 으로써 이슈가 발생하게 되었습니다.\n해당 이슈는 실시간으로 시간이 변화를 함에 따라 Directional Light 의 Intensity가 변화에 따른 Mesh 의 색상 변화였는데,\n당연하게도 라이트의 영향을 받지 못해 어두운 시간대가 되어도 현재의 머테리얼이 적용된 빌보드는 홀로 밝게 돋보이는 문제였습니다.\n이러한 이슈를 Material Parameter Collection 을 활용해 현재 Directional Light 의 Intensity 를 Tick 에서 매 프레임마다 가져와,\n현재 빌보드 텍스쳐에 곱해주는 형식을 사용 해 보다 자연스러운 무드의 변화를 해결하였습니다"
      },
      {
        "type": "image",
        "src": "src/images/ldi/snow_01.png",
        "caption": "Deformation Snow",
        "description": "사실적인 눈의 물리적 반응을 위해 디포메이션 기능이 있는 눈 쉐이더를 구현하였습니다.\nSceneCaptureComponent 의 개념과 사용 방법, UV와 Render Target의 활용 방법, 텍스쳐 포맷에 따른 메모리 비용과 캡쳐 모드에 의한 GPU 부하 최적화를 숙지 할 수 있었습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/ldi/snow_02.gif, src/images/ldi/snow_03.gif",
        "caption": "Deformation Snow",
        "description": "플레이어의 이동 궤적을 TextureSample에 누적 시키기 위해 RenderTarget 2 장을 매 틱마다 교차로 캡쳐되게 하여 누적된 텍스쳐와 현재의\nRenderTarget 을 대조하여 UV 좌표의 변화에 따라 누적해야하는 텍스쳐 샘플을 샘플링하였으며, 이를 통해 누적과 감쇠를 구현하였습니다.\n추가적으로 SphereMask 를 사용하여 제한된 범위에 대한 감쇠를 적용하였습니다.\n메모리를 절약하기 위해서 RenderTarget을 R 채널만 사용을 하였고 캡쳐 역시 Depth만을 캡쳐 해 불필요한 Light 등의 데이터들을 제외하였습니다."
      },
      {
        "type": "image",
        "src": "src/images/ldi/snow_04.png",
        "caption": "Deformation Snow",
        "description": "RenderTarget 을 기반으로 Tessellation 을 사용하였는데, Tessellation 의 사용에 따른 부하가 심하게 발생하여 부분적으로만 Tessellation 의 적용이 필요 해\nDistanceBasedTessellation 을 구현하였습니다.\n일반적으로는 Camera Pos 기반으로 구현을 하지만 3인칭 프로젝트의 카메라 시점 특징 상 플레이어와 거리가 있어 플레이어 주변의 Tessellation 의 디테일이\n떨어져 기존의 Camera Pos 기준에서 Player Character Pos 기준으로 변경하여 이슈를 해결하였습니다."
      },
      {
        "type": "image",
        "src": "src/images/ldi/snow_05.png",
        "caption": "Deformation Snow",
        "description": "RenderTarget에 캐릭터와, 아이템 등 특정 대상만을 캡쳐하기 위해 필터링 기능을 블루프린트로 설계하였습니다.\nSceneCaptureComponent 의 Show Only Actors 함수와 언리얼 내의 Tag 기능을 활용하여 특정 태그를 검출하여 일치하는 액터들을 캡쳐하게 하였으며\n캡쳐 범위는 Sphere Collision의 Radius 안에 오버랩되는 모든 액터들을 검출하도록 하였습니다.\n필터링 이후 기존에 존재하던 액터가 레벨상에 존재하지 않는 경우 Array 에서 제거하여 메모리를 절약하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/ldi/FakeInterior_01.png, src/images/ldi/FakeInterior_02.png, src/images/ldi/FakeInterior_03.png, src/images/ldi/FakeInterior_04.png",
        "caption": "Fake Interior Room Generator",
        "description": "거주단지 레벨을 만들면서, 건물들의 실내에 대한 디테일 표현이 필요하여 구현하게 된 기능입니다.\n기본적으로 HDRI 소스를 통한 Fake Interior를 구현하여 Cubemap에 대칭되는 쉐이더를 구성하고,\n프로젝트의 스타일에 맞는 Cubemap 리소스를 생산하기 위해 스크립트로 구현하게 되었습니다."
      },
      {
        "type": "image",
        "src": "src/images/ldi/tiltshift_01.gif",
        "caption": "Tilt Shift Camera",
        "description": "플레이 뷰가 아닌 촬영용 카메라 뷰의 시점으로 전환 되었을 때의 미니어처 느낌을 주기 위해 틸트 시프트 카메라를 구현하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/ldi/Campfire_A01_AddResource.gif, src/images/ldi/Campfire_A01_Breath.gif, src/images/ldi/Campfire_A01_end.gif, src/images/ldi/Campfire_A01_loop.gif, src/images/ldi/Campfire_A01_start.gif, src/images/ldi/Campfire_A01_stepend.gif, src/images/ldi/Campfire_A02_addresource.gif, src/images/ldi/Campfire_A02_breath.gif, src/images/ldi/Campfire_A02_end.gif, src/images/ldi/Campfire_A02_loop.gif, src/images/ldi/Campfire_A02_start.gif, src/images/ldi/Campfire_A02_stepend.gif, src/images/ldi/Campfire_ignite.gif",
        "caption": "FX - Campfire",
        "description": ""
      },
      {
        "type": "image",
        "src": "src/images/ldi/chimney_smoke_01.gif",
        "caption": "FX - Chimney Smoke",
        "description": ""
      },
      {
        "type": "gallery",
        "src": "src/images/ldi/can.jpg, src/images/ldi/drawer.jpg, src/images/ldi/drawerb.jpg, src/images/ldi/jamjar.jpg, src/images/ldi/lantern.jpg, src/images/ldi/shelf.jpg, src/images/ldi/table.jpg, src/images/ldi/umbrella.jpg",
        "caption": "Environment Art",
        "description": ""
      }
    ],
    "details": {
      "overview": "Stylized 액션 어드벤처 프로젝트인 리틀 데빌 인사이드에서 테크니컬 아티스트로 기여하며, PS4와 PC 플랫폼을 대응하는 UE4 프로젝트에 참여했습니다.",
      "responsibilities": [
        "기술 R&D",
        "배경 기술 지원",
        "UI 기술 지원",
        "프로젝트 최적화",
        "쉐이더 기술 지원",
        "에디터 툴 기술 지원",
        "FX 제작",
        "Environment 오브젝트 제작"
      ],
      "technologies": "HLSL, Blueprint, Perforce, Jenkins, RenderDoc",
      "results": "**•\t프로젝트의 스타일에 맞는 환경 구현을 위한 일부 쉐이더 및 리소스를 제작했습니다.**\no\tWorld Machine을 활용하여 사실적인 랜드스케이프 지형을 제작하고, 프로젝트에 최적화된 지형 생성 파이프라인을 구축했습니다.\no\t실사적인 눈 표현을 위해 Deformation Snow(반응형 눈) 쉐이더를 구현했습니다. SceneCapture와 RenderTarget 스와핑 기법을 활용해 플레이어의 이동 궤적을 누적시켰으며, Distance Based Tessellation을 Camera가 아닌 Player Pos 기준으로 적용하여 테셀레이션 부하를 효율적으로 관리했습니다.\no\t프로젝트에 요구되는 일부 배경 쉐이더를 제작하고, 블루프린트를 활용한 기능 구현을 지원했습니다. 또한, 레벨 구성에 필요한 일부 프랍(Prop)을 직접 제작하여 리소스 생산에 기여했습니다.\n\n**•\t프로파일링을 통한 병목 해결 및 기술 이슈를 지원했습니다.**\no\tUE4 Profiler와 GPU Visualizer를 활용하여 GPU 병목 현상을 분석하고 해결했습니다. 특정 레벨(Snow Island)에서 발생한 프레임 저하 원인이 ShadowDepths에 있음을 규명하고, Directional Light의 과도한 Far Shadow Distance 수치를 조정하여 렌더링 퍼포먼스를 정상화했습니다.\no\t정기적인 프로파일링을 통해 리소스 최적화를 수행하고, 개발 중 발생하는 다양한 테크니컬 이슈를 검증 및 처리하여 안정적인 개발 환경을 지원했습니다.\n\n**•\t아트 리소스 최적화 툴 및 업무 워크플로우를 설계했습니다.**\no\t폴리지 렌더링 최적화를 위해 Billboard Generator를 자체 개발했습니다. Blueprint와 RenderTarget을 이용해 3D 메쉬를 2D 빌보드로 자동 변환하는 프로세스를 구축했으며, Unlit 쉐이더와 Material Parameter Collection을 연동하여 라이팅 연산 비용을 절감하면서도 자연스러운 조명 변화를 구현했습니다.\no\t배경팀을 위한 업무 워크플로우를 직접 설계하고 제공하여 팀 내 협업 효율을 높였으며, 작업자들의 업무 편의성을 위해 DCC 툴(3ds Max 등) 연동 스크립트 및 인하우스 아트 툴을 제작하여 반복 작업을 줄였습니다."
    }
  },
  {
    "id": 1768292213855,
    "title": "Trouble Shooter",
    "company": "Facepunch Studios .LTD",
    "type": "professional",
    "date": "2015.07 - 2017.02",
    "category": "PC / Mobile",
    "description": "Stylized 탑 다운 슈터 프로젝트인 트러블 슈터에서 3D 배경 아티스트로 기여하며, 모바일과 PC 플랫폼을 대응하는 Unity 5 프로젝트에 참여했습니다.",
    "tags": [
      "Unity 5",
      "C#",
      "HLSL"
    ],
    "image": "src/images/ts/TS_main.png",
    "media": [
      {
        "type": "image",
        "src": "src/images/ts/TS_01.png",
        "caption": "",
        "description": ""
      },
      {
        "type": "image",
        "src": "src/images/ts/TS_02.png",
        "caption": "",
        "description": ""
      },
      {
        "type": "image",
        "src": "src/images/ts/TS_03.png",
        "caption": "",
        "description": ""
      },
      {
        "type": "image",
        "src": "src/images/ts/TS_04.png",
        "caption": "",
        "description": ""
      }
    ],
    "details": {
      "overview": "Stylized 탑 다운 슈터 프로젝트인 트러블 슈터에서 3D 배경 아티스트로 기여하며, 모바일과 PC 플랫폼을 대응하는 Unity 5 프로젝트에 참여했습니다.",
      "responsibilities": [
        "Environment 오브젝트 제작",
        "기능 프로토타이핑 구현"
      ],
      "technologies": "3ds Max, Substance Painter, Photoshop, C#, HLSL, Unity 5",
      "results": "**•\t배경 에셋 제작 및 쉐이더를 구현했습니다.**\no\t프로젝트의 아트 컨셉에 맞춰 3D 배경 에셋을 제작하고, 레벨 디자인에 필요한 리소스를 최적화하여 제공했습니다.\no\tHLSL을 활용하여 배경 제작에 필요한 커스텀 쉐이더를 직접 구현하고 적용하여, 엔진 상에서 의도한 비주얼 퀄리티를 완성했습니다.\n\n**•\t게임 기능 구현 및 기술 지원을 수행했습니다.**\no\tC# 스크립팅을 활용하여 간단한 프로토타입에 필요한 게임 플레이 기능을 직접 구현하고, 기획 의도를 검증하는 과정을 지원했습니다.\no\t모바일과 PC 멀티 플랫폼 환경을 고려하여 에셋 규격을 관리하고, 효율적인 제작 파이프라인을 유지했습니다."
    }
  },
  {
    "id": 1768292672266,
    "title": "Relief Mapping Shader",
    "company": "",
    "type": "personal",
    "date": "",
    "category": "Shader Development",
    "description": "UE5 환경에서 Relief Mapping 셰이더를 구현하고 Parallax Occlusion Mapping과의 비교 분석에 대한 문서 입니다.",
    "tags": [
      "UE5",
      "HLSL"
    ],
    "image": "src/images/reliefmapping/relief_01.jpg",
    "media": [
      {
        "type": "gallery",
        "src": "src/images/reliefmapping/hyundo-yoo-compare-surface-01.gif, src/images/reliefmapping/hyundo-yoo-compare-surface-02.gif, src/images/reliefmapping/hyundo-yoo-compare-surface-03.gif, src/images/reliefmapping/hyundo-yoo-compare-surface-04.gif",
        "caption": "Used the same parameter values. Ray sample steps: 16",
        "description": "Basepass pixel instructions:\nStandard - 160 instructions\nPOM - 206 instructions\nRelief - 244 instructions"
      },
      {
        "type": "gallery",
        "src": "src/images/reliefmapping/hyundo-yoo-compare-01.gif, src/images/reliefmapping/hyundo-yoo-compare-02.gif, src/images/reliefmapping/hyundo-yoo-compare-03.gif",
        "caption": "Used the same parameter values. Ray sample steps: 16",
        "description": "In POM method, can find little artifacts like a layering"
      }
    ],
    "details": {
      "overview": "UE5 환경에서 Relief Mapping 셰이더를 구현하고 테스트를 진행했습니다.\n\n테스트에서는 Relaxed Cone Stepping 방식을 채택하여 HLSL 코드로 작성하였으며, 이를 기존의 Parallax Occlusion Mapping (POM) 및 테셀레이션(Tessellation) 방식과 비교 분석했습니다.\n\n기술적 기반은 Ray와 Height Field(높이 맵)의 교차점을 탐색하는 알고리즘을 사용했으며,\n이 과정에서 GPU Gems 3 문헌에서 소개된 Relaxed Cone Stepping 방식을 적용했습니다.",
      "responsibilities": [],
      "technologies": "HLSL",
      "results": "테스트 결과 Parallax Occlusion Mapping과 유사하지만 더욱 깊이감 있는 표면 묘사가 가능했습니다.\n\n프로젝트에서 Height Texture를 활용한 디스플레이스먼트(Displacement) 효과를 고려 중이라면, 각 방식의 장단점을 다음과 같이 정리할 수 있습니다.\n\nA. Relief Mapping vs Vertex Shader (Tessellation)\n성능: Relief Mapping은 테셀레이션을 사용하는 버텍스 셰이더 방식보다 훨씬 빠르고 연산 비용이 저렴합니다.\n효율성: 지오메트리를 실제로 분할하지 않고 픽셀 셰이더 단계에서 깊이감을 표현하므로 훨씬 효율적입니다.\n\nB. Relief Mapping vs Parallax Occlusion Mapping (POM)\n시각적 품질: Relief Mapping이 POM보다 더 뛰어난 시각적 품질을 보여줍니다. 특히 가파른 각도나 실루엣 처리에서 더 정확한 결과를 얻을 수 있습니다.\n비용: 품질이 높은 만큼 POM보다는 연산 비용이 비쌉니다.\n\n이에 대한 사유는 Relief Mapping은 Ray와 Height Field의 정확한 교차점을 찾기 위해 1차 탐색(Linear Search) 후, 2차 정밀 탐색(Binary Search 등)을 추가로 수행하는 샘플링 과정을 거치기 때문입니다.\n\n테스트 결과, POM보다 약간의 추가 비용이 들더라도 더 높은 퀄리티의 깊이감이 필요하거나, 테셀레이션의 무거운 비용을 피하고 싶은 경우 Relief Mapping을 사용하는 것을 추천합니다.\n\n**참고 문헌 (References)**\nRelaxed Cone Stepping for Relief Mapping: GPU Gems 3, Chapter 18\nhttps://developer.nvidia.com/gpugems/gpugems3/part-iii-rendering/chapter-18-relaxed-cone-stepping-relief-mapping"
    }
  },
  {
    "id": 1768295052901,
    "title": "Easy LOD Edit Tool",
    "company": "",
    "type": "personal",
    "date": "",
    "category": "Tool Development",
    "description": "3ds Max의 Script Tool인 Easy LOD Edit Tool에 대한 문서 입니다.",
    "tags": [
      "MaxScript",
      "3ds Max"
    ],
    "image": "src/images/easylodtool/maxscript_lodtool_01.jpg",
    "media": [
      {
        "type": "video",
        "src": "src/videos/easylodtool/maxscript_lodtool.mp4",
        "caption": "Demo",
        "description": ""
      }
    ],
    "details": {
      "overview": "3D 배경 아티스트의 업무를 진행하다 보면 만들어진 LOD 그룹을 해체하거나 다시 만들어야 할 경우가 있습니다.\n그런 경우를 위해 3ds Max의 불편한 인터페이스 반복 작업을 줄이기 위해 스크립트를 제작했습니다.\n\n- Selections grouping\n- Selections ungroup\n- Creation LOD from a selected group\n- Break LOD group from selected\n- Completed filtered UCX Elements\n- Group name from LOD0\n\n**Available to download on Github:**\nhttps://github.com/Fristet/MaxScripts\n\nlodTool.mcr\nlodTool.ms",
      "responsibilities": [],
      "technologies": "MaxScript",
      "results": ""
    }
  },
  {
    "id": 1768408348486,
    "title": "Texel Density",
    "company": "",
    "type": "personal",
    "date": "",
    "category": "Article",
    "description": "Texel Density가 무엇인지 그리고 왜 이것을 지켜야 하는지에 대한 문서 입니다.",
    "tags": [],
    "image": "src/images/texeldensity/texeldensity_title.png",
    "media": [
      {
        "type": "image",
        "caption": "부적절한 Texel Density 적용 사례",
        "description": "위 이미지는 프로젝트 표준 규약을 준수하지 않았을 때 발생하는 대표적인 문제 사례를 보여줍니다\n\n진행하는 프로젝트의 카메라 시점에 따라 기준은 모두 조금씩 다르지만 숄더뷰 혹은 백뷰의 3인칭 시점 프로젝트에서의 일반적인 권장 Texel Density는 **10.24px/cm**입니다. 이는 하드웨어의 보급과 성능에 따라 조금씩 편차가 생길 수 있습니다.\n\n이는 월드 스케일 **1m** 면적당 **1024/px**의 텍스처 해상도가 할당됨을 의미합니다\n\n시각화된 디버그 뷰를 확인하면, 각 메쉬에 할당된 그리드 패턴의 크기가 서로 다름을 알 수 있습니다. 이는 메쉬 간의 **UV 밀도가 공간적으로 균일하지 않음**을 나타냅니다\n\n이러한 밀도 불균형은 특히 타일링 텍스처 적용 시 치명적인 시각적 결함을 유발합니다. 인접한 오브젝트 간의 텍스처 패턴 크기가 불규칙하게 출력되어, 전반적인 그래픽 품질을 저하하고 시각적 몰입을 방해하는 원인이 됩니다.",
        "src": "src/images/texeldensity/texeldensity_01.png"
      },
      {
        "type": "image",
        "caption": "적절한 Texel Density 적용 사례",
        "description": "위 이미지는 프로젝트 규약을 준수하여 적정 Texel Density가 적용된 모범 사례입니다. 디버그 뷰 상의 그리드 패턴을 분석해보면, 모든 메쉬의 UV 밀도가 공간적으로 균일하게 분포되어 있음을 확인할 수 있습니다.\n\n이러한 균일한 밀도 유지는 다음과 같은 기술적/시각적 이점을 제공합니다.\n\n시각적 일관성: 서로 다른 에셋이 인접해 있어도 텍스처 해상도의 차이가 느껴지지 않아 자연스러운 렌더링 품질을 보장합니다. \n리소스 최적화: 불필요한 고해상도 텍스처 사용을 방지하여 메모리 효율을 극대화합니다.",
        "src": "src/images/texeldensity/texeldensity_02.png"
      },
      {
        "type": "text",
        "caption": "Texel Density 규약의 목적 및 중요성",
        "description": "Texel Density 규약은 단순한 그래픽 품질 유지를 넘어, 개발 프로세스의 효율성을 위한 필수적인 기준입니다. 본 규약은 다음과 같은 목적을 수행합니다. \n\n협업의 표준화: 다수의 아티스트가 작업하더라도 통일된 결과물을 낼 수 있도록 돕는 객관적인 지표입니다. \n오버 디테일 방지: 아티스트가 감에 의존하지 않고, 스스로 에셋의 오버 스펙 여부를 판단하여 리소스 낭비를 줄이는 기준이 됩니다. \n파이프라인 확장: 본 규약은 Base Color 등의 텍스처뿐만 아니라, 엔진 상의 Lightmap UV 해상도 산정에도 동일하게 적용되는 중요한 기준입니다."
      },
      {
        "type": "text",
        "caption": "Texel Density 기준 설정 시 고려해야하는 요소들",
        "description": "**프로젝트 환경 분석게임 장르 및 카메라 시점:** 1인칭(FPS), 3인칭(TPS), 쿼터뷰(Quarter View), 탑뷰(Top View) 등 카메라와 오브젝트 간의 거리에 따라 기준값이 달라집니다.\n1인칭 시점의 경우, 플레이어가 오브젝트에 매우 근접하기 때문에 높은 Texel Density(예: 10.24 - 20.48px/cm)가 요구됩니다. 반면, 탑뷰 시점에서는 상대적으로 낮은 밀도(예: 5.12 - 10.24px/cm)도 충분할 수 있습니다.\n\n에셋 카테고리 분류 거리에 따른 효율적인 관리를 위해 에셋을 다음과 같이 분류하여 Texel Density 를 테스트합니다. \nPoint/Near Assets: 플레이어와 근접 상호작용하는 에셋\nDistant Assets: 원경 배치용 에셋\nLandscape: 지형 배경 요소"
      },
      {
        "type": "text",
        "caption": "최적의 해상도를 찾는 방법",
        "description": "규약에 따른 올바른 텍스처 해상도를 결정하는 데에는 두 가지 핵심 변수가 작용합니다. \n스크린 점유율: 레벨에 배치된 객체가 실제 플레이 화면 상에서 차지하는 픽셀 크기를 측정합니다. \n메모리 여유: 타겟 플랫폼의 가용 VRAM 용량을 고려하여 상한선을 설정합니다. \n\n이상적인 목표는 스크린 픽셀과 텍스처 텍셀의 비율을 1:1로 맞추는 것이지만, 현실적인 메모리 제약을 고려하여 가장 근사한 값으로 최적화하는 과정을 거쳐야 합니다."
      },
      {
        "type": "text",
        "caption": "레벨에 배치된 객체를 기준으로 스크린 픽셀을 구하는 방법",
        "description": "이론적으로 가장 선명한 화질은 텍스처의 1 Texel 이 모니터의 1 Pixel과 정확히 1:1로 매핑될 때 구현됩니다. 그러나 카메라 거리와 시각의 변화가 빈번한 3D 환경에서 이를 완벽하게 유지하는 것은 물리적으로 불가능합니다. 따라서, 본 방법은 완벽한 1:1 매칭보다는 **'최대한 근사한 값'**을 유지하여 시각적 오차를 최소화하는 것을 목표로 합니다.\n\n복잡한 수치 계산의 효율성을 높이고 작업자 간의 오차를 줄이기 위해, 모니터 해상도 값을 다음과 같이 정규화하여 적용합니다.\n\n기준 해상도: FHD (1920x1080)\n계산 적용값: 2000x1000 px\n\n가로 1920px은 2000px로, 세로 1080px은 1000px로 반올림/내림하여 직관적인 계산이 가능하도록 설정합니다."
      },
      {
        "type": "gallery",
        "caption": "픽셀 그리드를 활용한 Texel Density 계산 예시",
        "description": "그리드 시각화 및 스크린 점유율 측정을 위한 픽셀 그리드 시각화 도구를 사용시, 화면에 표시되는 사각형의 셀 1개의 크기는 100x100px로 정의됩니다.\n\n이를 기준으로 레벨에 배치된 객체의 스크린 점유 픽셀을 측정합니다.\n\n좌측 이미지의 예시는 스크린 상에서 약 **500/px**의 너비를 점유하고 있습니다.\n좌측 이미지의 예시는 스크린 상에서 약 **100/px**의 너비를 점유하고 있습니다.\n\n텍스처 해상도 환산은 게임 엔진의 텍스처 처리 효율성을 위해, 측정된 스크린 픽셀 값을 가장 근사한 2의 거듭제곱(Power of Two) 규격으로 환산합니다.\n500/px -> **512**/px\n100/px -> **128**/px\n\n도출환산된 해상도 값을 기준으로 Texel Density를 산출합니다. (100/cm기준)\n512 / 100 = **5.12** px/cm\n128 / 100 = **1.28** px/cm\n\n위 계산 과정을 통해 각 오브젝트의 화면 점유율에 따른 적정 Texel Density를 계산할 수 있습니다.",
        "src": "src/images/texeldensity/texeldensity_03.png, src/images/texeldensity/texeldensity_04.png"
      },
      {
        "type": "gallery",
        "caption": "소형 오브젝트의 적정 Texel Density 계산 예시 및 텍스쳐 조정",
        "description": "예시로 Stellar Blade 프로젝트 내에서 진행했던 소형 오브젝트의 Texel Density를 계산하고 적용하는 사례입니다.\n\n좌측 이미지는 3인칭 플레이어 카메라의 통상적인 시점에서 소형 프롭을 바라보았을 때의 픽셀 점유율을 측정한 결과입니다.\n해당 오브젝트는 화면상에서 약 **100x200/px**의 면적을 차지하며 렌더링되고 있습니다.\n\n측정된 스크린 픽셀 값을 기반으로 적정 해상도와 현재 적용된 해상도를 비교 분석합니다.\n권장 해상도: 스크린 점유 영역(**200/px** 높이)을 커버할 수 있는 가장 근접한 2의 거듭제곱(POT) 규격인 **256x256/px**이 적정합니다.\n현재 해상도: 현재 해당 에셋에는 **2048x2048/px**의 고해상도 텍스처가 할당되어 있습니다.\n\n결론적으로는 표현되는 픽셀 대비 약 **8배(256x256 vs 2048x2048)**에 달하는 불필요한 텍스처 데이터가 로드되어 있습니다.\n이는 시각적 디테일 향상에는 전혀 기여하지 못하면서 메모리 점유율만 높이는 전형적인 오버 퀄리티 및 리소스 낭비 사례로, 즉각적인 최적화가 요구됩니다.\n\n이러한 경우 Unreal Engine에서는 텍스처의 Properties 에서 Compression 탭에 있는  **'Maximum Texture Size'** 파라미터의 값을 통해 텍스처의 해상도를 제한해 줄 수 있습니다.\n\nUnity의 경우에는 텍스처의 Inspector 윈도우에서 Texture Import Setting 탭에 있는 **'Max Size'** 파라미터 값을 통해 텍스처의 해상도를 제한해 줄 수 있습니다.",
        "src": "src/images/texeldensity/texeldensity_05.png, src/images/texeldensity/texeldensity_06.png"
      },
      {
        "type": "gallery",
        "caption": "텍스쳐 해상도 변경 후 비교",
        "description": "2048px(좌)와 256px(우) 두 텍스처를 적용한 결과물을 비교한 결과, 렌더링 된 이미지 상에서 유의미한 시각적 차이가 관찰되지 않음을 확인했습니다. 이는 앞서 계산된 스크린 점유 픽셀의 한계로 인해, 텍스처 해상도가 아무리 높아도 화면에는 표현되지 않기 때문입니다.\n\n이번에는 대형 오브젝트를 예시로 진행해보도록 하겠습니다.",
        "src": "src/images/texeldensity/texeldensity_07.png, src/images/texeldensity/texeldensity_08.png"
      },
      {
        "type": "image",
        "caption": "대형 오브젝트의 적정 Texel Density 계산 예시 그리고 마무리",
        "description": "플레이어 시점에서 해당 대형 오브젝트의 스크린 점유 영역을 측정한 결과는 다음과 같습니다.\n스크린 점유 영역: 400x1000px\n권장 해상도: 세로 축의 최대 픽셀 값(1000px)을 커버할 수 있는 최적의 2의 거듭제곱(POT) 규격은 **1024x1024/px**입니다.\n\n현재 적용된 텍스처 해상도는 **2048x2048px**입니다.\n이는 적정 규격(1024px) 대비 2배의 해상도, 용량 면에서는 4배의 메모리를 점유하고 있으나, 이는 스크린이 표현할 수 있는 한계치를 초과한 상태입니다.\n\n결론적으로 최종적인 렌더링 결과물은 결국 모니터의 물리적 픽셀 그리드 안에 담겨 출력됩니다. 텍스처의 정보량이 아무리 방대하더라도, 이를 표현할 스크린의 픽셀 수가 그에 미치지 못한다면 초과된 정보는 렌더링 과정에서 소실되거나 뭉개지게 됩니다.\n\n따라서, **\"스크린 픽셀 수 < 텍스처 텍셀 수\"**인 상황에서의 고해상도 텍스처 사용은 시각적 이득 없이 VRAM만 소모하는 비효율적인 병목 현상임을 발생시킬 수 있음을 명심해야 합니다.",
        "src": "src/images/texeldensity/texeldensity_09.png"
      }
    ],
    "details": {
      "overview": "고품질의 그래픽과 퍼포먼스 최적화 사이의 균형을 맞추기 위해 테크니컬 아티스트와 그래픽 프로그래머가 반드시 고려해야 할 지표가 있습니다. 바로 **Texel Density**입니다.\n\n이를 이해하기 위해서는 먼저 그래픽을 구성하는 가장 기초적인 두 단위의 정의를 명확히 해야 합니다.\n\n**PIXEL (Picture Element)**\n픽셀은 Screen Space에서 이미지를 형성하는 최소 단위입니다. 최종적으로 모니터나 디스플레이를 통해 유저에게 전달되는 시각 정보의 결과값이라 할 수 있습니다.\n\n**TEXEL (Texture Element)**\n텍셀은 Texture Space에 존재하는 이미지 정보의 최소 단위입니다. 3D 모델의 표면 색상이나 질감을 정의하는 원본 데이터입니다.\n\n**기술적 배경 및 목적** \nTexel Density는 3D World Space의 단위 면적당 텍셀이 얼마나 밀집되어 있는지를 나타내는 척도입니다.\n렌더링 최적화의 핵심은 스크린에 그려지는 **Screen Pixel Density**와 이에 대응하는 **Texture Texel Density**를 균일한 수준으로 유지하는 것입니다. 만약 픽셀 대비 텍셀 밀도가 불필요하게 높을 경우, 다음과 같은 문제가 발생합니다.\n\n메모리 비효율성: 화면에 표현 가능한 픽셀 수를 초과하는 고해상도 텍스처 데이터는 시각적 품질 향상에 기여하지 못하며, VRAM 및 메모리 대역폭의 심각한 낭비를 초래합니다.\n\n시각적 불균형: 에셋 간 UV 밀도가 균일하지 않을 경우, 타일링 텍스처 사용 시 패턴이 불규칙해지거나 시각적 이질감이 발생할 수 있습니다.\n\n따라서 본 문서는 아티스트가 에셋의 오버 디테일 여부를 스스로 판단할 수 있는 기준을 제시하고, 불필요한 리소스 낭비를 방지하여 최적화된 게임 환경을 구축하는 것을 목표로 합니다.",
      "responsibilities": [],
      "technologies": " ",
      "results": ""
    }
  }
];

// 로컬 스토리지에서 프로젝트 로드
function loadProjects() {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
        try {
            projects = JSON.parse(savedProjects);
            console.log('프로젝트 로드 완료:', projects.length, '개');
        } catch (error) {
            console.error('프로젝트 데이터 로드 실패:', error);
            // localStorage 파싱 실패 시 하드코딩된 데이터 유지
        }
    } else {
        console.log('localStorage에 저장된 데이터가 없습니다. 하드코딩된 프로젝트를 사용합니다.');
        // localStorage가 없으면 하드코딩된 projects 배열을 그대로 사용
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

    // 헬퍼: 텍스트 포맷팅 (볼드, 헤딩, 줄바꿈)
    const formatText = (str) => {
        if (!str) return '';
        return str
            .split('\n')
            .map(line => {
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
    };

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

// ===== 우클릭 방지 =====
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

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