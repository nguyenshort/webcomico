<template>
  <div class="det-hd mb48">
    <div class="g_wrap">

      <p class="lh24 fs16 pt24 pb24 ell c_000">
        <a title="home" href="/" class="c_000 fl pt4 mr4">
          <svg class="fl">
            <use xlink:href="#i-bread"></use>
          </svg>
        </a>
        <span>/</span>
        <a href="/stories/novel-eastern-male" class="c_000" :title="story?.category.name">
          {{ story.category.name }}
        </a>
        <span>/</span>
        <span>
          {{ story.name }}
        </span>
      </p>

      <div class="det-info g_row c_000 fs16 pr">
        <div class="_sd g_col _4">
          <i class="g_thumb">
            <img :src="story?.avatar" :alt="story?.name" :title="story?.name" />
            <strong class="pa t0 r0 z1">original</strong>
          </i>
        </div>
        <div class="_mn g_col _8 pr">
          <h1 class="pt4 pb4 oh mb4 fs36 lh40 auto_height">
            {{ story?.name }}
            <small>
              {{ shortName }}
            </small>
          </h1>

          <h2 class="mb12 lh24 det-hd-detail c_000 fs0">
            <a title="Eastern Fantasy">
              <svg><use xlink:href="#i-0"></use></svg>
              <span>{{ story?.category?.name }}</span>
            </a>
            <strong>
              <svg><use xlink:href="#i-chapter"></use></svg>
              <span>947 Chapters</span>
            </strong>
            <strong>
              <svg><use xlink:href="#i-eye"></use></svg>
              <span>4.8M Views</span>
            </strong>
          </h2>

          <address class="lh20 mb24 pr">
            <h2 class="ell dib vam fs16 fw500">
              <strong class="c_s">Tác giả: </strong>
              <a class="c_primary" title="KevinAscending" href="/profile/3668440526?appId=10">
                {{ story?.authors }}
              </a>
            </h2>
          </address>
          <p class="_score ell mb24 fs0">
            <span class="g_star">
              <svg class="_on"><use xlink:href="#i-star"></use></svg>
              <svg class="_on"><use xlink:href="#i-star"></use></svg>
              <svg class="_on"><use xlink:href="#i-star"></use></svg>
              <svg class="_on"><use xlink:href="#i-star"></use></svg>
              <svg class="_half"><use xlink:href="#i-star"></use></svg>
            </span>
            <strong class="vam fs24 mr8">4.71</strong>
            <small class="fs16 dib vam">(361 ratings)</small>
          </p>

          <span class="dib vat j_rank_tag mb16"></span>
          <div class="_ft pa l0 r0">
            <h2 class="_bts">
              <a id="j_read" href="/book/paragon-of-sin_16856682305508105/chapter-1-wei-wuyin_45249436921691008" title="read" class="bt" data-report-eid="qi_C01" data-report-bid="16856682305508105"> Read </a>
              <a href="###" data-report-eid="qi_C02" data-bookid="16856682305508105" data-ntype="0" data-report-bid="16856682305508105" data-report-cid="" class="bt fs0 g_bt_add_lib _secondary _icon" title="Add to Library">
                            <span class="_removeLib">
                                <svg class="fs16"><use xlink:href="#i-right"></use></svg> <span class="btn_text fs16 vam">In Library</span>
                            </span>
                <span class="_addLib">
                                <svg class="fs16"><use xlink:href="#i-plus"></use></svg> <span class="btn_text fs16 vam">Add to Library</span>
                            </span>
              </a>
            </h2>
            <div class="_link_row fs0 pt16 lh20 pb16">
              <a class="dib j_reportStory" href="###" title="Report story">
                <svg class="mr8 fs14"><use xlink:href="#i-flag"></use></svg> <span class="fs14 vam">Report story</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {useStoryStore} from "~/store/story";
import {computed} from "#imports";
import {GetStory_story} from "~/apollo/comico/queries/__generated__/GetStory";

const storyStore = useStoryStore()

const story = computed<GetStory_story|undefined>(() => storyStore.story)

const shortName = computed(() => story.value.name?.split(' ').filter(word => word.trim()).map(word => word[0]).join(''))

</script>

<script lang="ts">
export default {
  name: "StoryDet"
}
</script>

<style scoped>

</style>
