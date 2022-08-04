<template>
  <div class="g_col _4">
    <h4 class="m-rank-title fw700 lh24 fs20 ls0.15 mb20 dib vat pr bsbb c_fff">
      {{ title }}
    </h4>
    <ul class="m-rank-list">
      <li
          v-for="(story, index) in stories"
          :key="index"
          class="mb16 clearfix"
      >
        <a
            class="g_thumb _48 fl"
            href="/book/i-can-enter-the-game_23029506006934105"
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
        <i
            class="fl c_m ml8 mr8 fw700 lh20 fs16 ls0.15 ff_number"
            :class="{
              c_danger: index === 0,
              c_warning: index === 1,
              c_success: index === 2,
            }"
        >
          0{{index + 1}}
        </i>
        <div class="oh">
          <h5 class="fw700 lh20 fs16 ls0.15 ell mb4">
            <a
                class="c_l"
                href="/book/i-can-enter-the-game_23029506006934105"
                :title="story.name"
            >
              {{ story.name }}
            </a>
          </h5>
          <p>
            <a
                href="/stories/novel-urban-male"
                :title="story.name"
                class="c_m fw400 lh16 fs12 ell mb4 db"
            >
              {{ story.category.name }}
            </a>
            <strong class="fw400 lh16 ls0.2 fs0 c_s ell db">
              <svg width="12" height="12">
                <use xlink:href="#IStar"></use>
              </svg>
              <span class="vam ml2 ff_number fs12">4.0</span>
            </strong>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

import {useQuery} from "@vue/apollo-composable";
import {GET_HOME_RANKING} from "~/apollo/comico/queries/stories";
import {GetHomeRanking, GetHomeRankingVariables} from "~/apollo/comico/queries/__generated__/GetHomeRanking";
import {CounterScope} from "~/apollo/__generated__/comicoTypes";
import {computed} from "#imports";

const props = defineProps<{
  title: string
}>()

const { result } = useQuery<GetHomeRanking, GetHomeRankingVariables>(GET_HOME_RANKING, {
  filter: {
    group: "views",
    scope: CounterScope.TOTAL,
    limit: 10,
    offset: 0,
    sort: "value"
  }
})

const stories = computed(() => result.value?.stories || [])

</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomeRankingColumn"
})
</script>

<style scoped></style>
