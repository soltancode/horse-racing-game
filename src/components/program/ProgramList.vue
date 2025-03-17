<script setup>
import { useRaceStore } from '@/stores/raceStore.js';
import ProgramRound from '@/components/program/round/ProgramRound.vue';

const raceStore = useRaceStore();
</script>

<template>
  <div class="col-span-1 bg-gray-50 p-4 rounded-lg horse-list overflow-scroll">
    <span class="font-semibold text-lg">Program</span>
    <ProgramRound 
      v-for="(round, index) in raceStore.rounds" 
      :key="index" 
      :round="round"
    />
  </div>
</template>
