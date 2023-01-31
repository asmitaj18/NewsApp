<!-- Functional Component for 
     rendring reusable item 
     This component will not store any
     state or instance.
     it is a dumb component
    -->
<template functional>
  <v-card outlined testid="news-card">
    <!-- Toolbar -->
    <v-toolbar
      testid="news-card-toolbar"
      v-if="props.showToolbar"
      class="d-flex align-end flex-column"
      color="grey"
      flat
      height="30px"
    >
      <v-btn
        id="news-card-edit-btn"
        color="white"
        icon
        v-on:click="listeners.edit"
      >
        <v-icon small>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        testid="news-card-detail-btn"
        color="white"
        icon
        v-on:click="listeners.goToDetail"
      >
        <v-icon small>mdi-arrow-right</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Card Image -->
    <v-img
      testid="news-card-image"
      height="200px"
      width="600px"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.8)"
      :src="
        props.article.urlToImage
          ? props.article.urlToImage
          : 'http://localhost:8080/logo.png'
      "
    >
      <!-- Card title and sub title -->
      <v-card-subtitle
        testid="news-card-date"
        v-if="props.article.publishedAt"
        class="pb-0 text-left"
      >
        {{ props.article.publishedAt.split("T")[0] }}
      </v-card-subtitle>
      <v-card-subtitle
        testid="news-card-headline"
        class="pt-0 text-subtitle-1 text-left"
      >
        {{ props.article.title }}
      </v-card-subtitle>
      <v-card-text
        testid="news-card-desc"
        v-if="props.article.description"
        class="pt-0 text-left"
      >
        {{ props.article.description.substring(0, 40) + "...." }}
        <a :href="props.article.url">more</a>
      </v-card-text>
    </v-img>
  </v-card>
  <!-- End  -->
</template>
<script>
export default {
  name: "NewsCard",
  props: ["article", "index", "showToolbar"],
};
</script>
