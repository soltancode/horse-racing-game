<script setup>
import HorseTable from '@/components/table/HorseTable.vue';

defineProps({
  round: Object
});
</script>

<template>
  <div class="overflow-y-scroll pt-2 pb-1 mt-3 border-dotted border-t">
    <div class="text-red-400 text-xs font-semibold py-1 flex justify-between">
      <span>{{ round.round }}ST Lap</span>
      <span>{{ round.distance }}m</span>
    </div>
    <HorseTable :horses="round.selectedHorses" />
  </div>
</template>
