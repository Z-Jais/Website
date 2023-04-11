<template>
    <div v-if="isLoading" class="center">
        <SpinnerComponent/>
    </div>

    <div v-else-if="anime.uuid != null">
        <div class="header">
            <img :alt="`${anime.name} image`"
                 :src="`https://beta-api.ziedelth.fr/animes/attachment/${anime.uuid}`" class="image"
                 height="500"
                 width="350">

            <div class="presentation">
                <div class="title">{{ anime.name }}</div>
                <div class="simulcasts">{{ simulcasts }}</div>
                <div class="description">{{ anime.description }}</div>
            </div>
        </div>

        <div class="list">
            <EpisodeComponent v-for="episode in episodes" :key="episode.uuid" :episode="episode" class="item"/>
        </div>
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
            animeUuid: this.$route.params.uuid,
            isLoading: false,
            limit: 12,
            page: 1,
            canLoadMore: true,
            anime: {},
            episodes: [],
        }
    },
    computed: {
        simulcasts() {
            const simulcasts = this.anime.simulcasts;

            if (!simulcasts) {
                return "";
            }

            simulcasts.sort((a, b) => {
                if (a.year > b.year) {
                    return 1;
                } else if (a.year < b.year) {
                    return -1;
                } else {
                    if (a.season === "WINTER") {
                        return -1;
                    } else if (a.season === "SPRING") {
                        return b.season === "WINTER" ? 1 : -1;
                    } else if (a.season === "SUMMER") {
                        return b.season === "AUTUMN" ? -1 : 1;
                    } else {
                        return 1;
                    }
                }
            });

            const array = [];

            for (const simulcast of simulcasts) {
                const season = simulcast.season === "WINTER" ? "Hivers" : simulcast.season === "SPRING" ? "Printemps" : simulcast.season === "SUMMER" ? "Été" : "Automne";
                array.push(`${season} ${simulcast.year}`);
            }

            return array.join(" - ");
        },
    },
    methods: {
        async getEpisodes() {
            if (!this.canLoadMore) {
                return;
            }

            const response = await fetch(`${Config.URL}episodes/anime/${this.animeUuid}/page/${this.page}/limit/${this.limit}`);

            if (!response.ok) {
                return;
            }

            const data = await response.json();
            this.anime = data[0].anime;
            this.episodes.push(...data);

            if (data.length < this.limit) {
                this.canLoadMore = false;
            }
        },
    },
    async mounted() {
        this.isLoading = true;
        await this.getEpisodes();
        this.isLoading = false;

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

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    padding: 0 1rem;
    gap: 25px;

    .image {
        border-radius: 5px;
        height: 30vh;
        width: auto;
        border: 1px solid var(--variant);
    }

    .presentation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        .title {
            font-size: 2rem;
            font-weight: 600;
            color: var(--primary);
        }

        .description {
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--primary);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;

        .image {
            width: 100%;
            height: auto;
        }
    }
}
</style>