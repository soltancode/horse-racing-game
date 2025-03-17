import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRaceStore = defineStore('raceStore', () => {
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

  const rounds = ref([
    { round: 1, distance: 1200, selectedHorses: [] },
    { round: 2, distance: 1400, selectedHorses: [] },
    { round: 3, distance: 1600, selectedHorses: [] },
    { round: 4, distance: 1800, selectedHorses: [] },
    { round: 5, distance: 2000, selectedHorses: [] },
    { round: 6, distance: 2200, selectedHorses: [] },
  ])

  const results = ref([
    { round: 1, winnerHorses: [] },
    { round: 2, winnerHorses: [] },
    { round: 3, winnerHorses: [] },
    { round: 4, winnerHorses: [] },
    { round: 5, winnerHorses: [] },
    { round: 6, winnerHorses: [] },
  ])

  const raceStarted = ref(false)

  let raceInterval = null

  const startRace = () => {
    if (raceStarted.value) {
      clearInterval(raceInterval)
      raceStarted.value = false
    } else {
      raceStarted.value = true

      raceInterval = setInterval(() => {
        rounds.value[currentRound.value].selectedHorses = rounds.value[
          currentRound.value
        ].selectedHorses.map((horse) => {
            let newStart = horse.start;
            if (horse.start < 90) {
                newStart = horse.start + Math.random() * 5
      
                if (newStart >= 90) {
                  newStart = 90
                  results.value[currentRound.value].winnerHorses.push({ ...horse, start: newStart })
                }
            }

          if (
            results.value[currentRound.value].winnerHorses.length ===
            rounds.value[currentRound.value].selectedHorses.length
          ) {
            clearInterval(raceInterval)
            raceStarted.value = false
            if (currentRound.value !== 5) {
                currentRound.value++
            }
          }

          return { ...horse, start: newStart }
        })
      }, 200)
    }
  }

  const generateProgram = () => {
    rounds.value.forEach((round) => {
      round.selectedHorses = [...horses.value].sort(() => Math.random() - 0.5).slice(0, 10)
    })
  }

  return {
    horses,
    results,
    rounds,
    currentRound,
    raceStarted,
    startRace,
    generateProgram,
  }
})
