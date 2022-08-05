<template>
  <div class="g_wrap det-abt mb48">
    <h3 class="g_h2 fs24 lh32 fw700 pl1 ell mb16">Giới thiệu</h3>
    <div class="g_txt_over mb48 fs16 j_synopsis _txtover">
      <p class="c_000">
        {{ storyStore.story?.content }}
      </p>
      <a href="###" title="read more" class="_readmore">
        <svg><use xlink:href="#i-dn"></use></svg>
      </a>
    </div>
    <div>
      <svg class="mr8 fs20 c_primary">
        <use xlink:href="#i-ex"></use>
      </svg>
      <span class="vam">
          Nội dung dâm dục
        </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useStoryStore} from "~/store/story";

const storyStore = useStoryStore()

</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Content"
})
</script>

<style scoped>

</style>
