<template>
  <div class="mainLayout">
    <div class="bar">
      <div class="barIcon" @click="openMenu">
        <div class="firstLine">
          <span></span>
        </div>
        <div class="secLine">
          <span></span>
        </div>
        <div class="thirdLine">
          <span></span>
        </div>
      </div>
      <img src="/images/enLogo.svg" class="enLogo" alt="" />
      <div class="langDiv">
        <div class="resLanguage">
          <img src="/icons/global.svg" alt="global" @click="handelLang" />
          <div class="effect">
            <div>EN</div>
            <div>FA</div>
          </div>
        </div>
      </div>
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
  mounted() {
    document.getElementsByClassName("resLanguage")[0].style.height = "26px";
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
    handelLang() {
      const lang = document.getElementsByClassName("resLanguage")[0];
      if (lang.style.height == "26px") {
        lang.style.height = "125px";
      } else {
        lang.style.height = "26px";
      }
    },
  },
};
</script>