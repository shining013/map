import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "yunju",
        password: "123",
        username: "츄르",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
    ],
    m_positions: [
      {
        content: "에무시네마",
        address: "종로구",
        detail:
          "서울특별시 종로구 경희궁1가길 7에 위치한 독립·예술영화 전용 상영관. '복합문화공간 에무'라는 이름의 전문예술법인인 사단법인 단체에서 2층과 3층에 각각 1개관씩 운영 중이다.",
      },

      {
        content: "서울아트시네마",
        address: "중구",
        detail:
          "(사)한국시네마테크협의회가 운영하는 시네마테크. 한국영상자료원, 부산시네마테크와 더불어 한국 시네마테크의 중심이라 할 수 있는 곳이다. 한국영상자료원과 더불어 서울에 위치한 시네마테크 중 가장 크고 유명한 곳이기도 하다.",
      },

      {
        content: "허리우드클래식",
        address: "종로구",
        detail:
          "실버영화관은 1969년 서울특별시 종로구 낙원동 낙원상가 4층에 있는 영화관이다. 이전 이름 허리우드로도 잘 알려져 있다",
      },
      {
        content: "아트하우스모모",
        address: "서대문구",
        detail:
          "아트하우스 모모는 국내 최초의 예술영화전용관이었던 동숭씨네마텍, 이후 씨네큐브 광화문, 최초의 대학 내 상설영화관 아트하우스 모모에 이르기까지 우리나라 예술영화계의 선구자 역할을 해온 영화사 백두대간이 운영한다.",
      },
      {
        content: "씨네큐브광화문",
        address: "종로구",
        detail:
          "서울 종로구 새문안로 68 흥국생명빌딩 지하 2층에 소재한 영화관. 2000년 개관해 현존하는 가장 오래된 예술영화관이다.",
      },
      {
        content: "아리랑시네센터",
        address: "성북구",
        detail:
          " 국내 최초 공공영화관으로 출발한 아리랑시네센터는 자치구로서 유일하게 개봉 영화관을 운영하는 곳이다. 미디어센터를 함께 운영하며 지역영상문화 발전을 위한 주민들의 거점 공간으로써 제 역할을 하고 있다.",
      },

      {
        content: "KU시네마테크",
        address: "광진구",
        detail:
          " 건국대학교 예술디자인대학 건물 지하 1층에 위치하고 있는 예술 영화 전용 극장으로 다양한 영화를 지역과 학교 구성원들에게 공유하고자 시작했다. 외부 영화 제작사에서 공간을 임차해 2011년부터 운영하고 있으며, 강의실 바로 옆에 붙어있는 유일한 영화관이기도 하다.",
      },
      {
        content: "인디스페이스",
        address: "마포구",
        detail:
          "인디스페이스(INDIE SPACE)는 대한민국 최초의 독립 영화 전용상영관이다. 한국독립영화협회 독립영화 배급지원센터가 영화진흥위원회의 위탁을 받아 2007년 11월 8일, 서울특별시 중구 저동에 소재해 있던 중앙시네마극장의 3관을 임대하여 개관하였다.",
      },
      {
        content: "아트나인",
        address: "동작구",
        detail:
          "아트나인은 동작구의 대표적인 예술영화관으로 예술영화 상영 이외에 다양한 행사들이 개최되는 장소이다. 두 곳의 상영관 외에 야외테라스에서는 비정기적인 특별 상영이 개최되며 미술전시, 음악공연, 토크 프로그램 등 다양한 문화활동이 이곳에서 이루어진다.",
      },
      {
        content: "필름포럼",
        address: "서대문구",
        detail:
          "필름포럼은 (사)필레마 - 서울국제사랑영화제에서 운영하는 예술영화관이다. 기독교 신앙(Christianity)을 기반으로 삶을 아름답고 풍요롭게 만들어 가는 영화를 선정하여 2개의 영화관(90석, 52석)에서 상영하며, 복합문화공간으로서 카페, 갤러리, 아카데미를 운영하고 있다.",
      },

      {
        content: "더숲 아트시네마",
        address: "노원구",
        detail:
          "서울 노원구 유일의 독립·예술 영화관인 '더숲 아트시네마'는 노원문고가 설계한 문화 복합 공간인 '더숲'의 시네마 브랜드로, 극장뿐만 아니라 아트 갤러리, 카페, 베이커리, 서점, 세미나룸으로 구성돼 있다.",
      },
      {
        content: "낭만극장",
        address: "종로구",
        detail:
          "55세 이상 어르신들을 위한 영화관으로, 멀티플렉스에서 상영하는 최신 영화 대신, 어르신들이 젊은 시절에 봤거나 현재까지도 회자되고 있는 고전 영화들이 상영된다. 쉬는 날 없이 365일 운영되고, 보통 3~4일씩마다 상영하는 영화를 변경하는 방식으로 운영되고 있다.",
      },

      {
        content: "한국영상자료원",
        address: "마포구",
        detail:
          "시네마테크KOFA에서는 국내외 고전, 예술, 독립영화를 상영하고 있으며, 한국영화박물관에서는 한국영화의 지난 역사를 직접 체험할 수 있다. 영상도서관에서는 국내 최대 규모의 영화 자료들을 열람할 수 있다. 그 외 연구발간사업, 찾아가는 영화관을 진행하고 있으며, 한국고전영화 VOD 등 다양한 온라인 서비스를 운영하고 있다.",
      },
    ],
    restaurantData: {
      종로구: [
        {
          name: "The Gourmet Bistro",
          description: "A cozy place offering fine dining and wine pairing.",
          image: "https://example.com/restaurant1.jpg",
        },
        {
          name: "Sushi Master",
          description:
            "Authentic sushi with fresh, locally sourced ingredients.",
          image: "https://example.com/restaurant2.jpg",
        },
      ],
      용산구: [
        {
          name: "Pasta Palace",
          description: "Traditional Italian pasta with a modern twist.",
          image: "https://example.com/restaurant3.jpg",
        },
        {
          name: "Burger Haven",
          description: "Gourmet burgers with a variety of toppings.",
          image: "https://example.com/restaurant4.jpg",
        },
      ],
      // 추가 지역 데이터
    },
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    deleteUser(state, index) {
      if (index !== -1) {
        state.userData.splice(index, 1);
      }
    },
    addTheater(state, payload) {
      state.m_positions.push(payload);
    },
  },
});
