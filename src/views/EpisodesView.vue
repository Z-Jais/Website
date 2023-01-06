<template>
  <div class="list">
    <div v-for="episode in episodes" :key="episode.uuid" class="item">
      <EpisodeLoadingComponent v-if="episode.loadingElement" />
      <EpisodeComponent :episode="episode" v-else />
    </div>
  </div>
</template>

<script>
import EpisodeComponent from "@/components/EpisodeComponent.vue";
import EpisodeLoadingComponent from "@/components/EpisodeLoadingComponent.vue";

export default {
  name: "EpisodesView",
  components: {EpisodeLoadingComponent, EpisodeComponent},
  data() {
    return {
      isLoading: false,
      limit: 9,
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

      const loadingEpisodes = Array.from({length: this.limit}, () => {
        return {
          uuid: crypto.randomUUID(),
          loadingElement: true,
        }
      });

      this.episodes = [...this.episodes, ...loadingEpisodes];

      const response = await fetch(`https://beta-api.ziedelth.fr/episodes/country/fr/page/${this.page}/limit/${this.limit}`);
      const episodeListWithoutLoading = this.episodes.filter(episode => !episode.loadingElement);

      if (!response.ok) {
        this.episodes = episodeListWithoutLoading;
        this.isLoading = false;
        return;
      }

      const data = await response.json();
      this.episodes = episodeListWithoutLoading.concat(data);
      this.isLoading = false;
      console.log(this.episodes);
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
</style>