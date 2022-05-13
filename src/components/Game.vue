<script setup>
import Header from './Header.vue'
import Rules from './Rules.vue'
import Paper from './Paper.vue'
import Scissors from './Scissors.vue'
import Rock from './Rock.vue'
</script>

<template>
  <div
    class="mx-auto flex h-full max-w-2xl flex-col justify-between p-8 tablet:justify-start tablet:gap-28"
  >
    <Header />

    <div
      class="relative mx-auto h-52 w-52 bg-triangle bg-contain bg-center bg-no-repeat tablet:h-64 tablet:w-64"
    >
      <Paper class="absolute -left-10 -top-8 tablet:-left-16 tablet:-top-16" />
      <Scissors
        class="absolute -right-10 -top-8 tablet:-right-16 tablet:-top-16"
      />
      <Rock
        class="absolute left-1/2 -bottom-8 -translate-x-1/2 tablet:-bottom-12"
      />
    </div>

    <Rules class="tablet:absolute right-10 bottom-10" />
  </div>
</template>
