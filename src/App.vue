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

export default {
  name: 'App',
  components: {NavBar},
}
</script>

<style>
:root {
  --logo-size: 32px;
  --line-height: 1.5;

  --light: #faf6f7;
  --dark: #313237;
  --variant: #a38e97;

  --episode-line-height: 25px;
}

* {
  color: var(--dark);
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

hr {
  border: 0;
  border-top: 1px solid var(--variant);
  margin: 0 auto;
  width: 95%;
}
</style>
