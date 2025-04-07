<script setup>
import { useRaceStore } from '@/stores/raceStore.js';

// Access race results and round info from the store
const raceStore = useRaceStore();
</script>

<template>
  <div class="col-span-1 bg-gray-50 p-4 rounded-lg horse-list overflow-scroll">
    <span class="font-semibold text-lg">Results</span>

    <!-- Loop through each round -->
    <div v-for="round in raceStore.rounds" :key="round.round"
      class="overflow-y-scroll pt-2 pb-1 mt-3 border-dotted border-t">
      <!-- Round header: round number + distance -->
      <div class="text-red-400 text-xs font-semibold py-1 flex justify-between">
        <span>{{ round.round }}ST Lap</span> <!-- Optional: convert to ordinal (1ST, 2ND...) -->
        <span>{{ round.distance }}m</span>
      </div>

      <!-- Horse result table for the current round -->
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th class="text-left py-2 text-xs font-semibold text-gray-900">Position</th>
            <th class="text-right py-2 text-xs font-semibold text-gray-900">Name</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          <!-- Show winner horses for this round -->
          <tr v-for="(horse, i) in raceStore.results[round.round - 1].winnerHorses" :key="horse.name">
            <td class="whitespace-nowrap py-0.5 text-left text-xs text-gray-500">
              {{ i + 1 }}
            </td>
            <td class="whitespace-nowrap py-0.5 text-right text-xs font-medium text-gray-900">
              {{ horse.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
