<template>
  <div class="border">
    <div class="row">
      <div class="row-9">
        <div class="row" style="margin-bottom: 5px">
          <div class="shimmer round" style="width: var(--episode-line-height); var(--episode-line-height)" />
          <div class="shimmer" style="width: 200px; height: var(--episode-line-height)" />
        </div>

        <div class="shimmer" style="width: 75%; height: var(--episode-line-height); margin-bottom: 10px" />
        <div class="shimmer" style="width: 50%; height: var(--episode-line-height); margin-bottom: 10px" />
        <div class="shimmer" style="width: 85%; height: var(--episode-line-height); margin-bottom: 10px" />
        <div class="shimmer" style="width: 30%; height: var(--episode-line-height);" />
      </div>

      <div class="row-1">
        <div class="shimmer" style="height: 180px" />
      </div>
    </div>

    <div class="shimmer" style="height: 300px; margin: 8px" />
    <div class="shimmer" style="width: 40%; height: var(--episode-line-height); margin: 8px" />
  </div>
</template>

<script>
export default {
  name: "EpisodeLoadingComponent",
}
</script>

<style lang="scss" scoped>
.shimmer {
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  animation: shimmer 5s infinite linear;
  border-radius: 5px;
}

.border {
  border: 1px solid #f6f7f8;
  border-radius: 5px;
}

.row {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 8px;

  .row-9 {
    flex: 9;
  }

  .row-1 {
    flex: 3;
  }
}

.round {
  border-radius: 50%;
}

@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>