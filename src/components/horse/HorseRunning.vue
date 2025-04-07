<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRaceStore } from '@/stores/raceStore.js';
import { HORSE_FRAMES, ANIMATION_INTERVAL } from '@/constants/animation.js'; // Extracted constants

const props = defineProps({
    // 'start' determines horizontal position in percentage
    start: Number,
});

const raceStore = useRaceStore();

// Store current frame index and current image for animation
const currentIndex = ref(0);
const currentHorseImage = ref(HORSE_FRAMES[0]);

let interval = null;

/**
 * Starts the horse animation by cycling through frame images.
 * Animation stops automatically when 'start' prop reaches 90 or more.
 */
const startAnimation = () => {
    if (interval) clearInterval(interval);

    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % HORSE_FRAMES.length;
        currentHorseImage.value = HORSE_FRAMES[currentIndex.value];

        // Stop animation once horse is near the finish line
        if (props.start >= 90) {
            currentHorseImage.value = HORSE_FRAMES[0];
            clearInterval(interval);
        }
    }, ANIMATION_INTERVAL);
};

/**
 * Stops animation and resets to initial frame.
 */
const stopAnimation = () => {
    if (interval) {
        clearInterval(interval);
        currentIndex.value = 0;
        currentHorseImage.value = HORSE_FRAMES[0];
    }
};

// Watch for changes in race status and start/stop animation accordingly
watch(() => raceStore.raceStarted, (newVal) => {
    newVal ? startAnimation() : stopAnimation();
});

// Start animation on mount if race is already active
onMounted(() => {
    if (raceStore.raceStarted) {
        startAnimation();
    }
});

// Ensure interval is cleared on component destroy
onUnmounted(() => {
    clearInterval(interval);
});
</script>

<template>
    <!-- Horse icon positioned absolutely based on 'start' percentage -->
    <div class="border-t-orange-400 horse flex items-center absolute" :style="{ top: '0', left: `${start}%` }">
        <img :src="currentHorseImage" alt="Horse" class="w-10 h-10" />
        <!-- 💡 TIP: Consider replacing with a sprite image using CSS background-position for smoother animation -->
    </div>
</template>
