<template>
  <div>영화관 {{ moveLat }} / {{ moveLng }}</div>
  <div id="map" style="width: 500px; height: 400px"></div>

  {{ latitude }}{{ longitude }}
</template>

<script setup>
import { onMounted, ref } from "vue";

const latitude = ref(0);
const longitude = ref(0);

const moveLat = ref(0);
const moveLng = ref(0);

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);

      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      //   initMap();

      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=05222ace53571c8fbb636c91def0fbc2";
        document.head.appendChild(script);
      }
    },
    (err) => {
      alert(err.message);
    }
  );
});

const initMap = () => {
  const container = document.getElementById("map");
  let options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  let map = new kakao.maps.Map(container, options);
  var imageSrc = "src/assets/image/marker-home.png",
    imageSize = new kakao.maps.Size(20, 20),
    imageOption = { offset: new kakao.maps.Point(27, 69) };

  var markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );
  var markerPosition = new kakao.maps.LatLng(latitude.value, longitude.value);
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  //영화관 마커 생성
  var m_imageSrc = "src/assets/image/marker-movie.png",
    m_imageSize = new kakao.maps.Size(20, 20),
    m_imageOption = { offset: new kakao.maps.Point(27, 69) };

  var m_markerImage = new kakao.maps.MarkerImage(
    m_imageSrc,
    m_imageSize,
    m_imageOption
  );

  var positions = [
    {
      content: "<div>에무시네마</div>",
      latlng: new kakao.maps.LatLng(37.5720343, 126.9689848),
    },
    {
      content: "<div>광주극장</div>",
      latlng: new kakao.maps.LatLng(35.1497968, 126.9124823),
    },
    {
      content: "<div>영화공간주안</div>",
      latlng: new kakao.maps.LatLng(37.4612786, 126.6806186),
    },
    {
      content: "<div>서울아트시네마</div>",
      latlng: new kakao.maps.LatLng(37.568038, 126.9695876),
    },
    {
      content: "<div>동성아트홀</div>",
      latlng: new kakao.maps.LatLng(35.87294139999999, 128.5956032),
    },
    {
      content: "<div>대전아트시네마</div>",
      latlng: new kakao.maps.LatLng(36.3301374, 127.4304045),
    },
    {
      content: "<div>허리우드클래식</div>",
      latlng: new kakao.maps.LatLng(37.5728323, 126.9880012),
    },
    {
      content: "<div>아트하우스모모</div>",
      latlng: new kakao.maps.LatLng(37.5618588, 126.9468339),
    },
    {
      content: "<div>안동중앙시네마</div>",
      latlng: new kakao.maps.LatLng(36.5651365, 128.7307581),
    },
    {
      content: "<div>씨네큐브광화문</div>",
      latlng: new kakao.maps.LatLng(37.5697279, 126.9722881),
    },
    {
      content: "<div>아리랑시네센터</div>",
      latlng: new kakao.maps.LatLng(37.6002383, 127.0139101),
    },
    {
      content: "<div>한국만화영상진흥원</div>",
      latlng: new kakao.maps.LatLng(37.50804333136266, 126.74241663631446),
    },
    {
      content: "<div>전주디지털독립영화관</div>",
      latlng: new kakao.maps.LatLng(35.8183495, 127.1425492),
    },
    {
      content: "<div>영화의전당</div>",
      latlng: new kakao.maps.LatLng(35.1711778, 129.1271956),
    },
    {
      content: "<div>KU시네마테크</div>",
      latlng: new kakao.maps.LatLng(37.5428904, 127.07307),
    },
    {
      content: "<div>강릉독립예술극장 신영</div>",
      latlng: new kakao.maps.LatLng(37.7547766, 128.8966642),
    },
    {
      content: "<div>인디스페이스</div>",
      latlng: new kakao.maps.LatLng(37.5571917, 126.9247586),
    },
    {
      content: "<div>명화극장</div>",
      latlng: new kakao.maps.LatLng(37.3170386192931, 126.83901596148677),
    },
    {
      content: "<div>아트나인</div>",
      latlng: new kakao.maps.LatLng(37.4847606, 126.9815207),
    },
    {
      content: "<div>필름포럼</div>",
      latlng: new kakao.maps.LatLng(37.5637568, 126.9441118),
    },
    {
      content: "<div>씨네아트 리좀</div>",
      latlng: new kakao.maps.LatLng(35.2059248, 128.5758217),
    },
    {
      content: "<div>대구독립영화전용관 오오극장</div>",
      latlng: new kakao.maps.LatLng(35.8706599, 128.5894435),
    },
    {
      content: "<div>인디플러스 천안</div>",
      latlng: new kakao.maps.LatLng(36.8086466, 127.1522022),
    },
    {
      content: "<div>인디플러스 포항</div>",
      latlng: new kakao.maps.LatLng(36.0409313, 129.3672296),
    },
    {
      content: "<div>더숲 아트시네마</div>",
      latlng: new kakao.maps.LatLng(37.6541596, 127.0614397),
    },
    {
      content: "<div>헤이리시네마</div>",
      latlng: new kakao.maps.LatLng(37.7914952, 126.699043),
    },
    {
      content: "<div>광주독립영화관</div>",
      latlng: new kakao.maps.LatLng(35.1468924, 126.9222947),
    },
    {
      content: "<div>낭만극장</div>",
      latlng: new kakao.maps.LatLng(37.573010846738704, 126.98790458732097),
    },
    {
      content: "<div>천안인생극장</div>",
      latlng: new kakao.maps.LatLng(36.8071489, 127.1520208),
    },
    {
      content: "<div>밀크북 바이 모노플렉스</div>",
      latlng: new kakao.maps.LatLng(37.7073321, 126.6875682),
    },
    {
      content: "<div>한국영상자료원</div>",
      latlng: new kakao.maps.LatLng(37.5804117, 126.8899473),
    },
  ];
  // 마커가 지도 위에 표시되도록 설정합니다

  for (var i = 0; i < positions.length; i++) {
    var m_marker = new kakao.maps.Marker({
      map: map,
      image: m_markerImage,
      position: positions[i].latlng,
    });

    var infowindow = new kakao.maps.InfoWindow({
      content: positions[i].content,
    });

    kakao.maps.event.addListener(
      m_marker,
      "mouseover",
      makeOverListener(map, m_marker, infowindow)
    );
    kakao.maps.event.addListener(
      m_marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }

  function makeOverListener(map, m_marker, infowindow) {
    return function () {
      infowindow.open(map, m_marker);
    };
  }

  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }
  //지도 중심좌표
  kakao.maps.event.addListener(map, "center_changed", function () {
    var latlng = map.getCenter();

    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
  marker.setMap(map);
};
</script>

<style lang="scss" scoped></style>
