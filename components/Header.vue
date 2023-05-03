<template>
  <div class="header d-flex justify-content-between flex-column">
    <div class="menu">
      <img @click="openMenu" src="/icons/bar.svg" alt="bar" />
      <div>منو</div>
    </div>
    <div class="langAndScroll">
      <div class="language">
        <div>FA</div>
        <img src="/icons/global.svg" alt="global" />
      </div>
      <div class="scroll">
        <div>اسکرول کنید</div>
        <img src="/icons/mouse.svg" alt="mouse" />
      </div>
    </div>
    <div class="openedMenu">
      <div class="topDiv d-flex justify-content-between">
        <img src="/images/enLogo.svg" class="enLogo" alt="enLogo" />
        <img
          src="/icons/xIcon.svg"
          class="xIcon"
          alt="xIcon"
          @click="closeMenu"
        />
      </div>
      <div class="secDiv">
        <div class="links">
          <div class="link">
            <div class="num">01</div>
            <h5>پایگاه دانش</h5>
            <router-link to="/blogs">مقالات</router-link>
            <router-link to="/">نوآوری و تحقیقات</router-link>
            <router-link to="/">مطالعات </router-link>
            <router-link to="/">کتاب الکترونیکی</router-link>
            <router-link to="/">پادکست ها</router-link>
          </div>
          <div class="link">
            <div class="num">02</div>
            <h5>محصولات</h5>
            <router-link to="/">انسانی</router-link>
            <router-link to="/">دامی</router-link>
            <router-link to="/products">لیست محصولات</router-link>
            <router-link to="/distributors">توزیع کنندگان</router-link>
          </div>
          <div class="link">
            <div class="num">03</div>
            <h5>اتاق خبر</h5>
            <router-link to="/news">اخبار </router-link>
            <router-link to="/events">رویداد های رازک</router-link>
            <router-link to="/">اخبار تیپیکو</router-link>
            <router-link to="/stockNews">اخبار سهام</router-link>
          </div>
          <div class="link">
            <div class="num">04</div>
            <h5>لابراتوارهای رازک</h5>
            <router-link to="/aboutUs">درباره ی رازک</router-link>
            <router-link to="/team">مدیران و سهامداران رازک</router-link>
            <router-link to="/partners">شرکای رازک</router-link>
            <router-link to="/">پورتال سهامداران</router-link>
            <router-link to="/">معرفی لوگو</router-link>
          </div>
          <div class="link">
            <div class="num">05</div>
            <h5>تماس با ما</h5>
            <router-link to="/contactUs">اطلاعات تماس</router-link>
            <router-link to="/">صدای مشتریان</router-link>
            <router-link to="/">همکاری با ما</router-link>
            <router-link to="/voc">ثبت شکایت</router-link>
            <router-link to="/comments">نظرات همراهان</router-link>
          </div>
          <div class="link">
            <div class="num">06</div>
            <h5>مدیا سنتر</h5>
            <router-link to="/gallery">گالری تصاویر</router-link>
            <router-link to="/">گالری ویدیوها</router-link>
          </div>
        </div>
        <div class="searchDiv">
          <img src="/icons/search.svg" alt="search" />
          <input type="search" placeholder="جستجو" />
        </div>
      </div>
      <div class="rules">
        <router-link to="/">قوانین و مقررات </router-link>
        <span>|</span>
        <router-link to="/">نقشه سایت</router-link>
        <span>|</span>
        <router-link to="/">حریم خصوصی</router-link>
      </div>
    </div>
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
    window.addEventListener("resize", this.headerResize);
  },
  methods: {
    headerResize() {
      if (window.innerWidth > 719) {
        if (this.headerOpen) {
          document.getElementsByClassName("header")[0].style.transform =
            "translateX(120px)";
          document.getElementsByClassName("header")[0].style.padding = "0px";
        } else {
          document.getElementsByClassName("header")[0].style.transform =
            "translateX(100vw)";
          document.getElementsByClassName("header")[0].style.padding =
            "85px 40px 56px 23px";
        }
      } else {
        if (this.headerOpen) {
          document.getElementsByClassName("header")[0].style.transform =
            "translateX(0px)";
          document.getElementsByClassName("header")[0].style.padding = "0px";
        } else {
          document.getElementsByClassName("header")[0].style.padding =
            "40px 40px 40px 10px";
          document.getElementsByClassName("header")[0].style.transform =
            "translateX(100vw)";
        }
      }
    },
    openMenu() {
      this.headerOpen = true;
      if (window.innerWidth > 719) {
        document.getElementsByClassName("header")[0].style.transition =
          "transform 1s";
        document.getElementsByClassName("header")[0].style.transform =
          "translateX(120px)";
        document.getElementsByClassName("header")[0].style.padding = "0px";
        document.getElementsByClassName("menu")[0].style.display = "none";
        document.getElementsByClassName("langAndScroll")[0].style.display =
          "none";
        document.getElementsByClassName("openedMenu")[0].style.display = "flex";
      } else {
        document.getElementsByClassName("header")[0].style.transition =
          "transform 1s";
        document.getElementsByClassName("header")[0].style.transform =
          "translateX(80px)";
        document.getElementsByClassName("header")[0].style.padding = "0px";
        document.getElementsByClassName("menu")[0].style.display = "none";
        document.getElementsByClassName("langAndScroll")[0].style.display =
          "none";
        document.getElementsByClassName("openedMenu")[0].style.display = "flex";
      }
    },
    closeMenu() {
      this.headerOpen = false;
      if (window.innerWidth > 719) {
        document.getElementsByClassName("header")[0].style.transform =
          "translateX(100vw)";
        setTimeout(() => {
          document.getElementsByClassName("header")[0].style.padding =
            "85px 40px 56px 23px";
          document.getElementsByClassName("menu")[0].style.display = "flex";
          document.getElementsByClassName("langAndScroll")[0].style.display =
            "flex";
          document.getElementsByClassName("openedMenu")[0].style.display =
            "none";
          document.getElementsByClassName("header")[0].style.transition =
            "none";
        }, 800);
      } else {
        document.getElementsByClassName("header")[0].style.transform =
          "translateX(100vw)";
        setTimeout(() => {
          document.getElementsByClassName("header")[0].style.padding =
            "40px 40px 40px 10px";
          document.getElementsByClassName("menu")[0].style.display = "flex";
          document.getElementsByClassName("langAndScroll")[0].style.display =
            "flex";
          document.getElementsByClassName("openedMenu")[0].style.display =
            "none";
          document.getElementsByClassName("header")[0].style.transition =
            "none";
        }, 800);
      }
    },
  },
  watch: {
    "$route.path"() {
      this.closeMenu();
    },
  },
};
</script>

<style>
</style>