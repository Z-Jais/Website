<template>
  <header>
    <NavBar />
  </header>

  <ThreadComponent>
    <div class="thread-container">
      <img src="./assets/icon.webp" alt="">
    </div>
    <div class="thread-container">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac vestibulum magna, non tristique dui. Nulla quis nulla quis mi blandit pretium. Quisque ac turpis sit amet mauris congue elementum sit amet id sapien. Suspendisse a nibh ultrices, blandit nulla id, bibendum eros. In commodo, ante in pulvinar posuere, ligula mauris tincidunt leo, sed posuere metus mi non tortor. Suspendisse id lorem quam. Donec scelerisque consectetur erat at eleifend. Integer sit amet ornare nunc. Sed ipsum nunc, interdum eget auctor pharetra, interdum non nunc. Morbi tristique mollis nunc. Integer suscipit sem et justo lacinia, ut maximus lorem fermentum. Sed consectetur facilisis dolor in rutrum. Integer condimentum sapien nec lacus rutrum scelerisque at quis ante.
      Sed bibendum bibendum iaculis. Proin nunc felis, rhoncus vel justo eget, aliquam luctus neque. Mauris scelerisque, quam non ullamcorper scelerisque, neque felis pulvinar sapien, et suscipit erat ligula in nunc. Sed sit amet tempor nibh. Sed et cursus tortor. Donec vitae volutpat nisi, nec viverra mauris. Morbi metus diam, varius vitae vehicula eget, mollis ac nulla. In ac urna vitae lectus sodales condimentum in a nibh. Proin convallis in tellus et vestibulum. Fusce dui nisl, rutrum faucibus leo nec, dapibus aliquam nulla. Morbi ac pulvinar turpis, vel pellentesque diam. Suspendisse in turpis eu arcu tempor laoreet. Curabitur eu turpis quam. Curabitur nulla lacus, posuere vitae massa quis, aliquam tincidunt felis. Ut auctor eget elit nec tincidunt.
      Maecenas nec arcu in orci tincidunt pharetra aliquet mollis est. Nullam sodales enim eget lobortis posuere. Pellentesque semper quam malesuada, convallis neque in, scelerisque ligula. Sed posuere molestie nunc. Aliquam dapibus dui massa, non luctus libero eleifend eget. Nunc tristique lectus arcu, a ullamcorper tortor placerat sit amet. Ut eleifend scelerisque lectus sed dictum. Suspendisse potenti. Suspendisse pellentesque dictum neque, non consequat risus posuere id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut iaculis tortor. Nulla facilisi. Sed velit urna, blandit hendrerit massa at, consequat dictum odio. Vivamus tellus libero, ornare eget dolor nec, rutrum elementum neque.
    </div>
  </ThreadComponent>

  <hr>

  <ThreadComponent>
    <div class="thread-container">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac vestibulum magna, non tristique dui. Nulla quis nulla quis mi blandit pretium. Quisque ac turpis sit amet mauris congue elementum sit amet id sapien. Suspendisse a nibh ultrices, blandit nulla id, bibendum eros. In commodo, ante in pulvinar posuere, ligula mauris tincidunt leo, sed posuere metus mi non tortor. Suspendisse id lorem quam. Donec scelerisque consectetur erat at eleifend. Integer sit amet ornare nunc. Sed ipsum nunc, interdum eget auctor pharetra, interdum non nunc. Morbi tristique mollis nunc. Integer suscipit sem et justo lacinia, ut maximus lorem fermentum. Sed consectetur facilisis dolor in rutrum. Integer condimentum sapien nec lacus rutrum scelerisque at quis ante.
      Sed bibendum bibendum iaculis. Proin nunc felis, rhoncus vel justo eget, aliquam luctus neque. Mauris scelerisque, quam non ullamcorper scelerisque, neque felis pulvinar sapien, et suscipit erat ligula in nunc. Sed sit amet tempor nibh. Sed et cursus tortor. Donec vitae volutpat nisi, nec viverra mauris. Morbi metus diam, varius vitae vehicula eget, mollis ac nulla. In ac urna vitae lectus sodales condimentum in a nibh. Proin convallis in tellus et vestibulum. Fusce dui nisl, rutrum faucibus leo nec, dapibus aliquam nulla. Morbi ac pulvinar turpis, vel pellentesque diam. Suspendisse in turpis eu arcu tempor laoreet. Curabitur eu turpis quam. Curabitur nulla lacus, posuere vitae massa quis, aliquam tincidunt felis. Ut auctor eget elit nec tincidunt.
      Maecenas nec arcu in orci tincidunt pharetra aliquet mollis est. Nullam sodales enim eget lobortis posuere. Pellentesque semper quam malesuada, convallis neque in, scelerisque ligula. Sed posuere molestie nunc. Aliquam dapibus dui massa, non luctus libero eleifend eget. Nunc tristique lectus arcu, a ullamcorper tortor placerat sit amet. Ut eleifend scelerisque lectus sed dictum. Suspendisse potenti. Suspendisse pellentesque dictum neque, non consequat risus posuere id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut iaculis tortor. Nulla facilisi. Sed velit urna, blandit hendrerit massa at, consequat dictum odio. Vivamus tellus libero, ornare eget dolor nec, rutrum elementum neque.
    </div>
    <div class="thread-container">
      <img src="./assets/icon.webp" alt="">
    </div>
  </ThreadComponent>
</template>

<script>
import NavBar from "@/components/NavBar";
import ThreadComponent from "@/components/ThreadComponent";

export default {
  name: 'App',
  components: {ThreadComponent, NavBar},
}
</script>

<style>
:root {
  --logo-size: 32px;
  --line-height: 1.5;

  --light: #faf6f7;
  --dark: #313237;
  --variant: #a38e97;
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
