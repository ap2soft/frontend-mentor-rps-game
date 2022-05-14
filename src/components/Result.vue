<script setup>
import { ref } from 'vue'
import { FIGURES_POWER, RESULTS } from '../constants'

const props = defineProps(['userChoice', 'theHouseChoice'])
const emit = defineEmits(['restart'])

let result = ref()
if (props.userChoice === props.theHouseChoice) {
  result.value === RESULTS.DRAW
} else {
  result.value =
    FIGURES_POWER[props.userChoice].winsAgainst === props.theHouseChoice
      ? RESULTS.WIN
      : RESULTS.LOSE
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="font-bold text-white uppercase text-5xl">
      <span v-if="result === RESULTS.WIN">You Win</span>
      <span v-else-if="result === RESULTS.LOSE">You Lose</span>
      <span v-else>Draw</span>
    </div>
    <div class="mt-6">
      <button
        class="
          uppercase
          tracking-widest
          bg-white
          rounded-md
          text-black
          py-2
          px-10
        "
        @click="emit('restart')"
      >
        Play Again
      </button>
    </div>
  </div>
</template>
