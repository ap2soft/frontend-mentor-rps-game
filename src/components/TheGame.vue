<script setup>
import { ref } from '@vue/reactivity'
import TheHeader from './TheHeader.vue'
import TheRules from './TheRules.vue'
import StepOne from './StepOne.vue'
import StepTwo from './StepTwo.vue'
import Result from './Result.vue'
import { FIGURES } from '../constants'

const userChoice = ref()
const theHouseChoice = ref()
const result = ref()

const handleRestart = () => {
  userChoice.value = null
  theHouseChoice.value = null
  result.value = null
}
</script>

<template>
  <div
    class="
      mx-auto
      flex
      h-full
      max-w-sm
      flex-col
      justify-between
      p-8
      tablet:max-w-3xl tablet:justify-start
    "
  >
    <TheHeader />

    <main class="flex-grow py-20 tablet:px-36">
      <StepOne v-if="!userChoice" @user-picked="userChoice = $event" />
      <StepTwo
        v-if="userChoice"
        :user-choice="userChoice"
        @the-house-picked="theHouseChoice = $event"
      />
      <Result
        v-if="userChoice && theHouseChoice"
        class="mt-8"
        :user-choice="userChoice"
        :the-house-choice="theHouseChoice"
        @restart="handleRestart"
      />
    </main>

    <TheRules class="tablet:absolute tablet:right-10 tablet:bottom-10" />
  </div>
</template>
