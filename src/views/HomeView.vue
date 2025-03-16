<script setup>
import { ref } from 'vue';
import { useRaceStore } from '@/stores/raceStore.js';

const raceStore = useRaceStore();

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
</script>

<template>
  <main>
    <div class="mx-auto max-w-7xl p-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="grid grid-cols-5 gap-y-5 gap-x-4 w-full">
        <div class="col-span-1 overflow-scroll bg-gray-50 py-3 px-2 rounded-lg">
          <span class="font-semibold text-lg">Horse List <span class="text-xs">(1 - 20)</span></span>
          <div class="horse-list overflow-y-scroll">
            <table class="min-w-full divide-y divide-gray-300 mt-3">
              <thead>
                <tr>
                  <th class="text-left py-2 text-xs font-semibold text-gray-900">Name</th>
                  <th class="text-center py-2 text-xs font-semibold text-gray-900">Condition</th>
                  <th class="text-center py-2 text-xs font-semibold text-gray-900">Color</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="(horse, index) in raceStore.horses" :key="index">
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">{{ horse.name }}</td>
                  <td class="whitespace-nowrap py-2 text-center text-xs text-gray-500">{{ horse.condition }}</td>
                  <td class="whitespace-nowrap py-2 text-center text-xs text-gray-500">{{ horse.color }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-span-2 bg-blue-50 p-4 rounded-lg">
          <span class="font-semibold text-lg">Running Horses</span>
          <div class="mt-3 space-y-4">
            <div v-for="(horse, index) in selectedTenHorses" :key="index" class="flex border">
              <div class="bg-green-800 w-10 text-center text-white -rotate-90 flex items-center justify-center">{{ index
                + 1 }}</div>
              <div class="relative w-full h-9.5 flex items-center justify-center">
                <div class="border-t-orange-400 flex items-center absolute"
                  :style="{ top: `0`, left: `${horse.start}%` }">
                  <img src="/horse/1.png" alt="Horse" class="w-10 h-10" />
                </div>
              </div>
            </div>
            <div class="flex justify-between font-semibold text-red-500">
              <span>{{ raceStore.rounds[raceStore.currentRound].round }}st. Lap {{
                raceStore.rounds[raceStore.currentRound].distance }}m</span>
              <span class="uppercase">Finish</span>
            </div>
          </div>
        </div>
        <div class="col-span-1 bg-gray-50 p-4 rounded-lg horse-list overflow-scroll">
          <span class="font-semibold text-lg">Program</span>
          <div v-for="(round, index) in raceStore.rounds" :key="index"
            class="overflow-y-scroll pt-2 pb-1 mt-3 border-dotted border-t">
            <div class="text-red-400 text-xs font-semibold py-1 flex justify-between"><span>{{ round.round }}ST
                Lap</span>
              <span>{{ round.distance }}m</span>
            </div>
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th class="text-left py-2 text-xs font-semibold text-gray-900">Position</th>
                  <th class="text-right py-2 text-xs font-semibold text-gray-900">Name</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="(horse, horseIndex) in round.selectedHorses" :key="horseIndex">
                  <td class="whitespace-nowrap py-0.5 text-left text-xs text-gray-500">{{ index + 1 }}</td>
                  <td class="whitespace-nowrap py-0.5 text-right text-xs font-medium text-gray-900">{{ horse.name }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-span-1 bg-gray-50 p-4 rounded-lg">
          <span class="font-semibold text-lg">Results</span>
          <div v-for="(round, index) in raceStore.rounds" :key="index"
            class="overflow-y-scroll pt-2 pb-1 mt-3 border-dotted border-t">
            <div class="text-red-400 text-xs font-semibold py-1 flex justify-between"><span>{{ round.round }}ST
                Lap</span>
              <span>{{ round.distance }}m</span>
            </div>
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th class="text-left py-2 text-xs font-semibold text-gray-900">Position</th>
                  <th class="text-right py-2 text-xs font-semibold text-gray-900">Name</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="(horse, horseIndex) in raceStore.results[index].winnerHorses" :key="horseIndex">
                  <td class="whitespace-nowrap py-0.5 text-left text-xs text-gray-500">{{ index + 1 }}</td>
                  <td class="whitespace-nowrap py-0.5 text-right text-xs font-medium text-gray-900">{{ horse.name }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
