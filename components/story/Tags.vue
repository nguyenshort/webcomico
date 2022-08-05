<template>
  <div class="j_tagWrap">
    <div class="g_wrap mb32">
      <div class="clearfix mb16">
        <h3 class="g_h2 fs24 lh32 fw700 pl1 ell fl">Gắn thẻ</h3>
        <div class="fr pt8">
          <a class="fs16" href="/all-tags/A/1" title="all tags">Xem hết</a>
        </div>
      </div>
      <div class="m-tags">
        <p
            v-for="tag in storyStore.story?.tags"
            :key="tag.id"
            class="m-tag dib vam mb8"
        >
          <a
              class="fs12"
              href="/tags/cultivation-novel"
              :title="tag.name"
          > # {{ tag?.name }} </a>
          <label class="m-tag-op">
            <input type="checkbox" class="j_tag_like" />
            <strong class="tag-icon">
              <svg class="_not_fill">
                <use xlink:href="#i-love"></use>
              </svg>
              <svg class="_fill"><use xlink:href="#i-lovefill"></use>
              </svg>
            </strong>
          </label>
        </p>
      </div>
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
  name: "StoryTags"
})
</script>

<style scoped>

</style>
