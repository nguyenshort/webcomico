<template>
  <div>
    <div class="g_hr pb12 mb16 g_wrap">
      <div class="clearfix">
        <a class="fr ml8 mt8 fw600 lh16 fs14 ttu c_primary ls0.2" href="/ranking/novel/all_time/power_rank?sourceType=0&amp;timeType=4&amp;signStatus=1" title="Ranking"> More </a>
        <h3 class="fw700 lh32 fs24 ls0.15 ell">
          Xếp Hạng Tháng
        </h3>
      </div>
    </div>
    <input id="m7005Swtich5fffe3c7af867252d05d6904" type="checkbox" class="pa vh m-7005-switch" />

    <div class="g_row mb12 m-7005-bd td300 oh">
      <home-ranking-column title="Lượt Xem"></home-ranking-column>
      <home-ranking-column title="Đánh Giá"></home-ranking-column>
      <home-ranking-column title="Sưu Tập"></home-ranking-column>
    </div>
    <label for="m7005Swtich5fffe3c7af867252d05d6904" class="db fw600 lh16 fs14 ttu c_primary ls0.2 pt8 pb8 g_wrap tac m-7005-trigger" title="Extend more">
      Xem Thêm
    </label>
  </div>

</template>

<script>
export default {
  name: "HomeRanking"
}
</script>

<style scoped>

</style>
