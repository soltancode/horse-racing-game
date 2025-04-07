<script setup>
import { useRaceStore } from '@/stores/raceStore.js';
import ProgramRound from '@/components/program/round/ProgramRound.vue';

// Access round data from the race store
const raceStore = useRaceStore();
</script>

<template>
  <div class="col-span-1 bg-gray-50 p-4 rounded-lg horse-list overflow-scroll">
    <span class="font-semibold text-lg">Program</span>
    <!-- Render each round using the ProgramRound component -->
    <ProgramRound v-for="round in raceStore.rounds" :key="round.round" :round="round"/>
  </div>
</template>
