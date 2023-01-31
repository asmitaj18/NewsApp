<template>
  <v-app>
    <AppHeader
      @performSearch="getFilteredNews"
      @onHistoryClick="onHistoryClick"
      @onSourceSelect="onSourceSelect"
      @toggleSearch="toggleSearch"
      @onWrongApiClick="onWrongApiClick"
      :sources="sources"
      :expand="expand"
    />

    <v-main>
      <v-container height="100%" fluid style="margin-top: 70px">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "./axios";
import endpoints from "./endpoints";
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      state: this.$store.state,
      loading: false,
      sources: [],
      sourcesItem: {
        text: "",
        id: "",
      },
      expand: false,
      isError: false,
    };
  },
  mounted() {
    (async () => {
      await axios
        .get(`${endpoints.SOURCES}`)
        .then((res) => {
          this.sources = res.data?.sources?.map(
            (item) => (this.sourcesItem = { text: item.name, id: item.id })
          );
        })
        .catch((exception) => {
          console.log(exception);
        });
    })();
  },
  methods: {
    getFilteredNews(searchText, selectedSource) {
      (async () => {
        let endPoint = selectedSource
          ? `${endpoints.TOP_HEADLINES}&sources=${selectedSource.id}`
          : searchText
          ? `${endpoints.SEARCH_TEXT_URL}&q=${searchText}`
          : `${endpoints.TOP_HEADLINES}&country=us`;

        this.loading = true;
        this.$store.commit("setNews", []);
        await axios
          .get(endPoint)
          .then((res) => {
            this.$store.commit("setNews", res.data?.articles);
          })
          .catch((exception) => {
            console.log(exception);
          });
        this.loading = false;
      })();
    },
    onHistoryClick: function () {
      this.$router.push({ name: "history" });
    },
    onSourceSelect: function (selectedSource) {
      this.getFilteredNews(null, selectedSource);
    },
    onWrongApiClick: function () {
      (async () => {
        await axios.get(`${endpoints.TOP_HEADLINES}`).catch((exception) => {
          console.log(exception);
        });
      })();
    },
    toggleSearch: function () {
      this.expand = !this.expand;
    },
  },
};
</script>
