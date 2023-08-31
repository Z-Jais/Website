<template>
  <header>
    <NavBar/>
  </header>

  <main>
    <router-view/>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar";
import Config from "@/config";

export default {
  name: 'App',
  components: {NavBar},
  methods: {
    updateCanonical(url) {
      const head = document.getElementsByTagName('head')[0];
      let element = document.querySelector('link[rel="canonical"]') || null;

      if (element == null) {
        element = document.createElement('link');
        head.appendChild(element);
      }

      element.setAttribute('rel', 'canonical');
      element.setAttribute('href', url);
    }
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.updateCanonical(Config.HOST_NAME + this.$route.path);
        },
        {immediate: true}
    )
  }
}
</script>

<style lang="scss">
@import "@/assets/main";

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 1rem;
  padding: 1rem;

  .item {
    grid-column: auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
