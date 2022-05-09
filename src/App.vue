<template>
  <h1>Message is : {{ msg }}</h1>
  <profile-info></profile-info>
  <profile-info></profile-info>
</template>

<script>
//locally import component
// import ProfileInfo from "./ProfileInfo.vue";
export default {
  data() {
    return {
      msg: "hello world",
    };
  },
  //locally
  // components: {
  //   ProfileInfo,
  // },
};
</script>

<style>
</style>