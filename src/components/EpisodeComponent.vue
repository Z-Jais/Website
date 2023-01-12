<template>
  <div class="border">
    <div style="padding: 10px">
      <div class="row">
        <div class="col-10 overflow">
          <div class="bold platform-row">
            <img :src="`https://beta-api.ziedelth.fr/platforms/attachment/${episode.platform.uuid}`" :alt="`${episode.platform.name} image`" class="platform-image">
            {{ episode.platform.name }}
          </div>

          <router-link :to="`/animes/${episode.anime.uuid}`" class="bold mt-1 anime-name">{{ episode.anime.name }}</router-link>
          <div class="bold mt-1">{{ episode.title || '¯\_(ツ)_/¯' }}</div>
          <div class="mt-1">{{ information }}</div>
          <div class="mt-1 duration"><svg width="20" height="20" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M216 104H100.8l111.3-29.8a7.9 7.9 0 0 0 4.8-3.8a7.5 7.5 0 0 0 .8-6l-8.3-30.9a15.8 15.8 0 0 0-19.5-11.3L35.3 63.6A15.9 15.9 0 0 0 24 83.2l8 29.9V200a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a8 8 0 0 0-8-8Zm-87-49l29.4 17l-47.7 12.8l-29.4-17Zm65-17.4l6.2 23.2l-20 5.3l-29.4-16.9ZM59.4 73.7l29.4 16.9l-43.1 11.6L39.4 79ZM208 200H48v-80h160v80Z" fill="currentColor"/>
          </svg> {{ duration }}</div>
        </div>

        <div class="col-2">
          <img :src="`https://beta-api.ziedelth.fr/animes/attachment/${episode.anime.uuid}`" :alt="`${episode.anime.name} image`" class="image">
        </div>
      </div>

      <img :src="`https://beta-api.ziedelth.fr/episodes/attachment/${episode.uuid}`" class="image mt-1" alt="Episode image">

      <div class="mt-1">{{ since }}</div>
    </div>
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
  computed: {
    information() {
      let episodeType = 'Épisode';

      if (this.episode.episodeType.name === 'Spécial') {
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

      if (days > 0) {
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
:root {
  --variant: #ffa41b;
  --episode-line-height: 40px;
}

.border {
  border: 1px solid var(--variant);
  border-radius: 5px;
  box-sizing: border-box;
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
  border-radius: 50%;
}

.mt-1 {
  margin-top: 5px;
}

.image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.duration {
  display: flex;
  align-items: center;
  gap: 5px;
}

.anime-name {
  color: var(--variant);
  text-decoration: none;
}
</style>