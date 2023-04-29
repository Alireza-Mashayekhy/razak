<template>
  <div class="mainLayout">
    <div class="bar">
      <img src="/icons/bar.svg" alt="bars" @click="openMenu" />
    </div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.headerOpen = true;
      if (window.innerWidth > 719) {
        document.getElementsByClassName("header")[0].style.transition =
          "transform 1s";
        document.getElementsByClassName("header")[0].style.transform =
          "translateX(152px)";
        document.getElementsByClassName("header")[0].style.padding = "0px";
        document.getElementsByClassName("menu")[0].style.display = "none";
        document.getElementsByClassName("langAndScroll")[0].style.display =
          "none";
        document.getElementsByClassName("openedMenu")[0].style.display = "flex";
      } else {
        document.getElementsByClassName("header")[0].style.transition =
          "transform 1s";
        document.getElementsByClassName("header")[0].style.transform =
          "translateX(0px)";
        document.getElementsByClassName("header")[0].style.padding = "0px";
        document.getElementsByClassName("menu")[0].style.display = "none";
        document.getElementsByClassName("langAndScroll")[0].style.display =
          "none";
        document.getElementsByClassName("openedMenu")[0].style.display = "flex";
      }
    },
  },
};
</script>