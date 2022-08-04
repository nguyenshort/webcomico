<template>
  <div>
    <div>
      <div class="g_hr pb12 mb16 g_wrap">
        <h3 class="fw700 lh32 fs24 ls0.15 ell">Nổi Bật Hôm Nay</h3>
      </div>
      <section class="g_row _8 mb-16">
        <div class="g_col _3">
          <div class="m-book3 br4 oh pr bc_light_default j_book3">
            <div
                class="m-book3-banner pr _banner"
            >
              <a
                  v-for="(story, index) in bigList"
                  :key="story.id"
                  class="g_thumb m-book3-cover _cover t50% l50% td300"
                  href="/book/undying-monarch_23268812505603305"
                  :title="story.name"
                  :data-index="getIndex(index)"
                  :data-position="index"
                  @click.prevent="currentIndex = index"
              >
                <img
                    width="140"
                    height="186"
                    :alt="story.name"
                    :src="story.avatar"
                    style="display: block;"
                />
              </a>
            </div>
            <div
                class="m-book3-bd _panel pa l0 w100% bsbb pt16 pl24 pr24 vh o0 td300"
                :class="{
                  '_on': currentIndex === index
                }"
                v-for="(story, index) in bigList"
                :key="index"
            >
              <h4 class="fw700 lh24 fs20 ls0.15 tac ell mb4">
                <a
                    class="c_l"
                    href="/book/undying-monarch_23268812505603305"
                    :title="story.name"
                >
                  {{ story.name }}
                </a>
              </h4>
              <p class="mb8 tac fw400 lh20 fs14 ls0.2 tac ell">
                <a href="/stories/novel-urban-male" title="Magical Realism" class="c_s">
                  {{ story.authors }}
                </a> · <span>{{ story.category.name }}</span>
              </p>
              <p class="c_s fw400 lh20 fs14 ls0.2 c_s ells _7">
                {{ story.content }}
              </p>
            </div>
          </div>
        </div>
        <ul>
          <li v-for="(story, index) in smallList" :key="index" class="g_col _1 mb16" style="height: 211px;">
            <a
                class="g_thumb _auto mb8"
                href="/book/epic-of-unemployed-mercenaries-in-a-fantasy-world_22669035805675305"
                :title="story.name"
            >
              <img
                  width="140"
                  height="186"
                  :alt="story.name"
                  :src="story.avatar"
                  style="display: block;"
              />
            </a>
            <h4 class="fw700 lh20 fs16 ls0.15 ells _2 mb4">
              <a
                  class="c_l" href="/book/epic-of-unemployed-mercenaries-in-a-fantasy-world_22669035805675305"
                  :title="story.name"
              >
                {{ story.name }}
              </a>
            </h4>
            <p class="fw400 lh20 fs14 ls0.2 c_m ell">
              <a href="/stories/novel-fantasy-male" :title="story.category.name" class="c_s">
                {{ story.category.name }}
              </a>
            </p>
          </li>
        </ul>
      </section>
    </div>
  </div>

</template>

<script lang="ts" setup>

import {useQuery} from "@vue/apollo-composable";
import {GetFeatured, GetFeaturedVariables} from "~/apollo/comico/queries/__generated__/GetFeatured";
import {GET_FEATURED} from "~/apollo/comico/queries/stories";
import {CounterScope} from "~/apollo/__generated__/comicoTypes";
import {computed, onUnmounted, ref, watch} from "#imports";

const { result } = useQuery<GetFeatured, GetFeaturedVariables>(GET_FEATURED, {
  filter: {
    group: "views",
    scope: CounterScope.DAY,
    limit: 13,
    offset: 0,
    sort: "value"
  }
})

const stories = computed(() => result.value?.stories || [])

const bigList = computed(() => stories.value.slice(0, 3))
const smallList = computed(() => stories.value.slice(3))

const currentIndex = ref(0)

const getIndex = (fixIndex: number) => {
  if(currentIndex.value === 0) {
    return fixIndex
  }

  let index = 0

  if(currentIndex.value === 1) {
    switch (fixIndex) {
      case 0:
        index = 2
        break
      case 1:
        index = 0
        break
      case 2:
        index = 1
        break
    }
  } else if(currentIndex.value === 2) {
    switch (fixIndex) {
      case 0:
        index = 1
        break
      case 1:
        index = 2
        break
      case 2:
        index = 0
        break
    }
  }

  return index
}

const background = computed(() => {
  const story = stories.value[currentIndex.value]
  return story?.avatar ? `url(${story.avatar})` : "none"
})

const timer = ref()
watch(bigList, (newValue) => {
  if(newValue.length) {

    timer.value = setInterval(() => {
      if(currentIndex.value === 0) {
        currentIndex.value = 2
      } else {
        currentIndex.value--
      }
    }, 3000)
  }
})

onUnmounted(() => {
  clearInterval(timer.value)
})

</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomeWeeklyFeatured"
})
</script>

<style scoped>

.m-book3-banner._banner {
  background-image: v-bind(background);
}

</style>
