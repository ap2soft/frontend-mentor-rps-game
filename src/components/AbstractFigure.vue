<script setup>
</script>

<template>
  <button
    class="
      group
      h-28
      w-28
      rounded-full
      bg-gradient-to-b
      p-3
      shadow-[0_4px_0_0_rgba(0,0,0,0.3)]
      focus:outline-none focus:ring-4 focus:ring-white/50
      tablet:h-40 tablet:w-40 tablet:p-5
    "
  >
    <div
      class="
        grid
        h-full
        w-full
        place-content-center
        rounded-full
        bg-white bg-gradient-to-b
        from-[#dadada]
        to-[#f2f2f2]
        p-6
        shadow-[0_4px_0_0_rgba(0,0,0,0.3)_inset]
        shadow-[#babed2]
        transition
        group-hover:bg-none
        tablet:p-2
      "
    >
      <div class="h-10 tablet:h-16">
        <slot></slot>
      </div>
    </div>
  </button>
</template>
