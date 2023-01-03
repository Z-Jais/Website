<template>
  <div class="container">
    <div><img alt="" src="../assets/icon.webp"></div>
    <div><img alt="" src="../assets/icon.webp"></div>
    <div><img alt="" src="../assets/icon.webp"></div>
  </div>
</template>

<script>
export default {
  name: "EpisodesList"
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.container > div {
  width: 1/3;
}

img {
  width: 100%;
}
</style>