<template>
  <div class="g_row mb48">
    <div class="g_col _6">
      <div>
        <h3 class="fw700 lh32 fs24 ls0.15 ell pb12 mb8">Weekly Book</h3>
        <section class="m-banner j_7001_0_banner pr br4 oh bc_light_default">
          <input type="radio" name="m-banner-switch-0" class="pa vh o0 m-banner-switch" id="mBannerSwitch_0_0" checked="checked">
          <a href="https://www.webnovel.com/book/divine-god-against-the-heavens_17605463906866605" title="Divine God Against The Heavens" class="pa br4 t0 l0 w100% h100% oh vh o0 m-banner-pane _pane td200">
            <img class="td200 db pa t0 l0 w100% h100%" width="940" height="560" src="https://webbanner.webnovel.com/utils/1657532366_827800.jpg?imageMogr2/quality/80" alt="Divine God Against The Heavens">
          </a>
        </section>
      </div>
    </div>
    <div class="g_col _6" id="blockId-6007e6b4efbaab775677cb39-1">
      <div>
        <h3 class="fw700 lh32 fs24 ls0.15 ell pb12 g_hr">Meet Webnovel</h3>
        <ul>
          <li v-for="index in 3" :key="index" class="pr clearfix pt16 pb16 g_hr tdu_h m-1012-item td200">
            <img class="fr ml8 br4" width="104" height="64" src="https://webbanner.webnovel.com/utils/1651846010_730275.png?imageMogr2/quality/80" alt="Join WSA 2022!">
            <div class="oh">
              <h4 class="fw700 lh20 fs16 ls0.15 ell mb4">Join WSA 2022!</h4>
              <p class="fw400 lh20 fs14 ls0.2 c_m ells _2">Seize the chance to win US$10,000!</p>
            </div>
            <a class="pa t0 l0 w100% h100%" href="https://activity.webnovel.com/noah/202204251" title="Join WSA 2022!">
              <span class="vh">More</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "#imports";

export default defineComponent({
  name: "HomeBanner"
})
</script>
