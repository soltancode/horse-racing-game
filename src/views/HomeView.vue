<script setup>
import { ref, onMounted } from 'vue';

const horses = ref([
  { name: 'Thunder Bolt', condition: 85, color: 'Black', start: 0 },
  { name: 'Lightning Strike', condition: 90, color: 'White', start: 0 },
  { name: 'Shadow Dancer', condition: 78, color: 'Brown', start: 0 },
  { name: 'Storm Chaser', condition: 88, color: 'Gray', start: 0 },
  { name: 'Fire Hoof', condition: 82, color: 'Red', start: 0 },
  { name: 'Silver Mane', condition: 79, color: 'Silver', start: 0 },
  { name: 'Golden Star', condition: 91, color: 'Gold', start: 0 },
  { name: 'Midnight Runner', condition: 86, color: 'Dark Blue', start: 0 },
  { name: 'Blazing Comet', condition: 83, color: 'Orange', start: 0 },
  { name: 'Wind Spirit', condition: 87, color: 'White', start: 0 },
  { name: 'Ocean Breeze', condition: 76, color: 'Blue', start: 0 },
  { name: 'Emerald Dash', condition: 89, color: 'Green', start: 0 },
  { name: 'Copper Thunder', condition: 84, color: 'Copper', start: 0 },
  { name: 'Ivory Whisper', condition: 77, color: 'Ivory', start: 0 },
  { name: 'Desert Mirage', condition: 80, color: 'Sand', start: 0 },
  { name: 'Steel Charger', condition: 92, color: 'Steel', start: 0 },
  { name: 'Crimson Blaze', condition: 81, color: 'Crimson', start: 0 },
  { name: 'Frostbite', condition: 75, color: 'Ice Blue', start: 0 },
  { name: 'Titan Gallop', condition: 93, color: 'Dark Gray', start: 0 },
  { name: 'Velvet Storm', condition: 82, color: 'Purple', start: 0 },
]);

const selectedTenHorses = ref([
  { name: 'Thunder Bolt', condition: 85, color: 'Black', start: 0 },
  { name: 'Lightning Strike', condition: 90, color: 'White', start: 0 },
  { name: 'Shadow Dancer', condition: 78, color: 'Brown', start: 0 },
  { name: 'Storm Chaser', condition: 88, color: 'Gray', start: 0 },
  { name: 'Fire Hoof', condition: 82, color: 'Red', start: 0 },
  { name: 'Silver Mane', condition: 79, color: 'Silver', start: 0 },
  { name: 'Golden Star', condition: 91, color: 'Gold', start: 0 },
  { name: 'Midnight Runner', condition: 86, color: 'Dark Blue', start: 0 },
  { name: 'Blazing Comet', condition: 83, color: 'Orange', start: 0 },
  { name: 'Wind Spirit', condition: 87, color: 'White', start: 0 }
]);

onMounted(() => {
  console.log('HomeView mounted')
})
</script>

<template>
  <main>
    <div class="mx-auto max-w-7xl p-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="grid grid-cols-5 gap-5 w-full">
        <div class="col-span-1 overflow-scroll bg-gray-50 py-3 px-2 rounded-lg">
          <span class="font-semibold text-xl">Horse List</span>
          <div class="horse-list overflow-y-scroll">
            <table class="min-w-full divide-y divide-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="text-left py-2 text-xs font-semibold text-gray-900">Name</th>
                  <th class="text-left py-2 text-xs font-semibold text-gray-900">Condition</th>
                  <th class="text-left py-2 text-xs font-semibold text-gray-900">Color</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="(horse, index) in horses" :key="index">
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">{{ horse.name }}</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">{{ horse.condition }}</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">{{ horse.color }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-span-2 bg-blue-50 p-4 rounded-lg">
          <span class="font-semibold text-xl">Running Horses</span>
          <div class="mt-4 space-y-4">
            <div v-for="(horse, index) in selectedTenHorses" :key="index" class="flex border">
              <div class="bg-green-800 w-10 text-center text-white -rotate-90 flex items-center justify-center">{{ index + 1 }}</div>
              <div class="relative w-full h-9.5 flex items-center justify-center">
                <div class="border-t-orange-400 flex items-center absolute"
                  :style="{ top: `0`, left: `${horse.start}%` }">
                  <img src="/horse/1.png" alt="Horse" class="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="grid grid-cols-2">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
