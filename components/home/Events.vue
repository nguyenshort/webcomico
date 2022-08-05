<template>
  <div>
    <ul class="g_row create-wrap tac mb56">
      <li
          v-for="(image, index) in images"
          :key="index"
          class="g_col _4 m-create _1 pr oh"
      >
        <img class="pa t0 l0 w100% h100%" alt="" :src="image" style="display: block;" />
        <div class="m-create-text dib vam lh20 fs14">
          <h3 class="fs20 lh24 mb8">Original Stories</h3>
          <p>A Webnovel site for everyone.</p>
        </div>
        <a class="pa t0 l0 w100% h100%" href="/stories/novel" title="Original Stories" data-report-uiname="banner" data-exposure-repeat="" data-report-did="/stories/novel">
          <span class="dn">Thêm</span>
        </a>
      </li>
    </ul>
  </div>

</template>

<script lang="ts" setup>
import {ref} from "#imports";

const images = ref(['/images/1_2x.c8ad31e9.jpg', '/images/1_2x.c8ad31e9.jpg', '/images/1_2x.c8ad31e9.jpg']);
</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomeEvents"
})
</script>

<style scoped>

</style>
