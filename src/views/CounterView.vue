<template>
  <div class="text-center p-6">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Counter App</div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <button
          @click="decrementCount"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <h1 class="p-4">{{ counter }}</h1>
        <button
          @click="incrementCount"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// export default {
// setup() {
const counter = ref(0);

function incrementCount() {
  counter.value++;
}

function decrementCount() {
  counter.value--;
}

// return { counter, incrementCount, decrementCount };
// },
// };
</script>
