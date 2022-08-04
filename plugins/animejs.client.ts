import anime from 'animejs'
import {defineNuxtPlugin} from "#imports";


export default defineNuxtPlugin(() => {
  return {
    provide: {
      anime
    }
  }
})
