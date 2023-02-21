<script setup>
import { ref, onMounted } from 'vue'
defineProps({ text: String })
</script>

<template>
  <li class="flex gap-2 items-center">
    <input type="checkbox" id="checkbox1"
      class="peer relative h-4 w-4 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-blue-500 focus:outline-none" />
    <label for="checkbox1" class="w-full cursor-pointer text-black peer-checked:font-bold">
      Do
      Something for 1 hour
    </label>
  </li>
</template>