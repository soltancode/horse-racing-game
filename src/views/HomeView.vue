<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('HomeView mounted')
})
</script>

<template>
  <main>
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="grid grid-cols-5 gap-5 w-full">
        <div class="overflow-scroll bg-gray-50 py-3 px-2 rounded-lg">
          <span class="font-semibold text-xl">Horse List</span>
          <div class="max-h-96 overflow-y-scroll">
            <table class="min-w-full overflow-scroll divide-y divide-gray-300 mt-4">
              <thead>
                <tr>
                  <th scope="col" class="text-left py-2 text-xs font-semibold text-gray-900">Name</th>
                  <th scope="col" class="text-left py-2 text-xs font-semibold text-gray-900">Condition</th>
                  <th scope="col" class="text-left py-2 text-xs font-semibold text-gray-900">Color</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Grace Hopper</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">80</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Red</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap py-2 text-left text-xs font-medium text-gray-900">Soltan Code</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">90</td>
                  <td class="whitespace-nowrap py-2 text-left text-xs text-gray-500">Yellow</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-span-2">2</div>
        <div class="col-span-1">3</div>
      </div>
    </div>
  </main>
</template>
