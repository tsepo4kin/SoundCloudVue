<template>
  <v-list>
    <v-list-item-group>
      <v-list-item
        v-for="(track, i) in library"
        :key="i + 'track count'"
        outlined
      >
        <v-list-item-avatar>
          <v-img :src="track.img"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ track.trackName }}
          </v-list-item-title>

          <v-list-item-subtitle>
            {{ track.author }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    library: [
      {
        trackName: "Test name",
        author: "Test author",
        getLink: "qweqwe",
        img:
          "https://russianchicagomag.com/wp-content/uploads/2014/02/brainmusic.jpg",
      },
      {
        trackName: "Test name 1",
        author: "Test author 1",
        getLink: "qwezcve",
        img:
          "https://static6.depositphotos.com/1001599/569/i/950/depositphotos_5691496-stock-photo-treble-clef.jpg",
      },
      {
        trackName: "Test name 2",
        author: "Test author 2",
        getLink: "wasfd",
        img:
          "https://st2.depositphotos.com/2075965/6365/v/450/depositphotos_63653511-stock-illustration-abstract-colorful-music-notes.jpg",
      },
    ],
  }),
};
</script>

<style></style>
