// 공유 뉴스 데이터
const newsData = [
    {
        id: 1,
        title: "정기 점검 서비스 안내",
        content: "2023년 6월 13일부터 6월 15일까지 정기 점검을 진행합니다. 점검 시간 동안 서비스 이용이 제한될 수 있으니 참고해 주세요. 자세한 내용은 홈페이지 새로운 소식 또는 디스코드를 확인해주세요.",
        tag: "공지",
        tagColor: "rgba(239, 68, 68, 0.9)", // 빨간색
        author: {
            name: "관리자",
            role: "시스템 관리자",
            img: "./img/hanami-baegyeong-illeoseuteuleisyeon.jpg" // 메인페이지용 경로
        },
        image: "./img/news/Jason_Duval_01.jpg",
        date: "2023-06-13"
    },
    {
        id: 2,
        title: "서버 안정성 개선 및 버그 수정",
        content: "최근 발생한 서버 불안정 문제를 해결하고 여러 버그를 수정했습니다. 플레이어 여러분의 피드백 덕분에 더 나은 서비스를 제공할 수 있게 되었습니다. 앞으로도 지속적인 개선을 위해 노력하겠습니다.",
        tag: "업데이트",
        tagColor: "rgba(34, 197, 94, 0.9)", // 초록색
        author: {
            name: "개발팀",
            role: "개발자",
            img: "./img/hanami-baegyeong-illeoseuteuleisyeon.jpg"
        },
        image: "./img/news/Raul_Bautista_02.jpg",
        date: "2023-06-14"
    },
    {
        id: 3,
        title: "신규 UI 디자인 및 새로운 기능",
        content: `## [2023년 6월 14일] 게임 업데이트 및 패치노트
        안녕하세요. 최신업데이트 및 내용을 안내드립니다. 아래의 변경사항을 확인해주세요.
## 주요업데이트
- 우편시스템이 변경 되었습니다.
-> 채팅 명령어 대신 **ESC > 우편함** UI에서 우편을 더 직관적으로 확인하고 관리할 수 있습니다.


- 크로스헤어 시스템
-> 핸드폰 메뉴가 아닌 **ESC > 크로스헤어**에서 손쉽게 설정하고 미리보기/적용할 수 있습니다.
-> 변경한 크로스헤어는 코드로 복사해 다른 사람과 공유할 수 있습니다.`,
        tag: "업데이트",
        tagColor: "rgba(34, 197, 94, 0.9)", // 초록색
        author: {
            name: "디자인팀",
            role: "UI/UX 디자이너",
            img: "./img/hanami-baegyeong-illeoseuteuleisyeon.jpg"
        },
        image: "./img/news/Jason_Duval_02.jpg",
        date: "2023-06-14"
    },
    {
        id: 4,
        title: "정기 이벤트 및 특별 보상 안내",
        content: "매월 진행되는 정기 이벤트가 시작됩니다! 특별한 보상과 함께 즐거운 시간을 보내세요. 이벤트 기간 동안 다양한 혜택을 받을 수 있습니다. 자세한 내용은 홈페이지 새로운 소식 또는 디스코드를 확인해주세요.",
        tag: "이벤트",
        tagColor: "rgba(245, 158, 11, 0.9)", // 주황색
        author: {
            name: "이벤트팀",
            role: "이벤트 기획자",
            img: "./img/hanami-baegyeong-illeoseuteuleisyeon.jpg"
        },
        image: "./img/news/Jason_Duval_01.jpg",
        date: "2023-06-14"
    },
    {
        id: 5,
        title: "새로운 서버 추가 안내",
        content: "플레이어 증가에 따라 새로운 서버를 추가했습니다. 더 원활한 게임 환경을 제공하기 위해 지속적으로 서버를 확장하고 있습니다. 새로운 서버에서도 즐거운 시간 보내세요!",
        tag: "공지",
        tagColor: "rgba(239, 68, 68, 0.9)", // 빨간색
        author: {
            name: "운영팀",
            role: "서버 운영자",
            img: "./img/hanami-baegyeong-illeoseuteuleisyeon.jpg"
        },
        image: "./img/news/Jason_Duval_04.jpg",
        date: "2023-06-15"
    },
    {
        id: 6,
        title: "보안 업데이트 및 계정 보호 강화",
        content: `## 보안 업데이트 및 계정보호 강화
- 테스트 보안을 강화하기 위한 시스템을 도입 했습니다.
- **2단계 인증** 기능이 도입 되었습니다.`,
        tag: "업데이트",
        tagColor: "rgba(34, 197, 94, 0.9)", // 초록색
        author: {
            name: "보안팀",
            role: "보안 전문가",
            img: "./img/hanami-baegyeong-illeoseuteuleisyeon.jpg"
        },
        image: "./img/news/Jason_Duval_03.jpg",
        date: "2023-06-16"
    }
];
