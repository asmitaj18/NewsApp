<template>
  <v-row align="center" style="height: 100%">
    <v-col v-for="(article, i) of news" :key="i" sm="3" cols="12">
      <NewsCard
        testid="news-card"
        @edit="onEditClick(i)"
        @goToDetail="go(i)"
        :article="article"
        :index="i"
        :showToolbar="true"
      />
    </v-col>
    <EditableDialog
      testid="edit-dialog"
      v-if="dialog"
      :title="title"
      :visible="dialog"
      @close="dialog = false"
      @onSave="onSave"
    />
    <v-progress-circular
      class="progressbar"
      v-show="loading"
      indeterminate
      color="primary"
    />
  </v-row>
</template>

<script>
import router from "@/router";
import NewsCard from "@/components/NewsCard/NewsCard.vue";
import EditableDialog from "@/components/dialogs/EditableDialog.vue";
import axios from "../axios";
import endpoints from "../endpoints";
export default {
  name: "NewsView",
  components: {
    EditableDialog,
    NewsCard,
  },
  data() {
    return {
      state: this.$store.state,
      dialog: false,
      title: "",
      editIndex: -1,
      loading: false,
    };
  },
  computed: {
    news() {
      return this.state?.news;
    },
  },
  mounted() {
    (async () => {
      this.loading = true;
      this.$store.commit("setNews", []);
      await axios
        .get(`${endpoints.TOP_HEADLINES}&country=us`)
        .then((res) => {
          this.$store.commit("setNews", res.data?.articles);
        })
        .catch((exception) => {
          console.log(exception);
        });
      this.loading = false;
    })();
  },
  methods: {
    go(index) {
      this.$store.commit("setVisitedArticles", this.news[index]);
      router.push({ name: "NewsDeatilView", params: { index: index } });
    },
    onEditClick(index) {
      this.editIndex = index;
      this.title = this.news[index].title;
      this.dialog = true;
    },
    onSave: function (updatedTitle) {
      this.news[this.editIndex].title = updatedTitle;
    },
  },
};
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  align-items: center;
  justify-items: center;
}
.progressbar {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
