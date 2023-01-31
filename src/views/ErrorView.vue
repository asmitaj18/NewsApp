<template>
  <v-alert type="error"> {{ message }}</v-alert>
</template>
<script>
export default {
  name: "ErrorView",
  props: {
    message:String
  }
};
</script>
