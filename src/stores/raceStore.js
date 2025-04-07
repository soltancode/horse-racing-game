import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  TOTAL_HORSE_COUNT,
  ROUND_DISTANCES,
  MAX_PROGRESS,
  MAX_TICK_INCREMENT,
  RACE_TICK_INTERVAL,
  HORSES_PER_RACE,
  TOTAL_ROUNDS,
} from '@/constants/race.js'

export const useRaceStore = defineStore('raceStore', () => {
  // Full horse list with initial positions and conditions
  const horses = ref([
    { name: 'Thunder Bolt', condition: 85, color: 'Black', start: 0 },
    { name: 'Lightning Strike', condition: 90, color: 'White', start: 0 },
    { name: 'Shadow Dancer', condition: 78, color: 'Brown', start: 0 },
    { name: 'Storm Chaser', condition: 88, color: 'Gray', start: 0 },
    { name: 'Fire Hoof', condition: 82, color: 'Red', start: 0 },
    { name: 'Silver Mane', condition: 79, color: 'Silver', start: 0 },
    { name: 'Golden Star', condition: 91, color: 'Gold', start: 0 },
    { name: 'Midnight Runner', condition: 86, color: 'Dark Blue', start: 0 },
    { name: 'Blazing Comet', condition: 83, color: 'Orange', start: 0 },
    { name: 'Wind Spirit', condition: 87, color: 'White', start: 0 },
    { name: 'Ocean Breeze', condition: 76, color: 'Blue', start: 0 },
    { name: 'Emerald Dash', condition: 89, color: 'Green', start: 0 },
    { name: 'Copper Thunder', condition: 84, color: 'Copper', start: 0 },
    { name: 'Ivory Whisper', condition: 77, color: 'Ivory', start: 0 },
    { name: 'Desert Mirage', condition: 80, color: 'Sand', start: 0 },
    { name: 'Steel Charger', condition: 92, color: 'Steel', start: 0 },
    { name: 'Crimson Blaze', condition: 81, color: 'Crimson', start: 0 },
    { name: 'Frostbite', condition: 75, color: 'Ice Blue', start: 0 },
    { name: 'Titan Gallop', condition: 93, color: 'Dark Gray', start: 0 },
    { name: 'Velvet Storm', condition: 82, color: 'Purple', start: 0 },
  ])

  const currentRound = ref(0)

  // Define the round structure with distance and selected horses
  const rounds = ref(
    Array.from({ length: TOTAL_ROUNDS }, (_, i) => ({
      round: i + 1,
      distance: ROUND_DISTANCES[i],
      selectedHorses: [],
    })),
  )

  // Result tracking for each round
  const results = ref(
    Array.from({ length: TOTAL_ROUNDS }, (_, i) => ({
      round: i + 1,
      winnerHorses: [],
    })),
  )

  const raceStarted = ref(false)
  let raceInterval = null

  /**
   * Start or stop the race loop based on current state
   */
  const startRace = () => {
    if (raceStarted.value) {
      clearInterval(raceInterval)
      raceStarted.value = false
      return
    }

    raceStarted.value = true

    raceInterval = setInterval(() => {
      const current = currentRound.value
      const selectedHorses = rounds.value[current].selectedHorses

      const updatedHorses = selectedHorses.map((horse) => {
        let newStart = horse.start

        if (newStart < MAX_PROGRESS) {
          newStart += Math.random() * MAX_TICK_INCREMENT

          if (newStart >= MAX_PROGRESS) {
            newStart = MAX_PROGRESS
            results.value[current].winnerHorses.push({ ...horse, start: newStart })
          }
        }

        return { ...horse, start: newStart }
      })

      rounds.value[current].selectedHorses = updatedHorses

      // Stop round if all horses finished
      if (results.value[current].winnerHorses.length === updatedHorses.length) {
        clearInterval(raceInterval)
        raceStarted.value = false

        if (currentRound.value < TOTAL_ROUNDS - 1) {
          currentRound.value++
        }
      }
    }, RACE_TICK_INTERVAL)
  }

  /**
   * Randomly assigns horses to each round
   */
  const generateProgram = () => {
    if (horses.value.length !== TOTAL_HORSE_COUNT) {
      console.warn(`Expected ${TOTAL_HORSE_COUNT} horses, but found ${horses.value.length}`);
    }

    rounds.value.forEach((round) => {
      round.selectedHorses = [...horses.value]
        .sort(() => Math.random() - 0.5)
        .slice(0, HORSES_PER_RACE)
    })
  }

  return {
    horses,
    rounds,
    results,
    currentRound,
    raceStarted,
    startRace,
    generateProgram,
  }
})
