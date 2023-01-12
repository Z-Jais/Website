<template>
  <div v-if="isLoading" class="center">
    <SpinnerComponent/>
  </div>

  <div v-else class="list">
    <EpisodeComponent v-for="episode in episodes" :key="episode.uuid" :episode="episode" class="item"/>
  </div>
</template>

<script>
import EpisodeComponent from "@/components/EpisodeComponent.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";

export default {
  name: "EpisodesView",
  components: {SpinnerComponent, EpisodeComponent},
  data() {
    return {
      isLoading: false,
      limit: 12,
      page: 1,
      episodes: [],
    }
  },
  methods: {
    async getEpisodes() {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      const response = await fetch(`https://beta-api.ziedelth.fr/episodes/country/fr/page/${this.page}/limit/${this.limit}`);

      if (!response.ok) {
        this.isLoading = false;
        return;
      }

      const data = await response.json();
      this.episodes.push(...data);
      this.isLoading = false;
    },
  },
  mounted() {
    this.getEpisodes();
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  grid-gap: 1rem;
  padding: 1rem;

  .item {
    grid-column: auto;
    grid-row: auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(9, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>