<template>
  <div class="navbar">
    <img alt="Vue logo" src="../assets/icon.webp" class="navbar-icon">
    <ul>
      <li><a href="#" class="active" @click="onLinkClick($event)">Accueil</a></li>
      <li><a href="#" @click="onLinkClick($event)">Jaïs</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    onLinkClick: function (event) {
      // Remove the active class from all links
      const links = document.querySelectorAll('.navbar ul li a');

      links.forEach((link) => {
        link.classList.remove('active');
      });

      // Add the active class to the clicked link
      event.target.classList.add('active');
    }
  }
}
</script>

<style scoped>
.navbar {
  height: var(--logo-size);
  background-color: var(--light);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 10px;
  display: flex;
}

.navbar-icon {
  width: var(--logo-size);
  height: var(--logo-size);
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
}

.navbar ul li {
  margin: 0 10px;
}

.navbar ul li a {
  color: var(--dark);
  text-decoration: none;
  font-size: 18px;
}

.navbar ul li a.active {
  color: var(--dark);
  border-bottom: 2px solid var(--dark);
  padding-bottom: 8px;
}

.navbar ul li a:hover {
  color: var(--dark);
  border-bottom: 2px solid var(--dark);
  padding-bottom: 8px;
  transition: all 0.2s ease-in-out;
}
</style>