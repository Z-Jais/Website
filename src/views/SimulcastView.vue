<template>
  <h2>Simulcast</h2>
<!--  <v-md-editor v-model="text"></v-md-editor>-->

  <div style="display: grid; grid-template-columns: 20% 75%; margin-left: 10%;">
    <div class="text-center" style="margin-top: 15%;">
      <img width="120" height="120" class="circle-border" src="https://pbs.twimg.com/profile_images/1653026449232654337/ulrljXDu_400x400.jpg">
      <p class="p-0 mt-1 m-0">Rédigé par @Ziedelth</p>
      <p class="small p-0 m-0">Publié le 18/08/2023</p>
    </div>
    <div class="text-left">
      <v-md-preview :text="text"></v-md-preview>
    </div>
  </div>
</template>

<script>
import Config from "@/config";

export default {
  name: "SimulcastView",
  data() {
    return {
      text: '# Welcome to the Jaïs organization\n' +
          '\n' +
          'Jaïs is a open source project that aims to collect all anime episodes available on platforms like ADN (Animation Digital Network), Crunchyroll, Netflix, Wakanim, etc. and make them available to the public.\n' +
          '\n' +
          '## Today\'s structure\n' +
          '\n' +
          '<img src="https://github.com/Z-Jais/.github/blob/main/assets/today_structure.png?raw=true" alt="Today\'s structure">\n' +
          '\n' +
          '## Planned structure\n' +
          '\n' +
          '<img src="https://github.com/Z-Jais/.github/blob/main/assets/planned_structure.png?raw=true" alt="Planned structure">',

      simulcastUuid: this.$route.params.uuid,
      isLoading: false,
      isScrollLoading: false,
      limit: 12,
      page: 1,
      canLoadMore: true,
      animes: [],
    }
  },
  computed: {
    Config() {
      return Config
    },
  },
  methods: {
    async getAnimes() {
      if (!this.canLoadMore) {
        return;
      }

      const response = await fetch(`${Config.URL}animes/country/fr/simulcast/${this.simulcastUuid}/page/${this.page}/limit/${this.limit}`);

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      this.animes.push(...data);

      if (data.length < this.limit) {
        this.canLoadMore = false;
      }
    },
    async handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const bottomOfWindow = Math.abs(scrollTop + window.innerHeight - document.documentElement.offsetHeight) <= 5;

      if (bottomOfWindow && !this.isScrollLoading && this.canLoadMore) {
        this.isScrollLoading = true;
        requestAnimationFrame(() => window.scrollBy({top: 500, behavior: 'smooth'}));
        await new Promise(resolve => setTimeout(resolve, 250));
        this.page++;
        await this.getAnimes();
        this.isScrollLoading = false;
      }
    }
  },
  async mounted() {
    this.isLoading = true;
    await this.getAnimes();
    this.isLoading = false;

    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('touchmove', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('touchmove', this.handleScroll);
  }
}
</script>