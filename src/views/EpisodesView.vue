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
import Config from "@/config";

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
    async getEpisodes(indicator = true) {
      if (this.isLoading) {
        return;
      }


      if (indicator) {
        this.isLoading = true;
      }

      const response = await fetch(`${Config.URL}episodes/country/fr/page/${this.page}/limit/${this.limit}`);

      if (!response.ok) {
        if (indicator) {
          this.isLoading = false;
        }

        return;
      }

      const data = await response.json();
      this.episodes.push(...data);

      if (indicator) {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getEpisodes();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const bottomOfWindow = Math.abs(scrollTop + window.innerHeight - document.documentElement.offsetHeight) <= 5;

      if (bottomOfWindow) {
        this.page++;
        this.getEpisodes(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll);
  },
}
</script>
