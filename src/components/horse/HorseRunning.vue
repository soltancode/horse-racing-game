<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRaceStore } from '@/stores/raceStore.js';

const props = defineProps({
    start: Number,
});

const raceStore = useRaceStore();

const horseImages = Array.from({ length: 12 }, (_, i) => `/horse/${i + 1}.png`);
const currentIndex = ref(0);
const currentHorseImage = ref(horseImages[0]);
let interval = null;

const startAnimation = () => {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % horseImages.length;
        currentHorseImage.value = horseImages[currentIndex.value];

        if (props.start >= 90) {
            currentHorseImage.value = horseImages[0];
            clearInterval(interval);
        }
    }, 100);
};

const stopAnimation = () => {
    if (interval) {
        clearInterval(interval);
        currentIndex.value = 0;
        currentHorseImage.value = horseImages[0];
    }
};

watch(() => raceStore.raceStarted, (newVal) => {
    if (newVal) {
        startAnimation();
    } else {
        stopAnimation();
    }
});

onMounted(() => {
    if (raceStore.raceStarted) {
        startAnimation();
    }
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="border-t-orange-400 horse flex items-center absolute" :style="{ top: '0', left: `${start}%` }">
        <img :src="currentHorseImage" alt="Horse" class="w-10 h-10" />
    </div>
</template>