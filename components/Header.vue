<template>
  <div class="header">
    <div
      class="faHeader faPage justify-content-between flex-column"
      v-show="$store.state.lang == 'fa'"
    >
      <div class="menu">
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
        <div class="text">منو</div>
      </div>
      <div class="langAndScroll">
        <div class="language">
          <div class="effect">
            <div @click="changeToEn">EN</div>
            <div @click="changeToFa">FA</div>
          </div>
          <img src="/icons/global.svg" alt="global" @click="handelLang" />
        </div>
        <div class="scroll">
          <div>اسکرول کنید</div>
          <img src="/icons/mouse.svg" alt="mouse" />
        </div>
      </div>
      <div class="openedMenu">
        <div class="topDiv d-flex justify-content-between">
          <router-link to="/fa">
            <img src="/images/enLogo.svg" class="enLogo" alt="enLogo" />
          </router-link>
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
              <router-link to="/fa/blogs">مقالات</router-link>
              <router-link to="/fa/">نوآوری و تحقیقات</router-link>
              <router-link to="/fa/">مطالعات </router-link>
              <router-link to="/fa/">کتاب الکترونیکی</router-link>
              <router-link to="/fa/">پادکست ها</router-link>
            </div>
            <div class="link">
              <div class="num">02</div>
              <h5>محصولات</h5>
              <router-link to="/fa/">انسانی</router-link>
              <router-link to="/fa/">دامی</router-link>
              <router-link to="/fa/products">لیست محصولات</router-link>
              <router-link to="/fa/distributors">توزیع کنندگان</router-link>
            </div>
            <div class="link">
              <div class="num">03</div>
              <h5>اتاق خبر</h5>
              <router-link to="/fa/news">اخبار </router-link>
              <router-link to="/fa/events">رویداد های رازک</router-link>
              <router-link to="/fa/">اخبار تیپیکو</router-link>
              <router-link to="/fa/stockNews">اخبار سهام</router-link>
            </div>
            <div class="link">
              <div class="num">04</div>
              <h5>لابراتوارهای رازک</h5>
              <router-link to="/fa/aboutUs">درباره ی رازک</router-link>
              <router-link to="/fa/team">مدیران و سهامداران رازک</router-link>
              <router-link to="/fa/partners">شرکای رازک</router-link>
              <router-link to="/fa/">پورتال سهامداران</router-link>
              <router-link to="/fa/">معرفی لوگو</router-link>
            </div>
            <div class="link">
              <div class="num">05</div>
              <h5>تماس با ما</h5>
              <router-link to="/fa/contactUs">اطلاعات تماس</router-link>
              <router-link to="/fa/voc">صدای مشتریان</router-link>
              <router-link to="/fa/">همکاری با ما</router-link>
              <router-link to="/fa/voc">ثبت شکایت</router-link>
              <router-link to="/fa/comments">نظرات همراهان</router-link>
            </div>
            <div class="link">
              <div class="num">06</div>
              <h5>مدیا سنتر</h5>
              <router-link to="/fa/gallery">گالری تصاویر</router-link>
              <router-link to="/fa/">گالری ویدیوها</router-link>
            </div>
          </div>
          <div class="searchDiv">
            <img src="/icons/search.svg" alt="search" />
            <input type="search" placeholder="جستجو" />
          </div>
        </div>
        <div class="rules">
          <router-link to="/fa/">قوانین و مقررات </router-link>
          <span>|</span>
          <router-link to="/fa/">نقشه سایت</router-link>
          <span>|</span>
          <router-link to="/fa/">حریم خصوصی</router-link>
        </div>
      </div>
    </div>
    <div
      class="enHeader enPage justify-content-between flex-column"
      v-show="$store.state.lang == 'en'"
    >
      <div class="menu">
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
        <div class="text">menu</div>
      </div>
      <div class="langAndScroll">
        <div class="language">
          <div class="effect">
            <div @click="changeToEn">EN</div>
            <div @click="changeToFa">FA</div>
          </div>
          <img src="/icons/global.svg" alt="global" @click="handelEnLang" />
        </div>
        <div class="scroll">
          <div>Scroll</div>
          <img src="/icons/mouse.svg" alt="mouse" />
        </div>
      </div>
      <div class="openedMenu">
        <div class="topDiv d-flex justify-content-between">
          <router-link to="/en">
            <img src="/images/enLogo.svg" class="enLogo" alt="enLogo" />
          </router-link>
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
              <h5>Knowledge base</h5>
              <router-link to="en/blogs">Articles</router-link>
              <router-link to="/en/">Innovation and research</router-link>
              <router-link to="/en/">Studies</router-link>
              <router-link to="/en/">Electronic book</router-link>
              <router-link to="/en/">Podcasts</router-link>
            </div>
            <div class="link">
              <div class="num">02</div>
              <h5>Products</h5>
              <router-link to="/en/">Human</router-link>
              <router-link to="/en/">Livestock</router-link>
              <router-link to="/en/products">Products List</router-link>
              <router-link to="/en/distributors">Distributors</router-link>
            </div>
            <div class="link">
              <div class="num">03</div>
              <h5>News Room</h5>
              <router-link to="/en/news">News </router-link>
              <router-link to="/en/events">Razak events</router-link>
              <router-link to="/en/">Tipico news</router-link>
              <router-link to="/en/stockNews">Stock news</router-link>
            </div>
            <div class="link">
              <div class="num">04</div>
              <h5>Razak Laboratories</h5>
              <router-link to="/en/aboutUs">About Razak</router-link>
              <router-link to="/en/team"
                >Managers and shareholders of Razak</router-link
              >
              <router-link to="/en/partners">Razak partners</router-link>
              <router-link to="/en/">Shareholder portal</router-link>
              <router-link to="/en/">Introducing the logo</router-link>
            </div>
            <div class="link">
              <div class="num">05</div>
              <h5>contact us</h5>
              <router-link to="/en/contactUs">Contacts</router-link>
              <router-link to="/en/voc">The voice of customers</router-link>
              <router-link to="/en/">Work with us</router-link>
              <router-link to="/en/voc">Submitting a complaint</router-link>
              <router-link to="/en/comments">Companions' comments</router-link>
            </div>
            <div class="link">
              <div class="num">06</div>
              <h5>Media Center</h5>
              <router-link to="/en/gallery">Photo gallery</router-link>
              <router-link to="/en/">Video gallery</router-link>
            </div>
          </div>
          <div class="searchDiv">
            <img src="/icons/search.svg" alt="search" />
            <input type="search" placeholder="search" />
          </div>
        </div>
        <div class="rules">
          <router-link to="en/">Terms and Conditions</router-link>
          <span>|</span>
          <router-link to="en/">Sitemap</router-link>
          <span>|</span>
          <router-link to="en/">Privacy</router-link>
        </div>
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
    document.getElementsByClassName("language")[0].style.height = "25px";
    document.getElementsByClassName("language")[1].style.height = "25px";
  },
  methods: {
    headerResize() {
      if (window.innerWidth > 719) {
        if (this.headerOpen) {
          document.getElementsByClassName("faHeader")[0].style.transform =
            "translateX(105px)";
          document.getElementsByClassName("faHeader")[0].style.padding = "0px";
          document.getElementsByClassName("enHeader")[0].style.transform =
            "translateX(-105px)";
          document.getElementsByClassName("enHeader")[0].style.padding = "0px";
        } else {
          document.getElementsByClassName("faHeader")[0].style.transform =
            "translateX(100vw)";
          document.getElementsByClassName("faHeader")[0].style.padding =
            "85px 40px 56px 18px";
          document.getElementsByClassName("enHeader")[0].style.transform =
            "translateX(-100vw)";
          document.getElementsByClassName("enHeader")[0].style.padding =
            "85px 33px 56px 40px";
        }
      } else {
        if (this.headerOpen) {
          document.getElementsByClassName("faHeader")[0].style.transform =
            "translateX(0px)";
          document.getElementsByClassName("faHeader")[0].style.padding = "0px";
          document.getElementsByClassName("enHeader")[0].style.transform =
            "translateX(0px)";
          document.getElementsByClassName("enHeader")[0].style.padding = "0px";
        } else {
          document.getElementsByClassName("faHeader")[0].style.padding =
            "40px 40px 40px 10px";
          document.getElementsByClassName("faHeader")[0].style.transform =
            "translateX(100vw)";
          document.getElementsByClassName("enHeader")[0].style.padding =
            "40px 40px 40px 10px";
          document.getElementsByClassName("enHeader")[0].style.transform =
            "translateX(-100vw)";
        }
      }
    },
    openMenu() {
      this.headerOpen = true;
      if (window.innerWidth > 719) {
        document.getElementsByClassName("faHeader")[0].style.transition =
          "transform 1s";
        document.getElementsByClassName("faHeader")[0].style.transform =
          "translateX(105px)";
        document.getElementsByClassName("faHeader")[0].style.padding = "0px";
        document.getElementsByClassName("enHeader")[0].style.transition =
          "transform 1s";
        document.getElementsByClassName("enHeader")[0].style.transform =
          "translateX(-105px)";
        document.getElementsByClassName("enHeader")[0].style.padding = "0px";
        document.getElementsByClassName("menu")[0].style.display = "none";
        document.getElementsByClassName("langAndScroll")[0].style.display =
          "none";
        document.getElementsByClassName("openedMenu")[0].style.display = "flex";
        document.getElementsByClassName("menu")[1].style.display = "none";
        document.getElementsByClassName("langAndScroll")[1].style.display =
          "none";
        document.getElementsByClassName("openedMenu")[1].style.display = "flex";
      } else {
        document.getElementsByClassName("faHeader")[0].style.transition =
          "transform 1s";
        document.getElementsByClassName("faHeader")[0].style.transform =
          "translateX(80px)";
        document.getElementsByClassName("faHeader")[0].style.padding = "0px";
        document.getElementsByClassName("enHeader")[0].style.transition =
          "transform 1s";
        document.getElementsByClassName("enHeader")[0].style.transform =
          "translateX(80px)";
        document.getElementsByClassName("enHeader")[0].style.padding = "0px";
        document.getElementsByClassName("menu")[0].style.display = "none";
        document.getElementsByClassName("langAndScroll")[0].style.display =
          "none";
        document.getElementsByClassName("openedMenu")[0].style.display = "flex";
        document.getElementsByClassName("menu")[1].style.display = "none";
        document.getElementsByClassName("langAndScroll")[1].style.display =
          "none";
        document.getElementsByClassName("openedMenu")[1].style.display = "flex";
      }
    },
    closeMenu() {
      this.headerOpen = false;
      if (window.innerWidth > 719) {
        document.getElementsByClassName("faHeader")[0].style.transform =
          "translateX(100vw)";
        document.getElementsByClassName("enHeader")[0].style.transform =
          "translateX(-100vw)";
        setTimeout(() => {
          document.getElementsByClassName("faHeader")[0].style.padding =
            "85px 40px 56px 18px";
          document.getElementsByClassName("enHeader")[0].style.padding =
            "85px 33px 56px 40px";
          document.getElementsByClassName("menu")[0].style.display = "flex";
          document.getElementsByClassName("langAndScroll")[0].style.display =
            "flex";
          document.getElementsByClassName("openedMenu")[0].style.display =
            "none";
          document.getElementsByClassName("menu")[1].style.display = "flex";
          document.getElementsByClassName("langAndScroll")[1].style.display =
            "flex";
          document.getElementsByClassName("openedMenu")[1].style.display =
            "none";
          document.getElementsByClassName("faHeader")[0].style.transition =
            "none";
          document.getElementsByClassName("enHeader")[0].style.transition =
            "none";
        }, 800);
      } else {
        document.getElementsByClassName("faHeader")[0].style.transform =
          "translateX(100vw)";
        document.getElementsByClassName("enHeader")[0].style.transform =
          "translateX(-100vw)";
        setTimeout(() => {
          document.getElementsByClassName("faHeader")[0].style.padding =
            "40px 40px 40px 10px";
          document.getElementsByClassName("enHeader")[0].style.padding =
            "40px 40px 40px 10px";
          document.getElementsByClassName("menu")[0].style.display = "flex";
          document.getElementsByClassName("langAndScroll")[0].style.display =
            "flex";
          document.getElementsByClassName("openedMenu")[0].style.display =
            "none";
          document.getElementsByClassName("menu")[1].style.display = "flex";
          document.getElementsByClassName("langAndScroll")[1].style.display =
            "flex";
          document.getElementsByClassName("openedMenu")[1].style.display =
            "none";
          document.getElementsByClassName("faHeader")[0].style.transition =
            "none";
          document.getElementsByClassName("enHeader")[0].style.transition =
            "none";
        }, 800);
      }
    },
    handelLang() {
      const lang = document.getElementsByClassName("language")[0];
      if (lang.style.height == "25px") {
        lang.style.height = "140px";
      } else {
        lang.style.height = "25px";
      }
    },
    handelEnLang() {
      const lang = document
        .getElementsByClassName("enHeader")[0]
        .getElementsByClassName("language")[0];
      if (lang.style.height == "25px") {
        lang.style.height = "140px";
      } else {
        lang.style.height = "25px";
      }
    },
    changeToEn() {
      this.$store.commit("changeToEn");
      const currentPath = this.$route.fullPath.replace("fa", "en");
      this.$router.push(currentPath);
    },
    changeToFa() {
      this.$store.commit("changeToFa");
      const currentPath = this.$route.fullPath.replace("en", "fa");
      this.$router.push(currentPath);
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