<script setup lang="ts">
import { rand } from '@vueuse/shared'
import { computed, ref } from 'vue'
import { useArrayChunked } from '.'

const inputList = ref('')
const inputSize = ref(2)

const list = computed(() => inputList.value.split(','))
const chunked = useArrayChunked(list, inputSize)

const random = () => {
  const arr = []
  for (let i = 0; i < rand(10, 20); i++)
    arr.push(rand(0, 100))

  inputList.value = arr.join(',')
}
</script>

<template>
  <div>
    <div class="flex flex-col">
      <label for="list" class="w-1/4">List</label>
      <input id="list" v-model="inputList" class="w-3/4" type="text">
    </div>
    <div class="flex flex-col">
      <label for="size" class="w-1/4">Size</label>
      <input id="size" v-model="inputSize" class="w-3/4" type="number">
    </div>
    <div>
      <button @click="random">
        random
      </button>
    </div>

    <div class="mt-5 flex flex-col">
      <span>Chunked</span>
      <code>{{ chunked }}</code>
    </div>
  </div>
</template>
