<template>
  <v-container>
    <v-row justify="space-around">
      <v-card style="width: 100vw">
        <v-img
          class="headerContent"
          max-width="1200px"
          height="400px"
          :src="
            newsDetail?.urlToImage
              ? newsDetail.urlToImage
              : 'http://localhost:8080/logo.png'
          "
        >
          <v-card-title class="white--text pa-0 heading">
            <h1>
              {{ newsDetail.title }}
            </h1>
          </v-card-title>
        </v-img>
        <v-card-text>
          <div class="ml-8 mb-2">
            <p class="description">{{ newsDetail.description }}</p>
            <v-col class="pa-0 footer">
              <p class="ma-0">-{{ newsDetail.author }}</p>
              <p class="ma-0" v-if="newsDetail.publishedAt">
                {{ newsDetail.publishedAt?.split("T")[0] }}
              </p>
            </v-col>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "NewsDetailView",

  data() {
    return {
      state: this.$store.state,
    };
  },
  computed: {
    news() {
      return this.state?.news;
    },
    newsDetail() {
      return this.news[this.$route.params["index"]];
    },
  },
};
</script>
<style>
.heading {
  word-break: normal;
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
}
.headerContent {
  align-items: end;
}
.description {
  font-size: 20px;
  text-align: left;
}
.footer {
  font-size: 14px;
  text-align: left;
}
</style>
