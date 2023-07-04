<template>
  <div class="container">
    <img alt="404 Image" src="../assets/404.webp">
    <h1>Oops! Page introuvable.</h1>
    <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style lang="scss" scoped>
.container {
  margin: 20px auto 0;
  text-align: center;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 40px;
}

img {
  max-width: 75%;
}
</style>

