<template>


  <div>
    <div class="mb48 pt8"></div>

    <home-banner />

    <div class="mb48"></div>

    <home-weekly-featured />

    <div class="mb48"></div>

    <home-limited />

    <div class="mb48"></div>

    <home-ranking />

    <div class="mb48"></div>

    <home-events />

    <div class="mb48"></div>

    <home-rising />

    <div class="mb48"></div>

    <home-starlet />

    <div class="mb48"></div>

    <home-tags />

    <div class="mb48"></div>

    <home-maylike />

    <div class="mb48"></div>
  </div>


</template>

<script lang="ts" setup>
import {useAsyncData, useRoute} from "#imports"

const route = useRoute()
console.log(route)

// const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomePage"
})
</script>

<style src="assets/style/home.css"></style>
