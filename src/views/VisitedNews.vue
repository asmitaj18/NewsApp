<template>
   <v-row>
    <v-col v-for="(article, i) of visitedNews"
        :key="i" sm="3" cols="12">
        <NewsCard
        @edit="onEditClick(i)"
        @goToDetail="go(i)"
        :article="article"
        :index="i"
        :showToolbar="false"
      />
    </v-col>
  </v-row>
  <!-- End  -->
</template>

<script>
import NewsCard from "@/components/NewsCard/NewsCard.vue";
export default {
  name: "NewsView",
  components: {
    NewsCard,
  },
  data() {
    return {
      visitedNews: this.$store.state.visited
    }
  }
};
</script>
