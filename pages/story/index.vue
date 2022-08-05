<template>
  <div>
    <story-det />
    <story-tabs />
    <story-tab-info />
  </div>
</template>

<script lang="ts" setup>
import {useAsyncData, useNuxtApp, useRoute} from "#imports"
import {useStoryStore} from "~/store/story";

const { $pinia } = useNuxtApp()
const storyStore = useStoryStore($pinia)
const { params } = useRoute()
const { data } = await useAsyncData(`story-${params.slug}`,() => storyStore.getStory())
</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "StoryPage"
})
</script>

<style src="assets/style/story.css"></style>
