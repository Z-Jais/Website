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
