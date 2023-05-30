<template>
  <div v-if="isLoading" class="center">
    <SpinnerComponent/>
  </div>

  <div v-else class="list">
    <EpisodeComponent v-for="episode in episodes" :key="episode.uuid" :episode="episode" class="item"/>
  </div>

  <div v-if="isScrollLoading" class="center">
    <SpinnerComponent/>
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
      isScrollLoading: false,
      limit: 12,
      page: 1,
      episodes: [],
    }
  },
  methods: {
    async getEpisodes() {
      const response = await fetch(`${Config.URL}episodes/country/fr/page/${this.page}/limit/${this.limit}`);

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      this.episodes.push(...data);
    },
  },
  async mounted() {
    this.isLoading = true;
    await this.getEpisodes();
    this.isLoading = false;

    const handleScroll = async () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const bottomOfWindow = Math.abs(scrollTop + window.innerHeight - document.documentElement.offsetHeight) <= 5;

      if (bottomOfWindow && !this.isScrollLoading) {
        this.isScrollLoading = true;
        requestAnimationFrame(() => window.scrollBy({top: 500, behavior: 'smooth'}));
        await new Promise(resolve => setTimeout(resolve, 250));
        this.page++;
        await this.getEpisodes();
        this.isScrollLoading = false;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll);
  },
}
</script>
