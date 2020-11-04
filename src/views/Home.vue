<template>
  <div class="home">
    <h1>Sound app</h1>
    <p>Wrapper for soundCloud for listen music</p>
    <div v-if="!loader">{{playLists}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import spotify from '../spotifyApi/index'
export default {
  name: "Home",
  data: () => ({
    playLists: null,
    loader: true
  }),
  components: {},
  async mounted() { 
    this.playLists = await spotify.getUserPlaylists().then(res => resy);
    console.log(this.playLists)
    this.loader = false;
  }
};
</script>
