<script setup>
const emit = defineEmits(['close'])
</script>

<template>
  <button
    @click="emit('close')"
    class="text-dark/25 transition hover:text-dark/100"
  >
    <svg width="20" height="20">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
      />
    </svg>
  </button>
</template>
