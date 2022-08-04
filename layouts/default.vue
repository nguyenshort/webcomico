<template>
  <div id="default">
    <includes-header />
    <div class="g_header_ph"></div>
    <slot />
    <includes-footer />
  </div>
</template>

<script>
export default {
  name: "LayoutDefault"
}
</script>

<style scoped></style>
