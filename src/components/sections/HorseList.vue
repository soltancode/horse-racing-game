<script setup>
import { useRaceStore } from '@/stores/raceStore.js';

// Access race data from the Pinia store
const raceStore = useRaceStore();
</script>

<template>
  <div class="col-span-1 overflow-scroll bg-gray-50 py-3 px-2 rounded-lg">
    <!-- Title of the horse list panel -->
    <span class="font-semibold text-lg">
      Horse List <span class="text-xs">(1 - 20)</span>
    </span>

    <div class="horse-list overflow-y-scroll">
      <table class="min-w-full divide-y divide-gray-300 mt-3">
        <thead>
          <tr>
            <th class="text-left py-2 text-xs font-semibold text-gray-900">Name</th>
            <th class="text-center py-2 text-xs font-semibold text-gray-900">Condition</th>
            <th class="text-center py-2 text-xs font-semibold text-gray-900">Color</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <!-- Loop through all horses from the store -->
          <tr v-for="horse in raceStore.horses" :key="horse.name">
            <!-- Horse name -->
            <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">
              {{ horse.name }}
            </td>

            <!-- Horse condition (1-100) -->
            <td class="whitespace-nowrap py-2 text-center text-xs text-gray-500">
              {{ horse.condition }}
            </td>

            <!-- Unique color assigned to the horse -->
            <td class="whitespace-nowrap py-2 text-center text-xs text-gray-500">
              {{ horse.color }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
