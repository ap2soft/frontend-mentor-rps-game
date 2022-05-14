<script setup>
import { ref, onMounted } from '@vue/runtime-core'
import Paper from './Paper.vue'
import Scissors from './Scissors.vue'
import Rock from './Rock.vue'
import Result from './Result.vue'
import { FIGURES, FIGURES_POWER, RESULTS } from '../constants'

const props = defineProps(['userChoice'])

const emit = defineEmits(['theHousePicked'])

const theHouseChoice = ref()

const getRandomFigure = () => {
  const figures = Object.keys(FIGURES)
  return FIGURES[figures[Math.floor(figures.length * Math.random())]]
}

const delay = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

onMounted(async () => {
  await delay(500)
  theHouseChoice.value = getRandomFigure()

  await delay(500)
  emit('theHousePicked', theHouseChoice.value)
})
</script>

<template>
  <div class="flex justify-between">
    <div class="flex flex-col items-center gap-6">
      <Paper v-if="userChoice === FIGURES.PAPER" />
      <Scissors v-if="userChoice === FIGURES.SCISSORS" />
      <Rock v-if="userChoice === FIGURES.ROCK" />
      <span class="text-white uppercase text-sm font-bold tracking-widest">
        You Picked
      </span>
    </div>
    <div class="flex flex-col items-center gap-6">
      <div
        v-if="!theHouseChoice"
        class="
          w-28
          h-28
          rounded-full
          bg-gradient-to-b
          from-[#1a2946]
          to-[#192744]
        "
      ></div>
      <template v-else>
        <Paper v-if="theHouseChoice === FIGURES.PAPER" />
        <Scissors v-if="theHouseChoice === FIGURES.SCISSORS" />
        <Rock v-if="theHouseChoice === FIGURES.ROCK" />
      </template>
      <span class="text-white uppercase text-sm font-bold tracking-widest">
        The House Picked
      </span>
    </div>
  </div>
</template>
