<script setup>
const props = defineProps([
  'gradientColors',
  'shadowColors',
  'iconPath',
  'altText',
])
</script>

<template>
  <div
    class="h-28 w-28 rounded-full bg-gradient-to-b p-3 shadow-bottom tablet:h-40 tablet:w-40 tablet:p-5"
    :class="`${gradientColors} ${shadowColors}`"
  >
    <div
      class="grid h-full w-full place-content-center rounded-full bg-gradient-to-b from-[#dadada] to-[#f2f2f2] p-6 shadow-top shadow-[#babed2] tablet:p-2"
    >
      <img :src="iconPath" :alt="altText" class="h-10 tablet:h-16" />
    </div>
  </div>
</template>
