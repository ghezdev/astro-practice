<script setup>
import { ref, onMounted } from 'vue'
import CheckBox from './CheckBox.vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}
</script>

<template>
  <div className="bg-red-500">
    <p className="font-bold">Mapas</p>
    <ul>
      <CheckBox text="Mapa 1" />
      <CheckBox text="Mapa 2" />
      <CheckBox text="Mapa 3" />
    </ul>
    <!-- <p className="font-bold">Orden</p>
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
      <li>d</li>
    </ul>
    <p className="font-bold">Limite</p>
    <input /> -->
  </div>
</template>