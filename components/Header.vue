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
            <router-link to="/">مقالات</router-link>
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
            <router-link to="/">لیست محصولات</router-link>
            <router-link to="/">توزیع کنندگان</router-link>
          </div>
          <div class="link">
            <div class="num">03</div>
            <h5>اتاق خبر</h5>
            <router-link to="/">اخبار </router-link>
            <router-link to="/">رویداد های رازک</router-link>
            <router-link to="/">اخبار تیپیکو</router-link>
            <router-link to="/">اخبار سهام</router-link>
          </div>
          <div class="link">
            <div class="num">04</div>
            <h5>لابراتوارهای رازک</h5>
            <router-link to="/">درباره ی رازک</router-link>
            <router-link to="/">مدیران و سهامداران رازک</router-link>
            <router-link to="/">شرکای رازک</router-link>
            <router-link to="/">پورتال سهامداران</router-link>
            <router-link to="/">معرفی لوگو</router-link>
          </div>
          <div class="link">
            <div class="num">05</div>
            <h5>تماس با ما</h5>
            <router-link to="/">اطلاعات تماس</router-link>
            <router-link to="/">صدای مشتریان</router-link>
            <router-link to="/">همکاری با ما</router-link>
            <router-link to="/">ثبت شکایت</router-link>
            <router-link to="/">نظرات همراهان</router-link>
          </div>
          <div class="link">
            <div class="num">06</div>
            <h5>مدیا سنتر</h5>
            <router-link to="/">گالری تصاویر</router-link>
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
  methods: {
    openMenu() {
      document.getElementsByClassName("header")[0].style.transition =
        "transform 1s";
      document.getElementsByClassName("header")[0].style.transform =
        "translateX(152px)";
      document.getElementsByClassName("header")[0].style.padding = "0px";
      document.getElementsByClassName("menu")[0].style.display = "none";
      document.getElementsByClassName("langAndScroll")[0].style.display =
        "none";
      document.getElementsByClassName("openedMenu")[0].style.display = "flex";
    },
    closeMenu() {
      document.getElementsByClassName("header")[0].style.transform =
        "translateX(100vw)";
      setTimeout(() => {
        document.getElementsByClassName("header")[0].style.padding =
          "85px 40px 56px 40px";
        document.getElementsByClassName("menu")[0].style.display = "flex";
        document.getElementsByClassName("langAndScroll")[0].style.display =
          "flex";
        document.getElementsByClassName("openedMenu")[0].style.display = "none";
        document.getElementsByClassName("header")[0].style.transition = "none";
      }, 700);
    },
  },
};
</script>

<style>
</style>