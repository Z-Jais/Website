<template>
  <div class="navbar">
    <img alt="Vue logo" class="navbar-icon" height="32" src="../assets/icon.webp" width="32">
    <ul>
      <li v-for="link in links" :key="link.name">
        <router-link :to="link.to" exact-active-class="active">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      links: [
        {name: 'Accueil', to: '/'},
        {name: 'Épisodes', to: '/episodes'},
        {name: 'Animés', to: '/animes'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: var(--logo-size);
  background-color: var(--light);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 10px;
  display: flex;

  .navbar-icon {
    width: var(--logo-size);
    height: var(--logo-size);
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;

    li {
      margin: 0 10px;

      a {
        color: var(--dark);
        text-decoration: none;
        font-size: 18px;

        &.active {
          color: var(--dark);
          border-bottom: 2px solid var(--dark);
          padding-bottom: 8px;
        }
      }
    }
  }
}
</style>