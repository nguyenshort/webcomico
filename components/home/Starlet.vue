<template>
  <div id="blockId-5fffded3af867252d05d68fb-0">
    <section class="bc_light_default pt32 pb32 _scope">
      <div class="g_hr pb12 mb16 g_wrap">
        <div class="clearfix">
          <h3 class="fw700 lh32 fs24 ls0.15 ell">
            Truyện Mới Cập Nhật
          </h3>
        </div>
        <p class="fw400 lh20 fs14 ls0.2 c_m ell"></p>
      </div>
      <ul class="g_row _8 _switch_target" data-report-blockid="618b7c69f4ac042ae9230db0" data-report-blocktype="7003" data-report-blocktitle="Potential Starlet" data-report-blockpos="4" data-report-l1="1">
        <li v-for="(story, index) in stories" :key="index" class="g_col _1" style="height: 211px;">
          <a
              class="g_thumb _auto mb8"
              href="/book/the-mechanical-era_23632115106092105"
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
          <h4
              class="fw700 lh20 fs16 ls0.15 ells _2 mb4"
          >
            <a
                class="c_l" href="/book/the-mechanical-era_23632115106092105"
                title="The Mechanical Era"
            >
              {{ story.name }}
            </a>
          </h4>
          <p class="fw400 lh20 fs14 ls0.2 c_m ell">
            <a href="/stories/novel-fantasy-male" title="Fantasy" class="c_s">
              {{ story.category.name }}
            </a>
          </p>
        </li>
      </ul>
    </section>
  </div>

</template>

<script lang="ts" setup>
import {useQuery} from "@vue/apollo-composable";
import {GET_HOME_RANKING} from "~/apollo/comico/queries/stories";
import {computed} from "#imports";
import {HomeEnded, HomeEndedVariables} from "~/apollo/comico/queries/__generated__/HomeEnded";

const { result } = useQuery<HomeEnded, HomeEndedVariables>(GET_HOME_RANKING, {
  filter: {
    limit: 8,
    offset: 0,
    sort: "updatedAt"
  }
})

const stories = computed(() => result.value?.stories || [])
</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomeStarlet"
})
</script>

<style scoped>

</style>
