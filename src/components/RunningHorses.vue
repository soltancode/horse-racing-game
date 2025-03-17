<script setup>
import { useRaceStore } from '@/stores/raceStore.js';
const raceStore = useRaceStore();
</script>

<template>
  <div class="col-span-2 bg-blue-50 p-4 rounded-lg">
    <span class="font-semibold text-lg">Running Horses</span>
    <div class="mt-3 space-y-4">
      <div v-for="(horse, index) in raceStore.rounds[raceStore.currentRound].selectedHorses" :key="index" class="flex border">
        <div class="bg-green-800 w-10 text-center text-white -rotate-90 flex items-center justify-center">{{ index + 1 }}</div>
        <div class="relative w-full h-9.5 flex items-center justify-center">
          <div class="border-t-orange-400 horse flex items-center absolute" :style="{ top: `0`, left: `${horse.start}%` }">
            <img src="/horse/1.png" alt="Horse" class="w-10 h-10" />
          </div>
        </div>
      </div>
      <div class="flex justify-between font-semibold text-red-500">
        <span>{{ raceStore.rounds[raceStore.currentRound].round }}st. Lap {{ raceStore.rounds[raceStore.currentRound].distance }}m</span>
        <span class="uppercase">Finish</span>
      </div>
    </div>
  </div>
</template>