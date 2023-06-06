<template>
  <div class="episode">
    <div class="row">
      <div class="col-10 overflow">
        <a :href="episode.platform.url" target="_blank">
          <div class="bold platform-row">
            <img :alt="`${episode.platform.name} image`"
                 :src="`https://beta-api.ziedelth.fr/platforms/attachment/${episode.platform.uuid}`"
                 class="platform-image circle-border"
                 height="25"
                 loading="lazy"
                 width="25">
            {{ episode.platform.name }}
          </div>
        </a>

        <router-link :to="animeLink" class="bold mt-1 anime-name">
          {{ episode.anime.name }}
        </router-link>
        <div class="bold mt-1">{{ episode.title || '¯\_(ツ)_/¯' }}</div>
        <div class="mt-1">{{ information }}</div>
      </div>

      <div class="col-2 text-right">
        <router-link :to="animeLink">
          <img :alt="`${episode.anime.name} image`"
               :src="`https://beta-api.ziedelth.fr/animes/attachment/${episode.anime.uuid}`" class="image anime-image"
               height="500"
               loading="lazy"
               width="350">
        </router-link>
      </div>
    </div>

    <a :href="episode.url" target="_blank">
      <div class="image-container">
        <img v-if="!imageError" :src="`https://beta-api.ziedelth.fr/episodes/attachment/${this.episode.uuid}`"
             alt="Episode image" class="image mt-1" height="360" loading="lazy" width="640"
             @error="imageError = true">
        <div v-else class="mt-1 bold border"
             style="background-color: #000000; color: #ffffff; padding: 10px; width: 100%; min-height: 340px; text-align: center;">
          Image indisponible
        </div>

        <div class="duration">
          {{ duration }}
        </div>
      </div>
    </a>

    <div class="mt-1">{{ since }}</div>
  </div>
</template>

<script>
export default {
  name: "EpisodeComponent",
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageError: false,
    };
  },
  computed: {
    animeLink() {
      return `/anime/${this.episode.anime.uuid}`;
    },
    information() {
      let episodeType = 'Épisode';

      if (this.episode.episodeType.name === 'SPECIAL') {
        episodeType = 'Spécial';
      } else if (this.episode.episodeType.name === 'FILM') {
        episodeType = 'Film';
      }

      let langType = 'VOSTFR';

      if (this.episode.langType.name === 'VOICE') {
        langType = 'VF';
      }

      return 'Saison ' + this.episode.season + ' • ' + episodeType + ' ' + this.episode.number + ' ' + langType;
    },
    duration() {
      // Format this.episode.duration to 00:00:00
      const duration = this.episode.duration;

      if (duration === null || duration === undefined || duration <= 0) {
        return '??:??';
      }

      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration - (hours * 3600)) / 60);
      const seconds = duration - (hours * 3600) - (minutes * 60);

      let hoursString = hours.toString();
      let minutesString = minutes.toString();
      let secondsString = seconds.toString();

      if (hours < 10) {
        hoursString = '0' + hoursString;
      }

      if (minutes < 10) {
        minutesString = '0' + minutesString;
      }

      if (seconds < 10) {
        secondsString = '0' + secondsString;
      }

      return (hours <= 0 ? '' : hoursString + ':') + minutesString + ':' + secondsString;
    },
    since() {
      // Format this.episode.releaseDate to "Il y a X (minutes|heures|jours)"
      const releaseDate = new Date(this.episode.releaseDate);
      const now = new Date();
      const diff = now - releaseDate;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);

      if (months > 0) {
        return 'Il y a ' + months + ' mois';
      } else if (days > 0) {
        return 'Il y a ' + days + ' jour' + (days > 1 ? 's' : '');
      } else if (hours > 0) {
        return 'Il y a ' + hours + ' heure' + (hours > 1 ? 's' : '');
      } else if (minutes > 0) {
        return 'Il y a ' + minutes + ' minute' + (minutes > 1 ? 's' : '');
      } else {
        return 'Il y a ' + seconds + ' seconde' + (seconds > 1 ? 's' : '');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.episode {
  padding: 10px;
  background-color: var(--background);
  border: 1px solid var(--card-border-color);
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  align-content: center;
  align-items: center;
}

.col-10 {
  grid-column: span 10;
}

.col-2 {
  grid-column: span 2;
}

.bold {
  font-weight: bold;
}

.platform-row {
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 5px;
}

.platform-image {
  width: var(--episode-line-height);
}

.mt-1 {
  margin-top: 5px;
}

.image {
  max-width: 100%;
  height: auto;
  border-radius: 3px;
}

.text-right {
  text-align: right;
}

.anime-name {
  color: var(--dark);
  text-decoration: none;
}

.anime-image {
  width: 80%;
}

a {
  color: inherit;
  text-decoration: none;
}

.image-container {
  position: relative;

  .duration {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 0.8rem;
    font-weight: bold;
    color: #ffffff;
  }
}
</style>