<template>
  <div class="center" style="padding-top: 10px">
    <div class="text-center">
      <img alt="Jais icon" class="banner" src="../../public/img/jais_banner.webp" />

      <div style="margin: 25px 0">
        <h1 class="m-0">Jaïs</h1>
        <p class="m-0 slogan">Ne manquez aucune sortie d'animé en étant toujours au courant.</p>
      </div>

      <div class="center" style="margin-bottom: 25px">
        <p class="w-75 muted">Jaïs est votre compagnon ultime pour suivre les dernières sorties d'animés. En
          rassemblant des informations de divers sites populaires, Jaïs vous offre un accès centralisé aux
          données sur les animés récents. Grâce à notre site web et application mobile, recevez des
          notifications sur les nouveautés et restez toujours à jour. Faites confiance à Jaïs pour vous tenir
          informés et connectés au monde des animés.</p>
      </div>

      <div class="badges">
        <a href='https://play.google.com/store/apps/details?id=fr.ziedelth.jais&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img
            alt='Disponible sur Google Play' src='../assets/badge_playstore.png'
            style="width: 12.5rem"/></a>
        <a href="https://jais.ziedelth.fr/attachments/jais.apk">
          <img alt='Disponible avec un APK' src='../assets/badge_apk.png' style="width: 12.5rem"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  max-width: 750px;
  border: 1px solid var(--light);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 95%;
  }
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
}

.badges {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
}

.w-75 {
  width: 75%;

  @media (max-width: 768px) {
    width: 90%;
  }
}

.slogan {
  font-size: 1.5rem;
  font-weight: 400;
}
</style>

