<template>
  <div class="restaurant-slider">
    <h3>restaurant</h3>

    <!-- 지역 선택 드롭다운 -->
    <select v-model="selectedRegion" @change="updateRestaurants">
      <option v-for="region in regions" :key="region" :value="region">
        {{ region }}
      </option>
    </select>

    <!-- 슬라이드 -->
    <swiper
      v-if="currentRestaurants.length"
      :slides-per-view="1"
      :space-between="10"
      :pagination="{ clickable: true }"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(restaurant, i) in currentRestaurants"
        :key="i"
        class="restaurant-slide"
      >
        <div class="card">
          <div class="card-body">
            <h5>{{ restaurant.name }}</h5>
            <p>{{ restaurant.description }}</p>
          </div>
        </div>
      </swiper-slide>

      <!-- Pagination & Navigation -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

// 지역별 맛집 데이터
const restaurantData = {
  종로구: [
    {
      name: "The Gourmet Bistro",
      description: "A cozy place offering fine dining and wine pairing.",
    },
    {
      name: "Sushi Master",
      description: "Authentic sushi with fresh, locally sourced ingredients.",
    },
    {
      name: "Cafe Delight",
      description: "Charming cafe with a variety of pastries and coffees.",
    },
    {
      name: "Bistro Bella",
      description: "Italian bistro known for its pizza and pasta.",
      image: "https://example.com/restaurant4.jpg",
    },
    {
      name: "Steakhouse Supreme",
      description: "Premium steaks and a selection of fine wines.",
    },
    {
      name: "Vegan Bistro",
      description: "Delicious vegan dishes and creative plant-based meals.",
    },
    {
      name: "Seafood Shack",
      description: "Fresh seafood dishes with a casual atmosphere.",
    },
    {
      name: "Dessert Haven",
      description: "Delectable desserts and sweet treats.",
    },
  ],
  광진구: [
    {
      name: "Korean BBQ King",
      description: "Authentic Korean BBQ with a wide range of meats.",
    },
    {
      name: "Dim Sum Delight",
      description: "Delicious dim sum with various fillings.",
    },
    {
      name: "Modern Bistro",
      description: "Contemporary dishes with a fusion twist.",
    },
    {
      name: "Ramen Express",
      description: "Quick and tasty ramen dishes.",
    },
    {
      name: "Indian Spice",
      description: "Flavorful Indian curries and spices.",
    },
    {
      name: "Mexican Fiesta",
      description: "Vibrant Mexican dishes with bold flavors.",
    },
    {
      name: "Thai Garden",
      description: "Traditional Thai dishes in a garden setting.",
    },
    {
      name: "French Bistro",
      description: "Classic French cuisine with a modern touch.",
    },
  ],
  중구: [
    {
      name: "Korean BBQ King",
      description: "Authentic Korean BBQ with a wide range of meats.",
    },
    {
      name: "Dim Sum Delight",
      description: "Delicious dim sum with various fillings.",
    },
    {
      name: "Modern Bistro",
      description: "Contemporary dishes with a fusion twist.",
    },
    {
      name: "Ramen Express",
      description: "Quick and tasty ramen dishes.",
    },
    {
      name: "Indian Spice",
      description: "Flavorful Indian curries and spices.",
    },
    {
      name: "Mexican Fiesta",
      description: "Vibrant Mexican dishes with bold flavors.",
    },
    {
      name: "Thai Garden",
      description: "Traditional Thai dishes in a garden setting.",
    },
    {
      name: "French Bistro",
      description: "Classic French cuisine with a modern touch.",
    },
  ],
  서대문구: [
    {
      name: "Korean BBQ King",
      description: "Authentic Korean BBQ with a wide range of meats.",
    },
    {
      name: "Dim Sum Delight",
      description: "Delicious dim sum with various fillings.",
    },
    {
      name: "Modern Bistro",
      description: "Contemporary dishes with a fusion twist.",
    },
    {
      name: "Ramen Express",
      description: "Quick and tasty ramen dishes.",
    },
    {
      name: "Indian Spice",
      description: "Flavorful Indian curries and spices.",
    },
    {
      name: "Mexican Fiesta",
      description: "Vibrant Mexican dishes with bold flavors.",
    },
    {
      name: "Thai Garden",
      description: "Traditional Thai dishes in a garden setting.",
    },
    {
      name: "French Bistro",
      description: "Classic French cuisine with a modern touch.",
    },
  ],
  성북구: [
    {
      name: "Korean BBQ King",
      description: "Authentic Korean BBQ with a wide range of meats.",
    },
    {
      name: "Dim Sum Delight",
      description: "Delicious dim sum with various fillings.",
    },
    {
      name: "Modern Bistro",
      description: "Contemporary dishes with a fusion twist.",
    },
    {
      name: "Ramen Express",
      description: "Quick and tasty ramen dishes.",
    },
    {
      name: "Indian Spice",
      description: "Flavorful Indian curries and spices.",
    },
    {
      name: "Mexican Fiesta",
      description: "Vibrant Mexican dishes with bold flavors.",
    },
    {
      name: "Thai Garden",
      description: "Traditional Thai dishes in a garden setting.",
    },
    {
      name: "French Bistro",
      description: "Classic French cuisine with a modern touch.",
    },
  ],
  마포구: [
    {
      name: "Korean BBQ King",
      description: "Authentic Korean BBQ with a wide range of meats.",
    },
    {
      name: "Dim Sum Delight",
      description: "Delicious dim sum with various fillings.",
    },
    {
      name: "Modern Bistro",
      description: "Contemporary dishes with a fusion twist.",
    },
    {
      name: "Ramen Express",
      description: "Quick and tasty ramen dishes.",
    },
    {
      name: "Indian Spice",
      description: "Flavorful Indian curries and spices.",
    },
    {
      name: "Mexican Fiesta",
      description: "Vibrant Mexican dishes with bold flavors.",
    },
    {
      name: "Thai Garden",
      description: "Traditional Thai dishes in a garden setting.",
    },
    {
      name: "French Bistro",
      description: "Classic French cuisine with a modern touch.",
    },
  ],
  동작구: [
    {
      name: "Korean BBQ King",
      description: "Authentic Korean BBQ with a wide range of meats.",
    },
    {
      name: "Dim Sum Delight",
      description: "Delicious dim sum with various fillings.",
    },
    {
      name: "Modern Bistro",
      description: "Contemporary dishes with a fusion twist.",
    },
    {
      name: "Ramen Express",
      description: "Quick and tasty ramen dishes.",
    },
    {
      name: "Indian Spice",
      description: "Flavorful Indian curries and spices.",
    },
    {
      name: "Mexican Fiesta",
      description: "Vibrant Mexican dishes with bold flavors.",
    },
    {
      name: "Thai Garden",
      description: "Traditional Thai dishes in a garden setting.",
    },
    {
      name: "French Bistro",
      description: "Classic French cuisine with a modern touch.",
    },
  ],
  노원구: [
    {
      name: "Korean BBQ King",
      description: "Authentic Korean BBQ with a wide range of meats.",
    },
    {
      name: "Dim Sum Delight",
      description: "Delicious dim sum with various fillings.",
    },
    {
      name: "Modern Bistro",
      description: "Contemporary dishes with a fusion twist.",
    },
    {
      name: "Ramen Express",
      description: "Quick and tasty ramen dishes.",
    },
    {
      name: "Indian Spice",
      description: "Flavorful Indian curries and spices.",
    },
    {
      name: "Mexican Fiesta",
      description: "Vibrant Mexican dishes with bold flavors.",
    },
    {
      name: "Thai Garden",
      description: "Traditional Thai dishes in a garden setting.",
    },
    {
      name: "French Bistro",
      description: "Classic French cuisine with a modern touch.",
    },
  ],
  // 다른 지역 데이터도 추가 가능
};

// 상태 관리
const selectedRegion = ref("종로구");
const currentRestaurants = computed(
  () => restaurantData[selectedRegion.value] || []
);
const regions = Object.keys(restaurantData);

// 지역 변경 시 슬라이드 업데이트
const updateRestaurants = () => {
  currentRestaurants.value = restaurantData[selectedRegion.value] || [];
};

// Watcher로 지역 변경 감지
watch(selectedRegion, updateRestaurants, { immediate: true });
</script>

<style scoped>
.restaurant-slider {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.restaurant-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 10px;
}

h4 {
  margin: 0;
  font-size: 18px;
}
</style>
