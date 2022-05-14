<script setup></script>

<template>
  <header
    class="
      flex
      items-center
      justify-between
      rounded-md
      border-3 border-header-outline
      p-2
      tablet:px-5
    "
  >
    <div class="p-3">
      <img src="/images/logo.svg" alt="Logo" class="h-12 tablet:h-24" />
    </div>
    <div
      class="
        flex flex-col
        justify-center
        rounded-md
        bg-white
        py-1.5
        px-6
        text-center
        tablet:py-3 tablet:px-10
      "
    >
      <span
        class="text-2xs uppercase tracking-widest text-score tablet:text-xs"
      >
        Score
      </span>
      <span class="text-4xl font-bold text-dark tablet:text-6xl">12</span>
    </div>
  </header>
</template>
