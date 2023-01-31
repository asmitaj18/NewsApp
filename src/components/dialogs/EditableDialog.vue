<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-form v-model="valid">
        <v-card>
          <v-card-title>
            <span id="editHeadline" class="text-h5">Edit Headline</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    filled
                    label="Title*"
                    required
                    auto-grow
                    v-model="headline"
                    :rules="[rules.required, rules.max]"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              id="closeBtn"
              color="blue darken-1"
              text
              @click="$emit('close')"
            >
              Close
            </v-btn>
            <v-btn :disabled="!valid" color="blue darken-1" text @click="save">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      state: this.$store.state,
      newsTitle: "",
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
        max: (v) => (v && v.length < 250) || "Max 250 characters",
      },
    };
  },
  mounted() {
    this.message = this.title;
  },
  computed: {
    headline: {
      set: function (val) {
        this.newsTitle = val;
      },
      get: function () {
        return this.title;
      },
    },
    dialog: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  props: {
    visible: Boolean,
    title: String,
  },
  methods: {
    save: function () {
      this.dialog = false;
      this.$emit("onSave", this.newsTitle);
    },
  },
};
</script>
