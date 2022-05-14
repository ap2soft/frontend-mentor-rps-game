<script setup>
import TheHeader from './TheHeader.vue'
import TheRules from './TheRules.vue'
import Paper from './Paper.vue'
import Scissors from './Scissors.vue'
import Rock from './Rock.vue'
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
      <div
        class="
          flex
          h-full
          flex-col
          justify-between
          bg-[url(images/bg-triangle.svg)]
          bg-[length:180px]
          bg-center bg-no-repeat
          tablet:bg-[length:230px]
        "
      >
        <div class="flex justify-between">
          <Paper />
          <Scissors />
        </div>
        <div class="flex justify-center">
          <Rock />
        </div>
      </div>
    </main>

    <TheRules class="tablet:absolute tablet:right-10 tablet:bottom-10" />
  </div>
</template>
