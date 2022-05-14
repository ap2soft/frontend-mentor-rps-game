<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import RulesCloseButton from './RulesCloseButton.vue'

const isOpen = ref(false)
</script>

<template>
  <button
    class="
      self-center
      rounded-md
      border-2 border-white/60
      px-8
      py-2
      text-sm
      uppercase
      tracking-widest
      text-white
      transition
      hover:border-white
      focus:outline-none focus:ring focus:ring-white/25
    "
    @click="isOpen = true"
    v-bind="$attrs"
  >
    Rules
  </button>
  <TransitionRoot
    :show="isOpen"
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <Dialog @close="isOpen = false">
      <div class="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div class="fixed inset-0 flex items-center justify-center">
        <DialogPanel
          class="h-full w-full bg-white tablet:h-auto tablet:max-w-sm"
        >
          <div
            class="
              flex
              h-full
              flex-col
              items-center
              justify-between
              py-24
              tablet:py-8
            "
          >
            <DialogTitle
              class="
                tablet:flex
                tablet:w-full
                tablet:items-center
                tablet:justify-between
                px-8
              "
            >
              <h3 class="text-2xl font-bold uppercase text-dark">Rules</h3>
              <RulesCloseButton
                @close="isOpen = false"
                class="hidden tablet:inline-block"
                initialFocus
              />
            </DialogTitle>
            <img
              src="/images/image-rules.svg"
              alt="Rules"
              class="py-10 tablet:pb-0"
            />
            <RulesCloseButton
              @close="isOpen = false"
              class="tablet:hidden"
              initialFocus
            />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
