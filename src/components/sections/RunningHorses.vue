<script setup>
import HorseRunning from '@/components/horse/HorseRunning.vue';
import { useRaceStore } from '@/stores/raceStore.js';

// Access global race state from Pinia store
const raceStore = useRaceStore();
</script>

<template>
  <div class="col-span-2 bg-blue-50 p-4 rounded-lg">
    <span class="font-semibold text-lg">Running Horses</span>
    <div class="mt-3 space-y-4">
      <!-- Iterate through selected horses of the current round -->
      <div v-for="(horse, index) in raceStore.rounds[raceStore.currentRound].selectedHorses" :key="index" class="flex border">
        <!-- Left vertical label with position index -->
        <div class="bg-green-800 w-10 text-center text-white -rotate-90 flex items-center justify-center">
          {{ index + 1 }} <!-- Optional: if position exists -->
        </div>

        <!-- Horse track area with animation -->
        <div class="relative w-full h-[38px] flex items-center justify-center">
          <!-- 'start' controls how far the horse has moved (0-90%) -->
          <HorseRunning :start="horse.start" />
        </div>
      </div>

      <!-- Round info and finish label -->
      <div class="flex justify-between font-semibold text-red-500">
        <span>
          {{ raceStore.rounds[raceStore.currentRound].round }}st. Lap
          {{ raceStore.rounds[raceStore.currentRound].distance }}m
        </span>
        <span class="uppercase">Finish</span>
      </div>
    </div>
  </div>
</template>
