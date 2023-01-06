<template>
  <div class="border">
    <div style="padding: 15px">
      <div class="row">
        <div class="col-9 overflow">
          <div class="bold" style="display: flex; gap: 5px; align-items: center">
            <img :src="`https://beta-api.ziedelth.fr/platforms/attachment/${episode.platform.uuid}`" alt="Platform image" style="width: var(--episode-line-height)">
            {{ episode.platform.name }}
          </div>

          <div class="bold" style="margin-top: 5px">{{ episode.anime.name }}</div>
          <div style="margin-top: 5px">{{ episode.title || 'Truc bidon' }}</div>
          <div style="margin-top: 5px">Saison {{ episode.season }} • Épisode {{ episode.number }} VOSTFR</div>
          <div style="margin-top: 5px">{{ episode.duration }}</div>
        </div>

        <div class="col-1">
          <img :src="`https://beta-api.ziedelth.fr/animes/attachment/${episode.anime.uuid}`" alt="Anime image" style="width: 100%">
        </div>
      </div>

      <img :src="`https://beta-api.ziedelth.fr/episodes/attachment/${episode.uuid}`" alt="Episode image" style="width: 100%">

      <div style="margin-top: 5px">{{ episode.releaseDate }}</div>
    </div>
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
.border {
  border: 1px solid #f6f7f8;
  border-radius: 5px;
  box-sizing: border-box;
}

.overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.row {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-spacing: 5px;
}

.col-9 {
  display: table-cell;
  width: 75%;
  vertical-align: middle;
}

.col-1 {
  display: table-cell;
  width: 25%;
  vertical-align: middle;
}

.bold {
  font-weight: bold;
}
</style>