<template>
  <div class="loading">
    <img src="/images/enLogo.svg " class="logo" alt="logo" />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      document.getElementsByClassName("logo")[0].style.transition = " all 2s";
      document.getElementsByClassName("logo")[0].style.opacity = "1";
    }, 10);
    setTimeout(() => {
      this.$router.push("/fa");
    }, 2000);
  },
};
</script>

<style>
</style>