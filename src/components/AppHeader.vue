<!-- Functional Component for 
     rendring reusable item 
     This component will not store any
     state or instance.
     it is a dumb component
    -->
<template functional>
  <v-card class="custom-app-bar" min-height="70px">
    <!-- Title -->
    <v-row align="center" class="mt-5 mr-5 ml-5">
      <v-col class="pa-0" cols="4" align="start">
        <h3 id="heading">Top Headline</h3>
      </v-col>
      <v-col class="pa-0" cols="8">
        <v-row align="center" justify="end">
          <!-- Button to navigate to visited News -->
          <v-btn
            class="mr-4"
            small
            color="primary"
            v-on:click="listeners.onWrongApiClick"
          >
            Error Api
          </v-btn>
          <v-btn
            class="mr-4"
            small
            color="primary"
            v-on:click="listeners.onHistoryClick"
          >
            History
          </v-btn>
          <v-btn class="mr-4" icon v-on:click="listeners.toggleSearch">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="pb-0">
      <v-expand-transition>
        <v-col height="100px" class="mr-5 ml-5 mx-auto" v-show="props.expand">
          <v-row class="mt-5">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              v-model="searchText"
              label="Search"
              single-line
              hide-details
              filled
            >
            </v-text-field>
            <v-btn icon v-on:click="listeners.performSearch(searchText)">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <v-combobox
              class="mt-7"
              filled
              clearable
              small-chips
              single-line
              hide-selected
              outlined
              dense
              label="Select Source"
              v-model="selectedSource"
              :item-text="text"
              :item-value="id"
              :items="props.sources"
              :return-object="true"
              v-on:change="listeners.onSourceSelect"
            ></v-combobox>
          </v-row>
        </v-col>
      </v-expand-transition>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AppHeader",
  props: ["sources", "expand"],
  data() {
    return { searchText: "", selectedSource: {} };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.custom-app-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 200;
}
</style>
