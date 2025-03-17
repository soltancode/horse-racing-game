<script setup>
defineProps({
    horses: Array
});
</script>

<template>
    <table class="min-w-full divide-y divide-gray-300">
        <thead>
            <tr>
                <th class="text-left py-2 text-xs font-semibold text-gray-900">Position</th>
                <th class="text-right py-2 text-xs font-semibold text-gray-900">Name</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            <tr v-for="(horse, index) in horses" :key="index">
                <td class="whitespace-nowrap py-0.5 text-left text-xs text-gray-500">{{ index + 1 }}</td>
                <td class="whitespace-nowrap py-0.5 text-right text-xs font-medium text-gray-900">{{ horse.name }}</td>
            </tr>
        </tbody>
    </table>
</template>