<script setup>
import Paper from './Paper.vue'
import Scissors from './Scissors.vue'
import Rock from './Rock.vue'
import { FIGURES } from '../constants'

const emit = defineEmits(['userPicked'])
</script>

<template>
  <div
    class="
      flex
      h-full
      flex-col
      justify-between
      bg-[url(./assets/images/bg-triangle.svg)]
      bg-[length:220px]
      bg-center bg-no-repeat
      tablet:bg-[length:230px]
    "
  >
    <div class="flex justify-between">
      <Paper @click="emit('userPicked', FIGURES.PAPER)" />
      <Scissors @click="emit('userPicked', FIGURES.SCISSORS)" />
    </div>
    <div class="flex justify-center">
      <Rock @click="emit('userPicked', FIGURES.ROCK)" />
    </div>
  </div>
</template>
