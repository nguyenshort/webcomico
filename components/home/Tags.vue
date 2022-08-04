<template>
  <div style="margin-bottom: -24px;">
    <div class="g_hr pb12 mb20 g_wrap _scope">
      <div class="clearfix">
        <a class="bt _link _m fr ml8 mt-4 mr-12" href="/tag-list?orderBy=POPULAR" title="Gắn Thẻ">Xem thêm</a>
        <h3 class="fw700 lh32 fs24 ls0.15 ell">Gắn Thẻ</h3>
      </div>
    </div>
    <section class="g_wrap _switch_target">
      <div>
        <a
            v-for="tag in tags"
            :key="tag.slug"
            :title="tag.name"
            class="m-7007-tag fw600 lh16 fs14 ttu c_primary ls0.2 dib vat pt16 pb16 pr16 pl16 bc_fff mr24 mb24 td200 ell"
            href="/tags/romance-novel"
        >
          {{ tag.name.toUpperCase() }}
        </a>
      </div>
    </section>
  </div>

</template>

<script lang="ts" setup>

import {useQuery} from "@vue/apollo-composable";
import {GetTags, GetTagsVariables} from "~/apollo/comico/queries/__generated__/GetTags";
import {GET_TAGS} from "~/apollo/comico/queries/tags";
import {computed} from "#imports";

const { result } = useQuery<GetTags, GetTagsVariables>(GET_TAGS, {
  filter: {
    sort: 'name',
    offset: 0,
    limit: 10,
  }
})
const tags = computed(() => result.value?.tags || [])

</script>

<script lang="ts">
import {defineComponent} from "#imports";

export default defineComponent({
  name: "HomeTags"
})
</script>

<style scoped>

</style>
