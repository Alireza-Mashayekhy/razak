<template>
  <div class="loading">
    <div class="logo">
      <img src="/images/enLogo.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/fa");
    }, 2000);
  },
};
</script>

<style>
</style>