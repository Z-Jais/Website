<template>
  <div class="border">
    <div class="row">
      <div class="row-9">
        <div class="row" style="margin-bottom: 5px">
          <img :src="`https://beta-api.ziedelth.fr/platforms/attachment/${episode.platform.uuid}`" width="25" height="25" class="round" :alt="episode.platform.name">
          <div style="width: 200px; height: var(--episode-line-height); font-weight: bold;">{{ episode.platform.name }}</div>
        </div>

        <div class="overflow" style="width: 75%; height: var(--episode-line-height); margin-bottom: 5px; font-weight: bold;">{{ episode.anime.name }}</div>
        <div class="overflow" style="width: 50%; height: var(--episode-line-height); margin-bottom: 5px; font-weight: bold;">{{ episode.title }}</div>
        <div style="width: 85%; height: var(--episode-line-height); margin-bottom: 5px">Saison {{ episode.season }} • Épisode {{ episode.number }} VOSTFR</div>
        <div style="width: 30%; height: var(--episode-line-height);">{{ episode.duration }}</div>
      </div>

      <div class="row-1">
        <img class="rounded" :src="`https://beta-api.ziedelth.fr/animes/attachment/${episode.anime.uuid}`" :alt="episode.anime.name" style="height: 180px" />
      </div>
    </div>

    <img class="rounded" :src="`https://beta-api.ziedelth.fr/episodes/attachment/${episode.uuid}`" alt="Episode image" style="width: auto; margin: 8px; object-fit: none; object-position: center" />
    <div class="shimmer" style="width: 40%; height: var(--episode-line-height); margin: 8px" />
  </div>
</template>

<script>
export default {
  name: "EpisodeComponent",
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.overflow {
  text-overflow: ellipsis;
  overflow:hidden;
  white-space: nowrap;
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

  align-items: center;
  align-content: center;

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

.rounded {
  border-radius: 5px;
}
</style>