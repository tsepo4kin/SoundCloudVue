<template>
  <v-container>
    <v-card class="mx-auto">
      <v-row>
        <v-col lg="9" md="9">
          <v-slider dense messages="name audio">
            <template v-slot:prepend>
              <v-btn icon color="black" class="ml-3">
                <v-icon class="display-1">mdi-play-circle</v-icon>
              </v-btn>

              <v-btn icon color="black">
                <v-icon class="display-1">mdi-skip-previous</v-icon>
              </v-btn>

              <v-btn icon color="black">
                <v-icon class="display-1">mdi-skip-next</v-icon>
              </v-btn>
            </template>
          </v-slider>
        </v-col>

        <v-col lg="3" md="3">
          <v-slider messages="volume">
            <template v-slot:prepend>
              <v-btn icon color="black">
                <v-icon class="display-1">mdi-volume-high</v-icon>
              </v-btn>
            </template>

            <template v-slot:append>
              <v-btn icon color="black">
                <v-icon class="display-1">mdi-repeat</v-icon>
              </v-btn>

              <v-btn icon color="black" class="mr-3">
                <v-icon class="display-1">mdi-shuffle-variant</v-icon>
              </v-btn>
            </template>
          </v-slider>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
