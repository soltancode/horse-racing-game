<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue';
import { useRaceStore } from '@/stores/raceStore.js';
import {
  SPRITE_FRAME_COUNT,
  SPRITE_FRAME_WIDTH,
  SPRITE_FRAME_HEIGHT,
  SPRITE_INTERVAL
} from '@/constants/animation.js';
import { MAX_PROGRESS } from '@/constants/race.js';

const props = defineProps({
  // Horizontal progress of the horse (%)
  start: Number,
});

const raceStore = useRaceStore();
const isRunning = ref(false);
let stopTimeout = null;

// CSS variable style binding
const styleVars = computed(() => ({
  '--frame-count': SPRITE_FRAME_COUNT,
  '--frame-width': `${SPRITE_FRAME_WIDTH}px`,
  '--frame-height': `${SPRITE_FRAME_HEIGHT}px`,
  '--frame-duration': `${SPRITE_FRAME_COUNT * SPRITE_INTERVAL}ms`,
  '--background-size': `${SPRITE_FRAME_WIDTH * SPRITE_FRAME_COUNT}px auto`,
  '--end-position': `${-SPRITE_FRAME_WIDTH * SPRITE_FRAME_COUNT}px`,
  top: '0',
  left: `${props.start}%`,
}));

/**
 * Starts the sprite animation. Automatically stops when horse reaches finish.
 */
const startAnimation = () => {
  isRunning.value = true;

  if (props.start >= MAX_PROGRESS) {
    stopTimeout = setTimeout(() => {
      isRunning.value = false;
    }, 300);
  }
};

const stopAnimation = () => {
  isRunning.value = false;
  clearTimeout(stopTimeout);
};

watch(() => raceStore.raceStarted, (newVal) => {
  newVal ? startAnimation() : stopAnimation();
});

watch(() => props.start, (newVal) => {
  if (newVal >= MAX_PROGRESS && isRunning.value) {
    stopAnimation(); // Stop animation for this horse only
  }
});

onMounted(() => {
  if (raceStore.raceStarted) {
    startAnimation();
  }
});

onUnmounted(() => {
  clearTimeout(stopTimeout);
});
</script>

<template>
  <div class="horse absolute" :class="{ running: isRunning }" :style="styleVars">
    <div class="horse-sprite" />
  </div>
</template>

<style scoped>
.horse {
  width: var(--frame-width);
  height: var(--frame-height);
  display: flex;
  align-items: center;
  justify-content: center;
}

.horse-sprite {
  width: var(--frame-width);
  height: var(--frame-height);
  background-image: url('/horse/horse-sprite.png');
  background-repeat: no-repeat;
  background-size: var(--background-size);
}

.running .horse-sprite {
  animation: runHorse steps(var(--frame-count)) infinite;
  animation-duration: var(--frame-duration);
}

@keyframes runHorse {
  from {
    background-position: 0px;
  }
  to {
    background-position: var(--end-position);
  }
}
</style>
