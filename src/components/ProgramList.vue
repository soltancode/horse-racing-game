<script setup>
import { useRaceStore } from '@/stores/raceStore.js';
const raceStore = useRaceStore();
</script>

<template>
  <div class="col-span-1 bg-gray-50 p-4 rounded-lg horse-list overflow-scroll">
    <span class="font-semibold text-lg">Program</span>
    <div v-for="(round, index) in raceStore.rounds" :key="index" class="overflow-y-scroll pt-2 pb-1 mt-3 border-dotted border-t">
      <div class="text-red-400 text-xs font-semibold py-1 flex justify-between">
        <span>{{ round.round }}ST Lap</span>
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
            <td class="whitespace-nowrap py-0.5 text-left text-xs text-gray-500">{{ horseIndex + 1 }}</td>
            <td class="whitespace-nowrap py-0.5 text-right text-xs font-medium text-gray-900">{{ horse.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>