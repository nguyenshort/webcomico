<template>
  <div class="det-tab-pane _on" id="about">

    <story-content />

    <story-tags />


    <story-fans />

    <story-may-like />

    <story-reviews />

  </div>
</template>

<script lang="ts" setup>
import {useStoryStore} from "~/store/story";
import {computed} from "#imports";
import {GetStory_story} from "~/apollo/comico/queries/__generated__/GetStory";

const storyStore = useStoryStore()

const story = computed<GetStory_story|undefined>(() => storyStore.story)

</script>

<script lang="ts">
export default {
  name: "StoryTabInfo"
}
</script>

<style scoped>

</style>
