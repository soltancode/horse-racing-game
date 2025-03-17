<script setup>
import { onMounted } from 'vue';
import { useRaceStore } from '@/stores/raceStore.js';
import HorseList from '@/components/sections/HorseList.vue';
import RunningHorses from '@/components/sections/RunningHorses.vue';
import ProgramList from '@/components/program/ProgramList.vue';
import ResultsList from '@/components/sections/ResultsList.vue';

const raceStore = useRaceStore();

onMounted(() => {
  raceStore.generateProgram();
});
</script>

<template>
  <main>
    <div class="mx-auto max-w-7xl p-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="grid grid-cols-5 gap-y-5 gap-x-4 w-full">
        <HorseList />
        <RunningHorses />
        <ProgramList />
        <ResultsList />
      </div>
    </div>
  </main>
</template>
