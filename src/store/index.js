import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
    visited : []
  },
  plugins: [createPersistedState()],
  mutations: {
    setVisitedArticles(state, payload) {
      pushIfNotExist(state.visited, payload, (obj) => obj.title === payload.title)
    },
    setNews(state, payload) {
      state.news = payload;
    },
  },
});
const compare = (array, comparator) => {
  for (let i = 0; i < array.length; ++i) {
      if (comparator(array[i])) return true;
  }
  return false;
};
const pushIfNotExist = (array, element, comparator) => {
  if (!compare(array, comparator)) {
      array.push(element);
  }
};

export default store;
