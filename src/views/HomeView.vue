<template>
  <div class="center" style="padding-top: 10px">
    <div class="text-center">
      <img src="../assets/jais.webp" alt="Jais icon" width="128" height="128" class="circle-border">
      <h1 class="m-0" style="margin-top: 5px">Jaïs</h1>
      <p class="m-0 muted" style="padding: 5px 1rem">Ne manquez aucune sortie d'animé en étant toujours au courant.</p>

      <div class="badges">
        <a href='https://play.google.com/store/apps/details?id=fr.ziedelth.jais&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Disponible sur Google Play' src='../assets/badge_playstore.png' style="width: 12.5rem"/></a>
        <img alt='Disponible sur Google Play' src='../assets/badge_apk.png' style="width: 12.5rem"/>
        <img alt='Disponible sur Google Play' src='../assets/badge_windows.png' style="width: 12.5rem"/>
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
</style>

