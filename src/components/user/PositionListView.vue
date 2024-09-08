<template>
  <div><h4>theater list</h4></div>
  <div class="scrollable-container">
    <div
      v-for="(item, i) in $store.state.m_positions"
      :key="i"
      class="d-flex gap-2 mb-3 scroll-item"
    >
      <div class="btn" @click="selectTheater(item)">
        <h5 class="mb-0">{{ item.content }}</h5>
        <p class="mb-0">{{ item.address }}</p>
      </div>
    </div>
  </div>

  <div v-if="selectedTheater" class="theater-details">
    <p>{{ selectedTheater.detail }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTheater = ref(null);

const selectTheater = (item) => {
  selectedTheater.value = item;
};
</script>

<style lang="scss" scoped>
.scrollable-container {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}

.mb-0 {
  font-size: 20px;
}
.theater-details {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}
</style>
