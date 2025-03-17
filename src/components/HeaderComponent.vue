<script setup>
import { computed } from 'vue';
import { useRaceStore } from '@/stores/raceStore.js';
import { PlayIcon, PauseIcon } from '@heroicons/vue/24/solid'

const raceStore = useRaceStore();

const buttonText = computed(() => (raceStore.raceStarted ? 'Pause' : 'Start'));

const handleGenerateProgram = () => {
    raceStore.generateProgram();
};

const handleStartPause = () => {
  raceStore.startRace();
};
</script>

<template>
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5">
                    <div class="flex flex-col">
                        <span class="text-lg font-bold">Horse Racing Game</span>
                        <span class="text-xs text-gray-500">Developed by soltancode</span>
                    </div>
                    <!-- <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt=""> -->
                </a>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <a href="https://github.com/soltancode" target="_blank" class="text-sm/6 font-semibold text-gray-900 hover:text-gray-500">GitHub</a>
                <a href="https://soltancode.com" target="_blank" class="text-sm/6 font-semibold text-gray-900 hover:text-gray-500">Developer</a>
                <a href="https://linkedin.com/in/soltancode" target="_blank" class="text-sm/6 font-semibold text-gray-900 hover:text-gray-500">LinkedIn</a>
            </div>
            <div class="flex flex-col lg:flex-row lg:flex-1 lg:justify-end gap-2">
                <button @click="handleGenerateProgram" class="text-sm font-semibold text-gray-900 bg-gray-300/50 hover:bg-gray-300 px-3 py-1 rounded-full">Generate Program</button>
                <button @click="handleStartPause" class="text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full flex items-center"><PlayIcon v-if="!raceStore.raceStarted" class="size-3 mr-1" /><PauseIcon v-if="raceStore.raceStarted" class="size-3 mr-1" /> {{ buttonText }}</button>
            </div>
        </nav>
    </header>
</template>