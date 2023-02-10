import { defineStore } from "pinia"

interface SonaList {
  fursonas: {
    name: string
    nickname: string
    accentColor: "auto" | string
    description: string
    species: string
    createdDate: string
    modifiedDate: string
    isPrivate: boolean
    colors: string[]
  }[] | never[]
}

export const useSonaList = defineStore("fursonas", () => {
  state: (): SonaList => {
    return {
      fursonas: []
    }
  }
})