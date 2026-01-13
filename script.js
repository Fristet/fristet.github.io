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
    "image": "src/images/cinev_01.png",
    "media": [
      {
        "type": "video",
        "src": "https://www.youtube.com/watch?v=tIe2-KhdiFM",
        "caption": "CINEV | Short Animation, Petals Long For the Wind",
        "description": ""
      },
      {
        "type": "image",
        "src": "src/images/cinev_01.png",
        "caption": "123",
        "description": "123123123"
      }
    ],
    "details": {
      "overview": "NPR과 PBR을 동시 대응하는 3D 시네마틱 생성 툴 프로젝트인 CineV에서 시니어 테크니컬 아티스트로 기여하며, PC와 Web 플랫폼을 대응하는 UE5 프로젝트에 참여했습니다.",
      "responsibilities": [
        "기술 R&D",
        "배경 기술 지원",
        "UI 기술 지원",
        "CI/CD 파이프라인 설계",
        "클라이언트 기능 제공",
        "플러그인 제작 및 포팅/컨버팅",
        "프로젝트 최적화",
        "쉐이더 기술 지원"
      ],
      "technologies": "C++, Python, Shell, HLSL, Blueprint, Git, Perforce, GitLab, RenderDoc, Intel GPA",
      "results": "• 프로젝트 리소스 최적화 및 자동화 파이프라인을 구축하였습니다.\n    o 장기 개발로 인한 에디터 퍼포먼스 저하를 해결하기 위해 리소스 Validator 툴을 제작하였습니다.\n    o 중복 및 미사용 리소스를 전수 검사·제거하여 프로젝트 용량을 약 75% 경량화 (1TB → 260GB) 하였습니다.\n    o Git Hook과 Shell Script를 활용하여, 리소스 검증 및 정리 과정을 자동화 파이프 라인에 통합하였습니다.\n\n• 프로젝트 퍼포먼스 최적화를 통해 목표 프레임을 달성하였습니다.\n    o 렌더링 병목 구간 분석 및 최적화를 진행하여, 평균 20fps에서 60fps 이상으로 성능을 향상시켰습니다.\n    o [메모리] Texture Asset Validator 툴을 제작하여 객체의 Texel/Pixel Density를 조정하는 과정을 자동화하였고, 이를 통해 메모리 오버헤드 및 크래시 이슈를 사전에 차단하였습니다.\n    o [GPU] Nanite(Mesh Shader) 환경에서의 과도한 오버드로우를 방지하기 위해 엔진 레벨에서 별도의 Pre-pass Frustum/Occlusion Culling 로직을 구현하여 렌더링 효율을 극대화하였습니다. 또한 Pixel Shader에 거리 기반 LOD를 적용하여 연산 부하를 제어하였습니다.\n    o [CPU] Frustum/Occlusion Culling 적용으로 DrawCall을 최적화하였고, Hair/Cloth 시뮬레이션의 Bone LOD 및 Iteration을 시야 거리에 따라 동적으로 할당하여 연산 비용을 절감하였습니다. 추가로 UI 구조 설계의 병목 지점을 파악하고 코드를 수정하여 보완하였습니다.\n\n• R&D 및 개발 환경 효율화를 위한 파이프라인을 설계하였습니다.\n    o AD가 요구하는 비주얼 완성도를 위해 UE5 엔진 소스를 수정하여 독자적인 쉐이더 모델을 구현하였습니다.\n    o 컨셉 아트 제작 효율 증대를 위해 ComfyUI를 도입하고, 관련 파이프라인 설계 및 가이드라인 문서를 제공하였습니다.\n    o GitLab 기반의 CI/CD 파이프라인을 구축하여 커스텀 쉐이더 컴파일, 엔진 통합 테스트 및 배포 과정을 전면 자동화하였습니다.\n    o 3D 배경 및 캐릭터용 쉐이더를 설계하고, 아티스트를 위한 인하우스 툴 및 기술 가이드라인을 작성하여 배포하였습니다.\n    o Gaussian Splatting 도입을 위해 여러 시스템을 테스트하여 검증한 뒤, Volinga와의 협업을 진행하기 위해 커뮤니케이션을 담당하였습니다.\n    o UI에서의 기술적 구현이 필요한 기능과 Shader들의 제작하였습니다."
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
      "responsibilities": [],
      "technologies": "C++, Python, Shell, HLSL, MaxScript, Blueprint, Perforce, Jenkins",
      "results": "•\t아트 비주얼 퀄리티 향상을 위한 툴 개발 및 엔진 R&D를 수행하였습니다.\n    o\tSigned Distance Fields(SDF) 기반의 Face Shadow 구현을 위해, OpenCV 라이브러리와 Python을 활용하여 SDF 리소스 생성 자동화 툴을 제작 및 제공하였습니다.\n    o\tAD가 요구하는 Stylized 아트의 비주얼 완성도를 극대화하기 위해, UE5 엔진 소스 코드를 수정하고 커스터마이징하여 독자적인 쉐이더 모델을 구축하였습니다.\n    o\t3D 배경 및 캐릭터 제작에 필요한 전반적인 쉐이더를 설계하고, 아티스트가 효율적으로 사용할 수 있도록 최적화하여 제공하였습니다.\n\n•\t개발 파이프라인 효율화 및 협업 환경을 조성하였습니다.\n    o\tJenkins를 이용하여 커스텀 엔진 빌드 CI/CD 파이프라인을 설계하였으며, 쉐이더 컴파일·엔진 통합 테스트·배포 과정을 자동화하여 개발 생산성을 높였습니다.\n    o\t아트 작업자의 업무 효율을 높이기 위해 인하우스 툴을 개발하고, 상세한 기술 가이드라인 문서를 작성하여 배포하였습니다."
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
    "image": "src/images/sb_02.webp",
    "media": [],
    "details": {
      "overview": "스타일리시 액션 프로젝트인 스텔라 블레이드에서 테크니컬 아티스트로 기여하며, PS5와 PC 플랫폼을 대응하는 UE4 프로젝트에 참여했습니다.",
      "responsibilities": [],
      "technologies": "123",
      "results": "•\tPS5 플랫폼에 대한 대응을 진행했습니다.\no\tPS5와 PC 간의 상이한 칩셋의 쉐이더 컴파일 환경을 파악하고, PS5의 AMD 칩셋의 특성에 맞게 쉐이더를 수정하여 렌더링 안정성을 확보했습니다.\n\n•\t프로젝트의 세미 오픈월드 환경에 맞는 최적화를 통해 목표 프레임을 달성하였습니다.\no\t원경 디테일 유지와 퍼포먼스 확보를 위해 Imposter Baker 및 MassiveLOD Billboard 시스템 등을 활용 및 구현하여 적용했습니다.\no\t효율적인 렌더링과 CPU및 GPU 부하를 줄이기 위해 적극적으로 Section Instancing 시스템을 구현하여 적용하였습니다.\no\t일부 실시간 Light를 사용함에 있어 Shadow의 CPU및 GPU 부하를 줄이기 위해 Fake Shadow를 구현하여 적용했습니다.\no\t대량의 Foliage를 사용하는 환경에서 Foliage 리소스 제작 및 퀄리티 컨트롤, 최적화, Shader 최적화를 진행하였습니다.\no\tRenderDoc과 AMD GPU Profiler를 이용하여, PC와 PS5 플레이 환경에서의 GPU 병목을 파악하고 해결하였습니다.\no\tShader들의 Pixel 및 Vertex Shader에 Screen Size와 거리 기반의 LOD를 적용하여 연산 부하를 제어하였습니다.\n\n•\tAD가 요구하는 완성도를 위해 여러 기술적 지원을 하였습니다.\no\t카메라와 오브젝트 간의 간섭을 자연스럽게 처리하는 Dither Actor Component를 구현하여 카메라 전환 시의 시각적 이질감과 불편함을 최소화했습니다.\no\tUI 컴포넌트의 비주얼 적 완성도를 위해 UI 쉐이더들을 구현하여 적용했습니다.\no\t프로젝트에서 요구하는 비주얼 적 배경의 완성도를 위해 대부분의 배경 재질 쉐이더들을 구현하여 적용했습니다.\no\tRelief Mapping을 구현하여 Parallax Occlusion Mapping 불완전한 부분을 대체하고 퍼포먼스와 비주얼 적 완성도를 높였습니다.\no\t각종 특수한 효과들에 대한 쉐이더를 구현하여 환경에 맞는 효과적으로 완성도를 높였습니다.\n\n•\tJenkins 기반의 빌드 자동화로 개발 효율을 높였습니다.\no\tJenkins와 Shell Script를 활용한 Lightbuild Automation Tool을 개발하여, 라이팅 빌드 과정을 자동화하고 CI/CD 파이프라인에 통합하여 아티스트의 불필요한 대기 시간을 단축했습니다.\n\n•\t모션 캡쳐와 시네마틱 제작 환경을 구축하였습니다.\no\tCinematic 제작 시 Virtual Camera 등의 장비를 모션캡쳐 등에 활용할 수 있도록 관련 하드웨어 장비를 제작하고 환경을 구성하여 제공하였습니다.\n\n•\t애니메이션의 캐릭터와 환경 오브젝트 간의 인터렉션 기능을 구현하였습니다.\no\tAnimation의 인게임 환경 오브젝트 간의 인터렉션을 구현하고, 이 과정에서 Shader를 연동하여 보다 효과적인 시각적 효과를 완성하였습니다.\n\n•\t작업자의 에디터 사용 편의성을 높이기 위해 인하우스 툴을 제작하여 반복 작업을 줄이고 생산성을 향상시켰습니다.\no\t3ds Max에서 사용하기 위한 MaxScript 들과, 에디터 내에서 사용하는 여러 편의성 툴들을 개발하여 제공하였습니다.\n\n•\t협업 가이드 및 품질 표준을 수립했습니다.\no\tSony XDEV 팀과의 원활한 기술 협업을 위해 전용 가이드라인을 제작하고, 이슈 대응 및 기술 커뮤니케이션을 진행했습니다.\no\t외부의 아웃소싱 업체와의 원활한 기술 협업을 위해 가이드라인을 제작을 하고, 커뮤니케이션을 진행하였습니다.\no\tTexel Density 규약 수립 및 UVDensityVisualize 툴 개발을 통해 대규모 리소스 품질을 표준화하고, 외주 및 내부 배경팀의 워크플로우를 정립했습니다."
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
      "C++",
      "HLSL",
      "MaxScript",
      "Blueprint",
      "Git",
      "Jenkins",
      "RenderDoc"
    ],
    "image": "src/images/corwz_02.jpg",
    "media": [
      {
        "type": "gallery",
        "src": "src/images/CustomDecal_01.PNG, src/images/CustomDecal_02.PNG, src/images/CustomDecal_03.PNG",
        "caption": "Decal  for Translucent Material",
        "description": "Translucent ( 반투명 ) 머테리얼에 사용하기 위한 목적으로 제작된 셰이더입니다.\n기존의 디퍼드 데칼은 SceneDepth 를 통해 프로젝션 박스와 겹치는 오브젝트의 뎁스를 가져와 그 사이의 픽셀에 텍스쳐를 렌더하는 방식입니다.\n하지만 반투명 머테리얼은 기본적으로 SceneDepth에 그릴 수 없음으로 자연스럽게 디퍼드 데칼을 사용 할 수 없습니다.\n그로 인해 탄흔이 남은 유리 등을 표현하기 위해서 스크린 스페이스 데칼의 구현 방식을 통해 기존의 SceneDepth 가 아닌 CustomDepth 를 통해 데칼을 샘플링 해주는 방식의 셰이더를 구현 하게 되었습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/CustomDecal_04.PNG, src/images/CustomDecal_05.PNG, src/images/CustomDecal_06.PNG",
        "caption": "Decal  for Translucent Material",
        "description": "반투명 머테리얼이 적용된 컴포넌트는 SceneDepth 에 렌더가 되지 않음으로 단일 메쉬로는 데칼을 표현 할 수 없습니다.\n그러므로 일부의 한정된 대상 ( 부숴지지 않는 ) 유리 등에 사용을 할 목적으로만 반투명 머테리얼이 적용 메쉬와 동일한 메쉬를 같은 좌표에 추가 한 후 Mainpass 에서 Render를 비활성화 한 후 CustomDepth 를 활성화 해 CustomDepth 상에만 렌더 되게 하였습니다.\n이를 통해 반투명 머테리얼에도 CustomDepth 를 통한 Screen Space Decal 을 렌더할 수 있게 하였습니다"
      },
      {
        "type": "gallery",
        "src": "src/images/DecalEmissiveFade.gif, src/images/DecalEmissiveFade_05.PNG",
        "caption": "Impact Decal With Emissive Fade",
        "description": "런타임 중에 피격 데칼이 생성 된 후 잔열을 표현하기 위해 구현한 기능입니다.\n런타임 중에 생성 된 데칼 컴포넌트의 Scalar 파라미터를 현재의 Deltatime 에 따른 Curve Float 값으로 업데이트를 해주는 방식으로 구현을 하였습니다.\n단순한 기능이지만 해당 구현을 진행하면서 C++ 에서의 클래스 활용과 함수 호출 등을 숙지 할 수 있었습니다"
      },
      {
        "type": "gallery",
        "src": "src/images/DecalEmissiveFade_01.PNG, src/images/DecalEmissiveFade_02.PNG, src/images/DecalEmissiveFade_03.PNG, src/images/DecalEmissiveFade_04.PNG",
        "caption": "Impact Decal With Emissive Fade",
        "description": "DataTable의 Structure 에 CurveFloat 를 추가 한 후 C++ 내에서 해당 변수를 참조하여 CurveFloat의 값을 갱신 및 초기화 후 런타임 중에 생성된 Decal Component 에서 Dynamic Material Instance 의 Scalar 파라미터의 값을 현재 DeltaTime 의 갱신 및 누적을 통해 CurveFloat 내의 값을 받아 업데이트를 해주는 구현입니다."
      },
      {
        "type": "video",
        "src": "src/videos/FakeWind.mp4",
        "caption": "Fake Wind",
        "description": "Grass 나 Tree 등의 폴리지에 사용을 할 목적으로 구현을 하게 된 Wind 셰이더입니다.\n메쉬의 VertexColor 데이터를 기반으로 Rotate 할 축을 결정하며 Wind Actor 의 Forward Vector 의 방향에 따라 Wind 의 방향 등이 제어 되도록 하였습니다.\nMaterial Parameter Collection 을 통해 다수의 파라미터들을 블루프린트 내에서 제어를 하는 방식으로 구현하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/FakeWind_01.PNG, src/images/FakeWind_02.PNG, src/images/FakeWind_03.PNG",
        "caption": "Fake Wind",
        "description": "Actor 블루프린트의 함수를 추가해 보다 쉽게 관리가 가능하게 하였으며, Actor 의 Forward Vector 와 각종 변수 등을 통해 Material 내의 파라미터를 제어 할 수 있게 하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/crowz_optic.gif, src/images/OpticShader_01.PNG",
        "caption": "Optic Shader",
        "description": "총기의 조준경 등에 필요로 하여 진행하게 된 Optic Shader 입니다.\n도트 사이트와 스코프 등의 사실적인 느낌을 표현하는데 중점을 두고 진행하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/OpticShader_04.PNG, src/images/OpticShader_05.PNG",
        "caption": "Optic Shader | Magnification",
        "description": "렌즈를 통해 투과 된 사물을 표현하기 위한 Magnification 기능입니다.\n부분적으로 배율이 적용된 표현을 하기 위해 ScreenUV를 활용하여 구현하였습니다.\nRenderTarget 을 사용을 하지 않음으로써 기존의 RenderTarget 을 사용한 방식보다 성능이 빠르고 효율적입니다."
      },
      {
        "type": "image",
        "src": "src/images/OpticShader_03.PNG",
        "caption": "Optic Shader | Magnification",
        "description": "사용된 노드는 위와 같습니다.\nSceneColor를 통해 현재 Render 되고있는 Scene을 Buffer로 통해 접근하여 SceneColor의 UV를 현재 ScreenUV 를 기준으로 계산해 가산 해주었습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/crowz_optic_06.png, src/images/crowz_optic_07.png",
        "caption": "Optic Shader | Parallax",
        "description": "스코프 등의 렌즈를 통해 보이는 시차 보정을 표현하기 위한 Parallax 기능입니다.\n스크린 정 중앙의 기준으로 Mask 를 그려주는 방식을 사용하였으며 그로 인해 ScreenSize 와 ScreenUV 등을 활용하여 구현하였습니다.\n추가적으로 반동 등의 표현을 더욱 극대화 하기 위한 기능을 추가하였습니다."
      },
      {
        "type": "image",
        "src": "src/images/OpticShader_02.PNG",
        "caption": "Optic Shader | Parallax",
        "description": "사용된 노드는 위와 같습니다.\n현재의 ViewSize 를 통해 ScreenUV의 좌표를 계산해 준 뒤 ScreenUV 와 계산된 좌표를 기준으로 SphereMask 를 생성해주었습니다.\n이를 통해 Screen의 해상도에 영향을 받지 않는 마스크를 스크린 중앙에 생성해 주었으며 추가적으로 총기의 반동 등의 느낌을 더하기 위해\nCameraPos 와 Material 이 적용되는 Object 의 거리를 계산해 보간해 주고 곱 연산을 통해 마스크의 사이즈를 조정하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/Shader.PNG, src/images/WeaponClipping.gif",
        "caption": "Weapon Clipping",
        "description": "플레이 도중 플레이어의 총기 메쉬 등이 벽 등을 뚫고 반대편에 노출되는 현상을 막기 위해 구현을 진행하였습니다.\nWeapon의 Component 에서 BoundBox WorldPos 를 가져와 BoundBox 의 크기를 기준으로 Clipping을 하였으며 If 대신 Step 함수를 사용하여서 불필요한 연산을 감소하였습니다."
      },
      {
        "type": "gallery",
        "src": "src/images/SettingWeaponMAT.PNG, src/images/SettingWeaponParam.PNG",
        "caption": "Weapon Clipping",
        "description": "무기의 Component 의 경우 Parts 별로 구분이 되어있어 ( Barrel, Recever, Body, Stock 등 ) 각 Parts 의 머테리얼 들을 Array 대입해\nDynamicMaterialInstnace(DMI) 를 생성해주고 해당 DMI 를 메쉬에 적용해주며 동시에 머테리얼의 파라미터를 초기화 하며 생성된 BoundBox의 Pos를 대입해줍니다."
      },
      {
        "type": "image",
        "src": "src/images/SettingApprox.PNG",
        "caption": "Weapon Clipping",
        "description": "BoundBox의 Extend 를 기준으로 Mesh 의 ApproxSize 를 추출한 뒤 바운드 박스의 월드 좌표와 ApproxSize를 통해 총기의 BoundBox의 끝과 시작점을 알아내 SphereTrace를 생성해준 뒤\nSphereTrace의 HitResult 를 기반으로 Location 을 “ClippingOffset” 머테리얼 파라미터에 대입해주는 방식입니다."
      }
    ],
    "details": {
      "overview": "대규모 FPS/TPS 프로젝트인 CrowZ에서 테크니컬 아티스트로 기여하며, PC 플랫폼을 대응하는 UE4 프로젝트에 참여했습니다.",
      "responsibilities": [],
      "technologies": "123",
      "results": ""
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
      "HLSL",
      "Blueprint",
      "Perforce",
      "Jenkins",
      "RenderDoc"
    ],
    "image": "src/images/ldi_02.jpg",
    "media": [],
    "details": {
      "overview": "123",
      "responsibilities": [],
      "technologies": "123",
      "results": ""
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
      "C#",
      "HLSL"
    ],
    "image": "src/images/TS_main.png",
    "media": [
      {
        "type": "image",
        "src": "src/images/TS_01.png",
        "caption": "",
        "description": ""
      },
      {
        "type": "image",
        "src": "src/images/TS_02.png",
        "caption": "",
        "description": ""
      },
      {
        "type": "image",
        "src": "src/images/TS_03.png",
        "caption": "",
        "description": ""
      },
      {
        "type": "image",
        "src": "src/images/TS_04.png",
        "caption": "",
        "description": ""
      }
    ],
    "details": {
      "overview": "123",
      "responsibilities": [],
      "technologies": "123",
      "results": ""
    }
  },
  {
    "id": 1768292672266,
    "title": "Relief Mapping Shader",
    "company": "",
    "type": "personal",
    "date": "",
    "category": "Shader Development",
    "description": "릴리프",
    "tags": [
      "HLSL"
    ],
    "image": "src/images/relief_01.jpg",
    "media": [
      {
        "type": "gallery",
        "src": "src/images/hyundo-yoo-compare-surface-01.gif, src/images/hyundo-yoo-compare-surface-02.gif, src/images/hyundo-yoo-compare-surface-03.gif, src/images/hyundo-yoo-compare-surface-04.gif",
        "caption": "Used the same parameter values. Ray sample steps: 16",
        "description": "Basepass pixel instructions:\nStandard - 160 instructions\nPOM - 206 instructions\nRelief - 244 instructions"
      },
      {
        "type": "gallery",
        "src": "src/images/hyundo-yoo-compare-01.gif, src/images/hyundo-yoo-compare-02.gif, src/images/hyundo-yoo-compare-03.gif",
        "caption": "Used the same parameter values. Ray sample steps: 16",
        "description": "In POM method, can find little artifacts like a layering"
      }
    ],
    "details": {
      "overview": "안녕하세요. 오늘은 표면 재질에 릴리프(Relief) 기법을 적용한 셰이더를 실험해 보았습니다.\n결과는 이전 데칼 작업과 유사했으며, 최적화에 대해서도 확인해 보았습니다.\n제 생각에는 프로젝트에서 디스플레이스먼트, 패럴랙스 오클루전 매핑(POM), 또는 릴리프 매핑과 함께 높이 텍스처를 사용하려는 경우, 릴리프 기법을 추천합니다.\n릴리프 기법은 버텍스 셰이더(테셀레이션)보다 효율적이고 빠르며 비용도 저렴합니다. 또한 POM보다 더 나은 시각적 품질을 얻을 수 있습니다. 하지만 패럴랙스 오클루전 매핑보다는 비용이 많이 든다는 점을 알아두셔야 합니다. 릴리프 기법은 레이 높이 필드 교차점을 계산하기 위해 두 번째 탐색을 통해 샘플링을 수행합니다.\n감사합니다.",
      "responsibilities": [],
      "technologies": "HLSL",
      "results": ""
    }
  },
  {
    "id": 1768295052901,
    "title": "Easy LOD Edit Tool",
    "company": "",
    "type": "personal",
    "date": "",
    "category": "Tools",
    "description": "Easy LOD Edit Tool\n- Selections grouping\n- Selections ungroup\n- Creation LOD from a selected group\n- Break LOD group from selected\n- Completed filtered UCX Elements\n- Group name from LOD0\n",
    "tags": [],
    "image": "src/images/maxscript_lodtool_01.jpg",
    "media": [
      {
        "type": "video",
        "src": "src/videos/maxscript_lodtool.mp4",
        "caption": "Demo",
        "description": ""
      }
    ],
    "details": {
      "overview": "MAXScript Works for 3D Artists\n- Selections grouping\n- Selections ungroup\n- Creation LOD from a selected group\n- Break LOD group from selected\n- Completed filtered UCX Elements\n- Group name from LOD0\n\nAvailable to download on Github:\nhttps://github.com/Fristet/MaxScripts\n\nlodTool.mcr\nlodTool.ms",
      "responsibilities": [],
      "technologies": "MaxScript",
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